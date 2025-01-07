import React, { useState } from 'react';
import { DiJavascript1, DiJava, DiPython } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';

const topics = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: DiJavascript1,
    color: '#F7DF1E',
    bgColor: '#2D2D2D',
    description: 'Test your JavaScript knowledge with advanced interview questions'
  },
  {
    id: 'java',
    name: 'Java',
    icon: DiJava,
    color: '#E76F00',
    bgColor: '#5382A1',
    description: 'Challenge yourself with Java programming concepts'
  },
  {
    id: 'python',
    name: 'Python',
    icon: DiPython,
    color: '#FFD43B',
    bgColor: '#306998',
    description: 'Master Python interview questions and concepts'
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    icon: FaAws,
    color: '#FF9900',
    bgColor: '#232F3E',
    description: 'Test your Amazon Web Services knowledge'
  }
];

export default function WelcomeScreen({ onStart }) {
  const [playerName, setPlayerName] = useState('');
  const [showTopics, setShowTopics] = useState(false);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      setShowTopics(true);
    }
  };

  const handleTopicSelect = (topic) => {
    onStart(playerName, topic.id);
  };

  if (!showTopics) {
    return (
      <div className="min-h-screen bg-[#1e3a8a] flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-bold text-white mb-12">Tech Millionaire</h1>
        <div className="w-full max-w-md">
          <form onSubmit={handleNameSubmit} className="space-y-6">
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-4 rounded-lg bg-blue-900 border-2 border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:border-yellow-500"
              required
            />
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-yellow-500 text-blue-900 font-bold text-xl hover:bg-yellow-400 transition-colors"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e3a8a] flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-white mb-8">Tech Millionaire</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleTopicSelect(topic)}
            className="group relative overflow-hidden rounded-xl p-6 transition-transform hover:scale-105"
            style={{ backgroundColor: topic.bgColor }}
          >
            <div className="flex items-center space-x-4">
              <topic.icon 
                className="w-16 h-16 transition-transform group-hover:scale-110"
                style={{ color: topic.color }}
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{topic.name}</h2>
                <p className="text-gray-200">{topic.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}