import React, { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import dayPlansData from './Plan.json';

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
}

interface AccordionContentProps {
  children: React.ReactNode;
  isOpen: boolean;
}

interface DayPlan {
  time: string;
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => (
  <div className="w-full">{children}</div>
);

const AccordionItem: React.FC<AccordionItemProps> = ({ children, isOpen, onToggle }) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden ${isOpen ? '' : 'mb-4'}`}>
    {children}
  </div>
);

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, onClick }) => (
  <div className="flex justify-between items-center p-8 cursor-pointer hover:bg-gray-100 focus:bg-gray-100" onClick={onClick}>
    {children}
    <span className="text-gray-400">
      <KeyboardArrowDownIcon />
    </span>
  </div>
);

const AccordionContent: React.FC<AccordionContentProps> = ({ children, isOpen }) => (
  isOpen ? <div className="p-8">{children}</div> : null
);

const DayPlanAccordion: React.FC = () => {
  const [numberOfDays, setNumberOfDays] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [dayPlans, setDayPlans] = useState<Record<number, DayPlan[]>>({});
  const [editMode, setEditMode] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const fetchTrips = async () => {
      const key = localStorage.getItem('tripID');
      const response = await axios.get<{ Duration: { numberOfDays: number } }>(`http://localhost:3001/api/trips/trips/${key}`);
      const daysArray = Array.from({ length: response.data.Duration.numberOfDays }, (_, i) => i + 1);
      setNumberOfDays(response.data.Duration.numberOfDays);

      const initialDayPlans: Record<number, DayPlan[]> = {};
      for (let i = 1; i <= response.data.Duration.numberOfDays; i++) {
        initialDayPlans[i] = (dayPlansData.initialDayPlans as Record<string, DayPlan[]>)[`day${i}`];
      }
      setDayPlans(initialDayPlans);
    };
    fetchTrips();
  }, []);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handlePlanChange = (day: number, planIndex: number, field: keyof DayPlan, value: string) => {
    const updatedDayPlans = { ...dayPlans };
    updatedDayPlans[day][planIndex][field] = value;
    setDayPlans(updatedDayPlans);
  };

  const toggleEditMode = (day: number) => {
    setEditMode(prevState => ({ ...prevState, [day]: !prevState[day] }));
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const savePlansToDatabase = async () => {
    const key = localStorage.getItem('tripID');
    try {
      await axios.post(`http://localhost:3001/api/plans`, { tripID: key, dayPlans });
      alert('Day plans saved successfully!');
    } catch (error) {
      console.error('Error saving day plans:', error);
      alert('Failed to save day plans. Please try again.');
    }
  };

  const accordionItems = Object.keys(dayPlans).map((day, index) => (
    <AccordionItem
      key={index}
      isOpen={openIndex === index}
      onToggle={() => handleClick(index)}
    >
      <AccordionTrigger onClick={() => handleClick(index)}>
        <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day {day}</h1>
        <p className="text-sm text-gray-800">Check out the day plan below to see what you'll get up to. Feel free to personalize this offer.</p>
      </AccordionTrigger>
      <AccordionContent isOpen={openIndex === index}>
        <ol className="border-s border-gray-200 pl-4 space-y-6">
          {dayPlans[parseInt(day)].map((plan, planIndex) => (
            <li key={planIndex}>
              <div className="flex items-center">
                <span className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1 mr-3"></span>
                <div>
                  {editMode[parseInt(day)] ? (
                    <>
                      <input
                        type="text"
                        value ={plan.time}
                        onChange={(e) => handlePlanChange(parseInt(day), planIndex, 'time', e.target.value)}
                        className="block w-full text-sm font-normal leading-none text-gray-900"
                        onClick={stopPropagation}
                      />
                      <input
                        type="text"
                        value={plan.title}
                        onChange={(e) => handlePlanChange(parseInt(day), planIndex, 'title', e.target.value)}
                        className="mt-1 w-full text-lg font-semibold"
                        onClick={stopPropagation}
                      />
                      <textarea
                        value={plan.description}
                        onChange={(e) => handlePlanChange(parseInt(day), planIndex, 'description', e.target.value)}
                        className="mt-1 w-full text-base font-normal text-gray-500"
                        onClick={stopPropagation}
                      />
                    </>
                  ) : (
                    <>
                      <time className="block text-sm font-normal leading-none text-gray-900">{plan.time}</time>
                      <h3 className="mt-1 text-lg font-semibold">{plan.title}</h3>
                      <p className="mt-1 text-base font-normal text-gray-500">{plan.description}</p>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex justify-end">
          {editMode[parseInt(day)] ? (
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded"
              onClick={() => toggleEditMode(parseInt(day))}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-amber-500 text-white px-4 py-2 rounded"
              onClick={(e) => { e.stopPropagation(); toggleEditMode(parseInt(day)); }}
            >
              Update
            </button>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  ));

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 my-8">
      <div className="w-full max-w-4xl mx-auto">
        <Accordion>
          {accordionItems}
        </Accordion>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-amber-500 text-white px-4 py-2 rounded"
            onClick={savePlansToDatabase}
          >
            Save All Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayPlanAccordion;
