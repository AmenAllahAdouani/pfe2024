import React, { useState } from 'react';
import Sidebar from '../Organs/Sidebar';
import Navbar from '../Organs/Navbar';

const questions = [
  "What was your favorite part of the trip?",
  "Did you discover any new attractions?",
  "Would you recommend our service to others?"
];

function Reviews() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [animation, setAnimation] = useState("");

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setAnimation('animate-slideLeft');
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer("");
        setAnimation('animate-slideRight');
      }, 500);
    } else {
      setAnimation('animate-slideLeft');
      setTimeout(() => {
        setCurrentQuestionIndex(-1); 
        setAnimation('animate-slideRight');
      }, 500);
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
          {currentQuestionIndex >= 0 ? (
            <>
              <div className="text-lg font-semibold">{questions[currentQuestionIndex]}</div>
              <input
                type="text"
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
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
