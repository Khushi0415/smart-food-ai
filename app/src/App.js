<div className="ai-response-card">
  {response && typeof response === 'object' ? (
    <div>
      {/* Updated to link the UX to the ANNAPURNA Engine */}
      <div className="ai-card-header">
        <span role="img" aria-label="leaf">🌾</span> ANNAPURNA AI | SIM Module
      </div>
      
      <div className="ai-answer-text">
        {/* Displays the clean AI output without brackets */}
        {response.answer || response.text || JSON.stringify(response).replace(/[{}"]/g, '')}
      </div>

      {/* Dynamic Badge powered by Spoilage Intelligence Module (SIM) */}
      {response.shelf_life && (
        <div className="shelf-life-badge" style={{ 
          marginTop: '12px', 
          backgroundColor: '#e8f5e9', 
          color: '#2e7d32', 
          padding: '5px 10px', 
          borderRadius: '8px', 
          fontSize: '0.85rem', 
          fontWeight: 'bold' 
        }}>
          SIM Forecast: {response.shelf_life}
        </div>
      )}
      
      <div style={{ fontSize: '0.65rem', color: '#999', marginTop: '8px', textAlign: 'right' }}>
        Intelligence Pillar: SIM-v1.0
      </div>
    </div>
  ) : (
    <div className="ai-answer-text">
      {/* Keep this simple as per the existing flow */}
      {response || "Enter a crop name for ANNAPURNA storage advice."}
    </div>
  )}
</div>
