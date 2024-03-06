import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import KnowledgeTree from './KnowledgeTree';
import HomePage from './homePage';
import ComputerScience from './ComputerScience';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/knowledge-tree" element={<KnowledgeTree />} />
          <Route path="/computer-science" element={<ComputerScience />} /> 
         
  
        </Routes>
        </div>
    </Router>
  );
}

export default App;
