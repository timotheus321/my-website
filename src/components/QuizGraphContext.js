// QuizGraphContext.js
import React, { createContext, useContext, useState } from 'react';
import { Graph } from './Graph';
import quizQuestions from './quizQuestions';

const QuizGraphContext = createContext();

export const QuizGraphProvider = ({ children }) => {
  const [graph] = useState(() => {
    const newGraph = new Graph();
    // Assuming categorization and difficulty are already embedded in your questions
    // Initialize graph with starting point
    newGraph.addNode("start");
    
    // Example of dynamically building branches for different categories and difficulties
    const categories = ["LinkedList", "Array"]; 
    categories.forEach(category => {
      quizQuestions
        .filter(q => q.category === category)
        .forEach((question, index) => {
          let nodeId = `${category}-${question.difficulty}-${index}`;
          newGraph.addNode(nodeId);
          // Dynamically connect nodes here based on your logic, e.g., next difficulty or category
          // This is a simplistic approach; you'll need a more sophisticated method to create a meaningful learning path
        });
    });

    // Connect start to the first question of each category, as an example
    categories.forEach(category => {
      let firstQuestionId = `${category}-1-0`; // Assuming difficulty starts at 1 and index at 0
      newGraph.findNode("start").addEdge(category, firstQuestionId);
     
    });
  
    return newGraph;
  });

//   const [userPerformance, setUserPerformance] = useState({
//     correctAnswers: 0,
//     totalQuestions: 0,
//     // Add more metrics as needed
//   });
  

  return (
    <QuizGraphContext.Provider value={{ graph }}>
      {children}
    </QuizGraphContext.Provider>
  );
};

export const useQuizGraph = () => useContext(QuizGraphContext);
