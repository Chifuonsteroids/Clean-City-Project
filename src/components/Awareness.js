import React, { useState, useEffect } from 'react';
import './Awareness.css';

const tips = [
  'Compost your food scraps to reduce landfill waste by up to 30%.',
  'Use reusable bags, bottles, and containers to eliminate single-use plastics.',
  'Separate recyclables from general waste to improve recycling efficiency.',
  'Schedule regular waste pickups to keep your area clean and organized.',
  'Donate items you no longer need instead of throwing them away.',
  'Rinse containers before recycling to avoid contamination.',
  'Buy products with minimal packaging to reduce waste.',
  'Use cloth napkins instead of paper towels.',
  'Repair items instead of replacing them when possible.',
  'Support local recycling programs and initiatives.'
];

const quizzes = [
  {
    question: 'Which of these items is NOT recyclable in most curbside programs?',
    options: [
      'Plastic bottles',
      'Glass jars',
      'Pizza boxes with grease',
      'Aluminum cans'
    ],
    answer: 2,
    explanation: 'Pizza boxes with grease cannot be recycled due to food contamination.'
  },
  {
    question: 'How long does it take for a plastic bottle to decompose?',
    options: [
      '10-20 years',
      '100-200 years',
      '450-500 years',
      '1000+ years'
    ],
    answer: 2,
    explanation: 'Plastic bottles can take 450-500 years to decompose in landfills.'
  },
  {
    question: 'What percentage of marine pollution comes from plastic waste?',
    options: [
      '30%',
      '50%',
      '70%',
      '90%'
    ],
    answer: 2,
    explanation: 'Approximately 70% of marine pollution comes from plastic waste.'
  }
];

const infographics = [
  {
    title: 'Waste Composition',
    data: { waste: 60, recycled: 40 },
    description: 'On average, only 40% of household waste is recycled. Let\'s do better!'
  },
  {
    title: 'Plastic Impact',
    data: { plastic: 80, other: 20 },
    description: '80% of ocean plastic comes from land-based sources.'
  },
  {
    title: 'Energy Savings',
    data: { saved: 75, used: 25 },
    description: 'Recycling aluminum saves 75% of the energy needed to make new cans.'
  }
];

export default function Awareness() {
  const [tipIdx, setTipIdx] = useState(0);
  const [quizIdx, setQuizIdx] = useState(0);
  const [infographicIdx, setInfographicIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTipIdx(i => (i+1)%tips.length), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setInfographicIdx(i => (i+1)%infographics.length), 8000);
    return () => clearInterval(interval);
  }, []);

  const handleQuiz = idx => {
    setSelected(idx);
    setShowResult(true);
    setTotalAnswered(prev => prev + 1);
    if (idx === quizzes[quizIdx].answer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuiz = () => {
    setSelected(null);
    setShowResult(false);
    setQuizIdx(prev => (prev + 1) % quizzes.length);
  };

  const currentQuiz = quizzes[quizIdx];
  const currentInfographic = infographics[infographicIdx];

  return (
    <div className="awareness-page-root">
      <div className="awareness-card-main" role="main" aria-label="Eco Awareness Center">
        <div className="awareness-brand">🧹 <span>CleanCity</span></div>
        <h2>Eco Awareness Center</h2>
        
        <section className="awareness-tips-section">
          <h3>💡 Daily Eco Tip</h3>
          <div className="awareness-tip-card">
            <p className="awareness-tip-text">{tips[tipIdx]}</p>
            <div className="awareness-tip-counter">
              {tipIdx + 1} of {tips.length}
            </div>
          </div>
        </section>

        <section className="awareness-quiz-section">
          <h3>🧠 Eco Quiz</h3>
          <div className="awareness-quiz-card">
            <div className="quiz-header">
              <span className="quiz-progress">Question {quizIdx + 1} of {quizzes.length}</span>
              <span className="quiz-score">Score: {score}/{totalAnswered}</span>
            </div>
            <div className="awareness-question">{currentQuiz.question}</div>
            <div className="awareness-options">
              {currentQuiz.options.map((opt, i) => (
                <button
                  key={i}
                  className={`quiz-option ${selected === i ? (i === currentQuiz.answer ? 'correct' : 'wrong') : ''}`}
                  onClick={() => handleQuiz(i)}
                  disabled={showResult}
                  aria-label={`Option ${i + 1}: ${opt}`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {showResult && (
              <div className="awareness-result">
                <div className="result-message">
                  {selected === currentQuiz.answer ? '🎉 Correct!' : '❌ Incorrect'}
                </div>
                <div className="result-explanation">
                  {currentQuiz.explanation}
                </div>
                <button onClick={nextQuiz} className="awareness-action-btn">
                  Next Question
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="awareness-infographic-section">
          <h3>📊 Did You Know?</h3>
          <div className="awareness-infographic-card">
            <h4>{currentInfographic.title}</h4>
            <div className="infographic-chart">
              <svg width="260" height="120" viewBox="0 0 260 120">
                <circle cx="60" cy="60" r="50" fill="#e0f7fa" />
                <circle cx="200" cy="60" r="50" fill="#ffe082" />
                <text x="60" y="65" textAnchor="middle" fontSize="18" fill="#185a9d">
                  {Object.values(currentInfographic.data)[0]}%
                </text>
                <text x="200" y="65" textAnchor="middle" fontSize="18" fill="#185a9d">
                  {Object.values(currentInfographic.data)[1]}%
                </text>
                <text x="60" y="100" textAnchor="middle" fontSize="13" fill="#43cea2">
                  {Object.keys(currentInfographic.data)[0]}
                </text>
                <text x="200" y="100" textAnchor="middle" fontSize="13" fill="#43cea2">
                  {Object.keys(currentInfographic.data)[1]}
                </text>
              </svg>
            </div>
            <div className="awareness-info">{currentInfographic.description}</div>
            <div className="infographic-counter">
              {infographicIdx + 1} of {infographics.length}
            </div>
          </div>
        </section>

        <section className="awareness-actions">
          <h3>🚀 Take Action</h3>
          <div className="action-buttons">
            <button className="awareness-action-btn" onClick={() => window.location.href='/home'}>
              Schedule Pickup
            </button>
            <button className="awareness-action-btn" onClick={() => window.location.href='/feedback'}>
              Report Issues
            </button>
            <button className="awareness-action-btn" onClick={() => window.location.href='/community'}>
              Join Community
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 