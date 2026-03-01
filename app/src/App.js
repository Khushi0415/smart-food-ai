import React, { useState } from 'react';
import './App.css';

function App() {
  // In a real demo, this state would be updated after Khushi's API call
  const [response, setResponse] = useState({
    answer: "Keep tomatoes in a cool, dry place away from direct sunlight to maintain peak freshness.",
    shelf_life: "1-week" 
  }); 

  return (
    <div className="app-container">
      {/* ANNAPURNA AI Response Component */}
      <div className="ai-response-card">
        {response && typeof response === 'object' ? (
          <div className="ai-content-wrapper">
            <div className="ai-card-header">
              <span role="img" aria-label="leaf">🌾</span> 
              <strong>ANNAPURNA AI</strong> 
              <span className="module-tag">SIM Module</span>
            </div>
            
            <div className="ai-answer-text">
              {response.answer || response.text || JSON.stringify(response).replace(/[{}"]/g, '')}
            </div>

            {/* Dynamic Badge matching UX Image 3 */}
            {response.shelf_life && (
              <div className="shelf-life-container">
                <div className="shelf-life-badge">
                  SIM PREDICTION: {response.shelf_life}
                </div>
                <small className="accuracy-text">98% Accuracy based on local humidity</small>
              </div>
            )}
          </div>
        ) : (
          <div className="ai-placeholder-text">
            {response || "Enter produce details to trigger the ANNAPURNA SIM Module..."}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
