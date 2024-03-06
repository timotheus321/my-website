import React, { createContext, useState } from 'react';

const KnowledgeTopicContext = createContext();

export const KnowledgeTopicProvider = ({ children }) => {
  const [topics] = useState([
    {
      name: 'Quantum Theory',
      path: '/quantum-theory',
      description: 'Explores the behavior of matter and energy at the smallest scales. Key area: Quantum Computing.',
    },
    {
      name: 'Epistemology',
      path: '/epistemology',
      description: 'Examines the nature and scope of knowledge and belief. Key concept: Critical Rationalism.',
    },
    {
      name: 'Theory of Computation',
      path: '/computer-science',
      description: 'Studies the limits and capabilities of computing. Intersects with Quantum Computing.',
    },
    {
      name: 'Theory of Evolution',
      path: '/evolution',
      description: 'Describes the process by which organisms change over time through natural selection.',
    },
    // Add other topics as needed
  ]);

  return (
    <KnowledgeTopicContext.Provider value={{ topics }}>
      {children}
    </KnowledgeTopicContext.Provider>
  );
};

export default KnowledgeTopicContext;
