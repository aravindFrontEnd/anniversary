import React from 'react';

const Question = ({ 
  question, 
  options, 
  onAnswer, 
  selectedAnswer, 
  correctAnswer,
  availableOptions,
  audienceHelp 
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-blue-900 bg-opacity-40 p-6 rounded-xl mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white">{question}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => {
          if (!availableOptions.includes(index)) return null;
          
          const isSelected = selectedAnswer === index;
          const isCorrect = index === correctAnswer;
          
          let optionClass = "option-button";
          if (selectedAnswer !== null) {
            if (index === correctAnswer) {
              optionClass += " answer-correct";
            } else if (isSelected && !isCorrect) {
              optionClass += " answer-wrong";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !selectedAnswer && onAnswer(index)}
              className={optionClass}
              disabled={selectedAnswer !== null}
            >
              <span className="text-yellow-400 mr-4">
                {['A', 'B', 'C', 'D'][index]}:
              </span>
              {option}
              {audienceHelp && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm">
                  {audienceHelp[index]}%
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;