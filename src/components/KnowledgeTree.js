import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import KnowledgeTopicContext from './KnowledgeTopicsContext';
import './KnowledgeTree.css'; // Import your CSS file for styling

const KnowledgeTree = () => {
  const { topics } = useContext(KnowledgeTopicContext);

  return (
    <div className="knowledge-tree">
      <h1>Knowledge Tree</h1>
      <ul className="topics-list">
        {topics.map((topic, index) => (
          <li key={index} className="topic-item">
            <Link to={topic.path} className="topic-name">{topic.name}</Link>
            <span className="topic-description">: {topic.description}</span>
            {topic.name === "Theory of Computation" && (
              <ul className="sub-topics">
                <li>
                  {/* Assuming "/computer-science" is the correct path for Computer Science */}
                  <Link to="/computer-science" className="sub-topic-link">Computer Science</Link>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KnowledgeTree;
