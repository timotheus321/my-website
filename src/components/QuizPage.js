// src/components/QuizPage.js
import React, { useState, useEffect } from 'react';
import { useQuizGraph } from './QuizGraphContext';
import quizQuestions from './quizQuestions';
import './QuizPage.css';

const QuizPage = () => {
  const { graph } = useQuizGraph();
  const [currentNode, setCurrentNode] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [knowledge, setKnowledge] = useState('');

  useEffect(() => {
    setCurrentNode(graph.findNode(0));
  }, [graph]);

  const handleAnswer = (answer) => {
    if (!currentNode) return;

    const question = quizQuestions[currentNode.questionId];
    const correct = answer === question.answer;

    setIsAnswered(true);
    setIsCorrect(correct);

    if (!correct) {
      setKnowledge(question.knowledge);
    } else {
      setKnowledge('');
    }

    const nextNodeId = currentNode.edges[correct ? 'correct' : 'incorrect'];

    if (nextNodeId !== undefined) {
      setCurrentNode(graph.findNode(nextNodeId));
    } else {
      console.log("End of the quiz or incorrect node configuration");
    }
  };

  if (!currentNode) return <div>Loading...</div>;

  const question = quizQuestions[currentNode.questionId];

  return (
    <div className='quiz-container'>
      <h2>Quiz on Data Structures and Algorithms</h2>
      <div className='question'>
        <p>{question.question}</p>
        <div className='options'>
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)} className='option-btn'>
              {option}
            </button>
          ))}
        </div>
      </div>
      {isAnswered && (
        <div className='feedback'>
          <p>{isCorrect ? "Correct Conjecture! :)" : "Refuted! :("}</p>
          {!isCorrect && (
            <>
              <div className='knowledge-text'>
                <p>Knowledge:</p>
              </div>
              <div className='knowledge-code' dangerouslySetInnerHTML={{ __html: knowledge }}></div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
