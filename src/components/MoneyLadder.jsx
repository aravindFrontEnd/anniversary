import React from 'react';

const MoneyLadder = ({ currentQuestion, prizeLevels }) => {
  return (
    <div className="fixed right-4 top-4 w-48 bg-blue-900 bg-opacity-40 p-4 rounded-xl backdrop-blur-sm hidden md:block">
      {prizeLevels.slice().reverse().map((prize, index) => {
        const isCurrentLevel = prizeLevels.length - 1 - index === currentQuestion;
        const isMilestone = [4, 9, 14].includes(prizeLevels.length - 1 - index);
        
        return (
          <div
            key={prize}
            className={`prize-level ${isCurrentLevel ? 'current' : ''} ${
              isMilestone ? 'border-l-4 border-yellow-400' : ''
            }`}
          >
            ${prize.toLocaleString()}
          </div>
        );
      })}
    </div>
  );
};

export default MoneyLadder;