import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Reviews {
  _id?: string;
  UserName: string;
  Questions: {
    Question1: string;
    Question2: string;
    Question3: string;
  };
  ReviewDate: string; // Use string if it's a string from the API, otherwise Date if parsed
}

const Fans: React.FC = () => {
  const [reviews, setReviews] = useState<Reviews[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/reviews');
        const data: Reviews[] = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="text-gray-600 dark:text-gray-300 mb-16">
      <div className="mb-20 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white md:text-5xl">
          We have <span className="text-amber-500">some fans.</span>
        </h2>
        <p className="text-md text-center text-gray-500 dark:text-gray-300">
          See what our users have to say about revolutionizing their travel experiences with Trip Maker AI.
        </p>
      </div>
      <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
        {reviews.map((review) => (
          <div key={review._id} className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <Avatar className="h-8 w-8 ml-2">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h6 className="text-lg font-medium text-gray-700 dark:text-white">{review.UserName}</h6>
                <p className="text-sm text-amber-500 dark:text-gray-300">{new Date(review.ReviewDate).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="mt-8">{`${review.Questions.Question1} ${review.Questions.Question2} ${review.Questions.Question3}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fans;
