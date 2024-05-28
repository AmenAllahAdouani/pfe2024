import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Plan {
  _id: string;
  time: string;
  title: string;
  description: string;
}

const DayPlanAccordion: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get<Plan[]>('http://localhost:3001/api/plans');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };
    fetchPlans();
  }, []);

  return (
    <div>
      <h2>Day Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan._id}>
            <h3>{plan.time}</h3>
            <h4>{plan.title}</h4>
            <p>{plan.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayPlanAccordion;
