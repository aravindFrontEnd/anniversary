import React from 'react';
import { Phone, Users, SplitSquareVertical } from 'lucide-react';

const Lifelines = ({ lifelines, onUseLifeline, disabled }) => {
  return (
    <div className="flex justify-center gap-6 my-8">
      <button
        onClick={() => onUseLifeline('fifty')}
        disabled={!lifelines.fifty || disabled}
        className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
          lifelines.fifty 
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900' 
            : 'bg-gray-700 text-gray-400'
        }`}
      >
        <SplitSquareVertical size={24} />
      </button>
      <button
        onClick={() => onUseLifeline('phone')}
        disabled={!lifelines.phone || disabled}
        className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
          lifelines.phone 
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900' 
            : 'bg-gray-700 text-gray-400'
        }`}
      >
        <Phone size={24} />
      </button>
      <button
        onClick={() => onUseLifeline('audience')}
        disabled={!lifelines.audience || disabled}
        className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
          lifelines.audience 
            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900' 
            : 'bg-gray-700 text-gray-400'
        }`}
      >
        <Users size={24} />
      </button>
    </div>
  );
};

export default Lifelines;