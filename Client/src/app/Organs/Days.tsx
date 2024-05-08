import React, { useState, ReactNode } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

interface AccordionTriggerProps {
  children: ReactNode;
}

interface AccordionContentProps {
  children: ReactNode;
  isOpen: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => (
  <div className="w-full">{children}</div>
);

const AccordionItem: React.FC<AccordionItemProps> = ({ children, isOpen, onClick }) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden ${isOpen ? '' : 'mb-4'}`} onClick={onClick}>
    {children}
  </div>
);

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children }) => (
  <div className="flex justify-between items-center p-8 cursor-pointer hover:bg-gray-100 focus:bg-gray-100">
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [1, 2, 3].map((item, index) => (
    <AccordionItem 
      key={index} 
      isOpen={openIndex === index} 
      onClick={() => handleClick(index)}
    >
      <AccordionTrigger>
        <h1 className="text-amber-500 text-xl sm:text-2xl font-bold">Day 0{item}</h1>
        <p className="text-sm text-gray-800">Check out the day plan below to see what you'll get up to. Feel free to personalize this offer.</p>
      </AccordionTrigger>
      <AccordionContent isOpen={openIndex === index}>
        <ol className="border-s border-gray-200 pl-4 space-y-6">
          <li>
            <div className="flex items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1 mr-3"></span>
              <div>
                <time className="block text-sm font-normal leading-none text-gray-900">09:00 AM - Meeting point</time>
                <h3 className="mt-1 text-lg font-semibold">Main Conference Room</h3>
                <p className="mt-1 text-base font-normal text-gray-500">We will start the day with a brief introduction and overview of the day's activities.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1 mr-3"></span>
              <div>
                <time className="block text-sm font-normal leading-none text-gray-900">12:00 AM - Meeting point</time>
                <h3 className="mt-1 text-lg font-semibold">Main Conference Room</h3>
                <p className="mt-1 text-base font-normal text-gray-500">We will start the day with a brief introduction and overview of the day's activities.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-1 mr-3"></span>
              <div>
                <time className="block text-sm font-normal leading-none text-gray-900">16:00 AM - Meeting point</time>
                <h3 className="mt-1 text-lg font-semibold">Main Conference Room</h3>
                <p className="mt-1 text-base font-normal text-gray-500">We will start the day with a brief introduction and overview of the day's activities.</p>
              </div>
            </div>
          </li>
        </ol>
      </AccordionContent>
    </AccordionItem>
  ));

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 my-8">
      <div className="w-full max-w-4xl mx-auto">
        <Accordion>
          {accordionItems}
        </Accordion>
      </div>
    </div>
  );
};

export default DayPlanAccordion;
