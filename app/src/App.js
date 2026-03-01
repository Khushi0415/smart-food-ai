import React, { useState } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState(null); // This would come from Khushi's backend

  return (
    <div className="app-container">
      {/* Existing App UI above... */}

      {/* ANNAPURNA AI Response Component */}
      <div className="ai-response-card">
        {response && typeof response === 'object' ? (
          <div>
            <div className="ai-card-header">
              <span role="img" aria-label="leaf">🌾</span> ANNAPURNA AI | SIM Module
            </div>
            
            <div className="ai-answer-text">
              {/* Removes brackets and quotes for a clean look */}
              {response.answer || response.text || JSON.stringify(response).replace(/[{}"]/g, '')}
            </div>

            {/* Shelf-Life Badge (Matches Deeksu's Image 3) */}
            {response.shelf_life && (
              <div className="shelf-life-badge">
                SIM Forecast: {response.shelf_life}
              </div>
            )}
          </div>
        ) : (
          <div className="ai-answer-text">
            {response || "Enter produce details to trigger the ANNAPURNA SIM Module..."}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
