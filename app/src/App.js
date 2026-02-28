
<div className="ai-response-card">
  {/* Check if response exists and is an object */}
  {response && typeof response === 'object' ? (
    <div>
      <div className="ai-card-header">🌱 Smart Advice</div>
      <p className="ai-answer-text">
        {/* This grabs ONLY the text, removing the { } brackets */}
        {response.answer || response.text || JSON.stringify(response)}
      </p>
    </div>
  ) : (
    <p className="ai-answer-text">{response}</p>
  )}
</div>
