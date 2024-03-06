// KnowledgeTree.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Quizpage from './QuizPage';
import '../KnowledgeTree.css'; 
const KnowledgeTree = () => {
  return (
    <div className='knowledge-tree'>
      <h2>Fabric of Reality</h2>
      <div>
        <h3>Quantum Theory</h3>
        <p>Explores the behavior of matter and energy at the smallest scales. Key area: Quantum Computing.</p>
      </div>
      <div>
        <h3>Epistemology</h3>
        <p>Examines the nature and scope of knowledge and belief. Key concept: Critical Rationalism.</p>
      </div>
      <div>
        <h3>Theory of Computation</h3>
        <p>Studies the limits and capabilities of computing. Intersects with Quantum Computing.</p>
        <Link to="/computer-science">Explore Computer Science</Link>
      </div>
      <div>
        <h3>Theory of Evolution</h3>
        <p>Describes the process by which organisms change over time through natural selection.</p>
      </div>
    </div>
  );
};

export default KnowledgeTree;
