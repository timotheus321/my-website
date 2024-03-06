// src/components/QuizGraphContext.js
import React, { createContext, useContext, useState } from 'react';
import { Graph } from './Graph';
// In QuizGraphContext.js or wherever you need quizQuestions
import quizQuestions from './quizQuestions';


const QuizGraphContext = createContext();

export const QuizGraphProvider = ({ children }) => {
    const [graph] = useState(() => {
      const newGraph = new Graph();
      quizQuestions.forEach((_, index) => {
        newGraph.addNode(index); // Dynamically add a node for each question
      });
      // Dynamically add edges based on your quiz's logic
      quizQuestions.forEach((_, index) => {
        if (index < quizQuestions.length - 1) {
          newGraph.findNode(index).addEdge('correct', index + 1); // Proceed to next question if correct
          // Add more logic for incorrect answers if needed
        }
      });
      return newGraph;
    });
  
    return (
      <QuizGraphContext.Provider value={{ graph }}>
        {children}
      </QuizGraphContext.Provider>
    );
  };
  

export const useQuizGraph = () => useContext(QuizGraphContext);
