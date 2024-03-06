import React, { useState } from 'react';
import './QuizPage.css'; // Ensure you have this CSS file for styling

const quizQuestions = [
  {
    question: "What is the primary benefit of using a linked list over an array?",
    type: "multipleChoice",
    options: ["Dynamic size", "Better performance for large datasets", "Easier access to elements", "Fixed size"],
    answer: "Dynamic size",
    explanation: "Linked lists are dynamic data structures, meaning they can grow and shrink at runtime by allocating and deallocating memory. This is not possible with arrays, which have a fixed size."
  },
  {
    question: "In a singly linked list, each node contains how many pointers to other nodes?",
    type: "text",
    answer: "1",
    explanation: "Each node in a singly linked list contains exactly one pointer to another node, allowing a sequence of nodes to be formed in a single direction."
  }
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); // Use this state to track if the answer was correct
  const [currentExplanation, setCurrentExplanation] = useState('');

  const handleAnswer = (answer) => {
    const correct = answer === quizQuestions[currentQuestionIndex].answer;
    setIsAnswered(true);
    setIsCorrect(correct); // Update based on whether the user's answer matches the correct answer
    setCurrentExplanation(quizQuestions[currentQuestionIndex].explanation);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsAnswered(false);
    } else {
      // Logic to show final results or restart quiz
    }
  };

  return (
    <div>
      <h2>Quiz on Linked Lists</h2>
      {!isAnswered ? (
        <>
          <p>{quizQuestions[currentQuestionIndex].question}</p>
          {quizQuestions[currentQuestionIndex].type === "multipleChoice" ? (
            quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))
          ) : (
            <input
              type="text"
              onBlur={(e) => handleAnswer(e.target.value)}
              placeholder="Type your answer"
              autoFocus
            />
          )}
        </>
      ) : (
        <>
          <p>{isCorrect ? "Correct!" : "Incorrect."}</p>
          <p>Explanation: {currentExplanation}</p>
          <button onClick={handleNextQuestion}>Next Question</button>
        </>
      )}
    </div>
  );
};

export default QuizPage;
