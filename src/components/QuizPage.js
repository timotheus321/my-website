import React, { useState } from 'react';
import quizQuestions from './quizQuestions';
import './QuizPage.css';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); // Simplify by tracking correctness directly
  const [currentKnowledge, setCurrentKnowledge] = useState('');

  const handleAnswer = (answer) => {
    const question = quizQuestions[currentQuestionIndex];
    const correct = answer === question.answer;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (!correct) {
      // If incorrect, show detailed knowledge including the correct answer
      setCurrentKnowledge(question.knowledge);
    } 
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("End of Quiz!"); // Placeholder action for end of quiz
    }
    setIsAnswered(false); // Reset for the next question or quiz restart
    setCurrentKnowledge(''); // Clear the knowledge for the next question
  };

  return (
    <div className='quiz-container'>
      <h2>Quiz on Data Structures and Algorithms</h2>
      <div className='question'>
        <p>{quizQuestions[currentQuestionIndex].question}</p>
        <div className='options'>
          {quizQuestions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)} className='option-btn'>
              {option}
            </button>
          ))}
        </div>
      </div>
      {isAnswered && (
        <div className='feedback'>
          <p>{isCorrect ? "Correct Conjecture! :)" : "Refuted! :0"}</p>
          <div className='knowledge-base'>
            <p>Knowledge:</p>
            <div className='code-example' dangerouslySetInnerHTML={{ __html: currentKnowledge }}></div>
          </div>
          <button onClick={handleNextQuestion} className='next-btn'>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
