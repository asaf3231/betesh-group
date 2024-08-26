import React, { useState } from 'react';
import '../Styles/QuestionPage.css';

function QuestionPage({ question, onAnswer }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.trim() !== '') {
      onAnswer(answer.trim());
    }
  };

  return (
    <div className="question-page">
      <h2>{question.question}</h2>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer here..."
        className="text-box"
      />
      <button onClick={handleSubmit} className="next-button">
        Next
      </button>
    </div>
  );
}

export default QuestionPage;