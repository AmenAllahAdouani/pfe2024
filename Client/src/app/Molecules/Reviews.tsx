import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '@/firebase';
import Sidebar from '../Organs/Sidebar';
import Navbar from '../Organs/Navbar';

const questions = [
  "What was your favorite part of the trip?",
  "Did you discover any new attractions?",
  "Would you recommend our service to others?"
];

interface Review {
  _id?: string;
  UserName: string;
  Questions: {
    Question1: string;
    Question2: string;
    Question3: string;
  }
}

function Reviews() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState<string[]>(["", "", ""]);
  const [animation, setAnimation] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        setUserName(user.displayName || "Anonymous");
      }
    };

    fetchUserName();
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setAnimation('animate-slideLeft');
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnimation('animate-slideRight');
      }, 500);
    } else {
      setAnimation('animate-slideLeft');
      setTimeout(() => {
        submitReview();
        setReviewSubmitted(true);
        setAnimation('animate-slideRight');
      }, 500);
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...currentAnswers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setCurrentAnswers(newAnswers);
  };

  const submitReview = async () => {
    const review: Review = {
      UserName: userName,
      Questions: {
        Question1: currentAnswers[0],
        Question2: currentAnswers[1],
        Question3: currentAnswers[2]
      }
    };

    try {
      await axios.post('http://localhost:3001/api/reviews', review);
      console.log(review);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-64 flex-shrink-0"> 
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col w-4/5 ml-64">
        <div className="w-full flex-shrink-0 pb-40"> 
          <Navbar />
        </div>
        <div className={`w-full flex-1 max-w-lg px-4 ml-72 transition-transform ${animation}`}>
          {currentQuestionIndex >= 0 && !reviewSubmitted ? (
            <>
              <div className="text-lg font-semibold">{questions[currentQuestionIndex]}</div>
              <input
                type="text"
                value={currentAnswers[currentQuestionIndex]}
                onChange={handleAnswerChange}
                className="mt-4 p-2 border rounded w-full"
                placeholder="Type your answer here..."
              />
              <button
                onClick={handleNextQuestion}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </>
          ) : (
            <div className="thankYouMessage">
              Thank you! 😊
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reviews;