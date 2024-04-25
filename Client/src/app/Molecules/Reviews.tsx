import React, { useState } from 'react';

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
        setCurrentQuestionIndex(-1); // Set to -1 to indicate completion
        setAnimation('animate-slideRight');
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className={`w-full max-w-md px-4 transition-transform ${animation}`}>
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
  );
}

export default Reviews;
