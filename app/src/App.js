<div className="ai-response-card">
  {response && typeof response === 'object' ? (
    <div>
      {/* Updated Header to match the "Green-Tech" aesthetic */}
      <div className="ai-card-header">
        <span role="img" aria-label="leaf">🌱</span> AI Storage Insight
      </div>
      
      <div className="ai-answer-text">
        {/* Grabs the clean text and ensures it matches the UX flow */}
        {response.answer || response.text || JSON.stringify(response).replace(/[{}"]/g, '')}
      </div>

      {/* Adding a dynamic Shelf-Life Badge based on the response */}
      {response.shelf_life && (
        <div className="shelf-life-badge" style={{ marginTop: '12px', backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '5px 10px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          Estimated Shelf Life: {response.shelf_life}
        </div>
      )}
    </div>
  ) : (
    <div className="ai-answer-text">
      {/* Fallback for simple string responses */}
      {response || "Enter a crop name to get AI preservation advice."}
    </div>
  )}
</div>
