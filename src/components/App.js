import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { KnowledgeTopicProvider } from './KnowledgeTopicsContext';
import { QuizGraphProvider } from './QuizGraphContext'; // Adjust the import path as necessary
import KnowledgeTree from './KnowledgeTree';
import HomePage from './HomePage';
import ComputerScience from './ComputerScience';

function App() {
  return (
    <QuizGraphProvider> {/* Wrap the entire application with QuizGraphProvider */}
      <KnowledgeTopicProvider> 
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/knowledge-tree" element={<KnowledgeTree />} />
              <Route path="/computer-science" element={<ComputerScience />} />
              {/* Add more routes here as needed */}
            </Routes>
          </div>
        </Router>
      </KnowledgeTopicProvider>
    </QuizGraphProvider>
  );
}

export default App;
