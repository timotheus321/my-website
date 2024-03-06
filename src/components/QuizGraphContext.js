// src/components/QuizGraphContext.js
import React, { createContext, useContext, useState } from 'react';
import { Graph } from './Graph'; // Adjust the import path as necessary

const QuizGraphContext = createContext();

export const QuizGraphProvider = ({ children }) => {
  const [graph, setGraph] = useState(() => new Graph());

  return (
    <QuizGraphContext.Provider value={{ graph, setGraph }}>
      {children}
    </QuizGraphContext.Provider>
  );
};

export const useQuizGraph = () => useContext(QuizGraphContext);
