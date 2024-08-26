import React, { useState } from 'react';
import QuestionPage from './QuestionPage';
import ConfirmationPage from './ConfirmationPage';

const questions = [
  {
    id: 1,
    question: 'How would you describe your ideal evening out?',
    options: [
      'A quiet dinner at a Michelin-starred restaurant',
      'A lively evening at a rooftop bar',
      'Attending a private art gallery opening',
      'A night at the opera or a classical music concert',
    ],
  },
  {
    id: 2,
    question: 'Which of the following best describes your travel preferences?',
    options: [
      'Luxury resorts and spa retreats',
      'Cultural exploration and historical sites',
      'Adventure and outdoor activities',
      'Exclusive private island experiences',
    ],
  },
  {
    id: 3,
    question: 'What type of events do you most enjoy attending?',
    options: [
      'Private members-only club events',
      'High-end charity galas',
      'Exclusive networking events for industry leaders',
      'Invitation-only fashion shows or art exhibitions',
    ],
  },
  {
    id: 4,
    question: 'When selecting a restaurant, what is most important to you?',
    options: [
      'The chef\'s reputation',
      'The ambiance and design',
      'The exclusivity and privacy',
      'The wine and spirits selection',
    ],
  },
  {
    id: 5,
    question: 'What type of accommodations do you prefer when traveling?',
    options: [
      'A luxury boutique hotel',
      'A private villa or estate',
      'A five-star resort',
      'A members-only club or hotel',
    ],
  },
  {
    id: 6,
    question: 'How do you prioritize luxury spending in your lifestyle?',
    options: [
      'I prioritize quality and exclusivity over price.',
      'I prefer investing in timeless pieces and experiences.',
      'I enjoy spending on luxury but within reason.',
      'I am selective and only spend on what truly matters.',
    ],
  },
];

function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1); // Proceed to confirmation
    }
  };

  if (currentQuestion < questions.length) {
    return (
      <QuestionPage
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    );
  } else {
    return <ConfirmationPage />;
  }
}

export default Questionnaire;