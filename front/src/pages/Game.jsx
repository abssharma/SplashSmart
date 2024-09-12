import one from '../assets/q1.png';
import two from '../assets/q2.png';
import three from '../assets/q3.png';
import four from '../assets/q4.png';
import five from '../assets/q5.png';
import six from '../assets/q6.png';
import seven from '../assets/q7.png';
import eight from '../assets/q8.png';
import nine from '../assets/q9.png';
import ten from '../assets/q10.png';

import backgroundImage from '../assets/bg.png';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const scenarios = [
  {
    image: one,
    question: 'What should you do if you find a leaky faucet at home?',
    options: [
      { text: 'Ignore it and let it leak', isCorrect: false },
      { text: 'Report it to a plumber', isCorrect: true },
      { text: 'Try to fix it yourself without any tools', isCorrect: false },
      { text: 'Use a bucket to collect the water', isCorrect: false }
    ]
  },
  {
    image: two,
    question: 'How can you reduce water usage while brushing your teeth?',
    options: [
      { text: 'Leave the tap running while brushing', isCorrect: false },
      { text: 'Turn off the tap while brushing', isCorrect: true },
      { text: 'Use more water to rinse your mouth', isCorrect: false },
      { text: 'Brush your teeth under a running shower', isCorrect: false }
    ]
  },
  {
    image: three,
    question: 'What is an effective way to conserve water in your garden?',
    options: [
      { text: 'Water plants during the hottest part of the day', isCorrect: false },
      { text: 'Use a drip irrigation system', isCorrect: true },
      { text: 'Water plants every hour', isCorrect: false },
      { text: 'Let the hose run continuously', isCorrect: false }
    ]
  },
  {
    image: four,
    question: 'How can you save water when doing laundry?',
    options: [
      { text: 'Wash small loads with a lot of water', isCorrect: false },
      { text: 'Use a high-efficiency washing machine and only run full loads', isCorrect: true },
      { text: 'Wash clothes in multiple short cycles', isCorrect: false },
      { text: 'Use extra water for rinsing', isCorrect: false }
    ]
  },
  {
    image: five,
    question: 'What should you do when watering your lawn?',
    options: [
      { text: 'Water the lawn during the hottest part of the day', isCorrect: false },
      { text: 'Water early in the morning or late in the evening', isCorrect: true },
      { text: 'Use a garden hose without a nozzle', isCorrect: false },
      { text: 'Water every day regardless of rain', isCorrect: false }
    ]
  },
  {
    image: six,
    question: 'How can you conserve water while showering?',
    options: [
      { text: 'Take long showers with the water running continuously', isCorrect: false },
      { text: 'Install a low-flow showerhead and take shorter showers', isCorrect: true },
      { text: 'Use a bath instead of a shower', isCorrect: false },
      { text: 'Shower twice a day', isCorrect: false }
    ]
  },
  {
    image: seven,
    question: 'What is a water-efficient practice when cooking?',
    options: [
      { text: 'Rinse vegetables under running water', isCorrect: false },
      { text: 'Use a bowl of water to rinse vegetables', isCorrect: true },
      { text: 'Boil a large pot of water for a small amount of food', isCorrect: false },
      { text: 'Leave the tap running while cooking', isCorrect: false }
    ]
  },
  {
    image: eight,
    question: 'What is the best way to use water in a car wash?',
    options: [
      { text: 'Wash your car with a running hose', isCorrect: false },
      { text: 'Use a car wash service that recycles water', isCorrect: true },
      { text: 'Use a bucket of water and a sponge', isCorrect: false },
      { text: 'Use a hose without a nozzle', isCorrect: false }
    ]
  },
  {
    image: nine,
    question: 'How can you minimize water waste when using a dishwasher?',
    options: [
      { text: 'Run the dishwasher with a small load', isCorrect: false },
      { text: 'Run the dishwasher only with full loads', isCorrect: true },
      { text: 'Use the dishwasher for every dish, regardless of quantity', isCorrect: false },
      { text: 'Pre-rinse dishes under running water', isCorrect: false }
    ]
  },
  {
    image: ten,
    question: 'What is an effective way to save water when washing your hands?',
    options: [
      { text: 'Use warm water and let it run continuously', isCorrect: false },
      { text: 'Turn off the tap while lathering your hands', isCorrect: true },
      { text: 'Use a large amount of water for rinsing', isCorrect: false },
      { text: 'Wash hands in a bowl of water', isCorrect: false }
    ]
  }
];

const Game = () => {
  const [scenario, setScenario] = useState(getRandomScenario());
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');

  function getRandomScenario() {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    return scenarios[randomIndex];
  }

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setFeedback('Correct! Well done.');
    } else {
      setFeedback('Incorrect. Try again!');
    }
    // Load a new scenario after a short delay
    setTimeout(() => {
      setScenario(getRandomScenario());
      setSelectedOption(null);
      setFeedback('');
    }, 2000);
  };

  return (
    <div>
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 container mx-2 p-12">
        
        <div className="text-center mb-12">
        <img
          src={scenario.image}
          alt="Scenario"
          className="object-cover max-w-md mx-auto mb-6 rounded-xl shadow-lg size-48"
       />
          <div className='bg-white text-center mx-10 rounded shadow-md w-full max-w-screen-lg'>
            <p className="text-2xl font-semibold text-black mb-5 leading-relaxed">
              {scenario.question}
            </p>
          </div>  
          <div className="grid gap-6 lg:grid-cols-2">
            {scenario.options.map((option, index) => (
              <div
                key={index}
                className={`bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
                  option.isCorrect ? 'hover:bg-green-500' : 'hover:bg-red-500'
                }`}
                onClick={() => handleOptionClick(option.isCorrect)}
              >
                <div className="p-4">
                  <p className="text-lg font-semibold text-white">{option.text}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
        
      </div>

    </div>
  );
}

export default Game;