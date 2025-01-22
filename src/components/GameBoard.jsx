import React from 'react';
import { Timer, Phone, Users, SplitSquareVertical, Volume2, VolumeX } from 'lucide-react';
import CodeBlock from './CodeBlock';

const CircularTimer = ({ timer }) => {
 const circumference = 2 * Math.PI * 20;
 const strokeDashoffset = circumference * (1 - timer/30);

 return (
   <div className="relative w-16 h-16 ml-2">
     <svg className="transform -rotate-90 w-16 h-16">
       <circle
         cx="32"
         cy="32"
         r="20"
         stroke="currentColor"
         strokeWidth="4"
         fill="none"
         className="text-blue-900"
       />
       <circle
         cx="32"
         cy="32"
         r="20"
         stroke="currentColor" 
         strokeWidth="4"
         fill="none"
         strokeDasharray={circumference}
         strokeDashoffset={strokeDashoffset}
         className="text-yellow-400 transition-all duration-1000"
       />
     </svg>
     <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">
       {timer}
     </span>
   </div>
 );
};

const GameBoard = ({ 
 question,
 timer,
 prizeMoney,
 onAnswer,
 selectedAnswer,
 lifelines,
 onUseLifeline,
 isMuted,
 onToggleMute,
 availableOptions,
 audienceHelp,
 currentQuestion,
 prizeLevels
}) => {
 return (
   <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
     <div className="max-w-6xl mx-auto p-4">
       <div className="flex justify-between items-center mb-6">
         <div className="flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-lg">
           <Timer className="w-6 h-6" />
           <CircularTimer timer={timer} />
         </div>
         <div className="text-3xl font-bold text-yellow-400">
           ${prizeMoney.toLocaleString()}
         </div>
         <button
           onClick={onToggleMute}
           className="bg-blue-800 p-2 rounded-lg hover:bg-blue-700 transition-colors"
         >
           {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
         </button>
       </div>

       <div className="bg-blue-800 rounded-xl shadow-lg mb-6 overflow-hidden">
         <div className="p-6  overflow-x-auto">
           {question.code ? (
             <CodeBlock code={question.code} />
           ) : (
             <h2 className="text-2xl text-white mb-4">{question.question}</h2>
           )}
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 pt-0">
           {question.options.map((option, index) => {
             if (!availableOptions.includes(index)) return null;
             
             const isSelected = selectedAnswer === index;
             const isCorrect = index === question.correct;
             const showCorrectHighlight = selectedAnswer !== null && isSelected && !isCorrect;
             
             return (
               <button
                 key={index}
                 onClick={() => !selectedAnswer && onAnswer(index)}
                 className={`
                   relative p-4 rounded-lg text-left text-white text-lg
                   transition-all duration-300 transform hover:scale-102
                   ${isSelected 
                     ? isCorrect
                       ? 'bg-green-500 border-green-400'
                       : 'bg-red-500 border-red-400'
                     : (selectedAnswer !== null && isCorrect)
                       ? 'bg-green-500 border-green-400'
                       : 'bg-blue-700 hover:bg-blue-600 border-blue-600'
                   }
                   border-2
                 `}
                 disabled={selectedAnswer !== null}
               >
                 <span className="text-yellow-400 font-bold mr-3">
                   {['A', 'B', 'C', 'D'][index]}:
                 </span>
                 {option}
                 {audienceHelp && (
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-900 px-2 py-1 rounded">
                     {audienceHelp[index]}%
                   </div>
                 )}
               </button>
             );
           })}
         </div>
       </div>

       <div className="flex justify-center gap-6 mb-6">
         <div className="flex flex-col items-center">
           <button
             onClick={() => onUseLifeline('fifty')}
             disabled={!lifelines.fifty || selectedAnswer !== null}
             className={`
               p-4 rounded-full transition-all duration-300 transform
               ${lifelines.fifty 
                 ? 'bg-yellow-500 hover:bg-yellow-400 hover:scale-110' 
                 : 'bg-gray-600 cursor-not-allowed'
               }
             `}
           >
             <SplitSquareVertical className="w-6 h-6 text-blue-900" />
           </button>
           <span className="text-white text-sm mt-2">50:50</span>
         </div>

         <div className="flex flex-col items-center">
           <button
             onClick={() => onUseLifeline('phone')}
             disabled={!lifelines.phone || selectedAnswer !== null}
             className={`
               p-4 rounded-full transition-all duration-300 transform
               ${lifelines.phone 
                 ? 'bg-yellow-500 hover:bg-yellow-400 hover:scale-110' 
                 : 'bg-gray-600 cursor-not-allowed'
               }
             `}
           >
             <Phone className="w-6 h-6 text-blue-900" />
           </button>
           <span className="text-white text-sm mt-2">Phone</span>
         </div>

         <div className="flex flex-col items-center">
           <button
             onClick={() => onUseLifeline('audience')}
             disabled={!lifelines.audience || selectedAnswer !== null}
             className={`
               p-4 rounded-full transition-all duration-300 transform
               ${lifelines.audience 
                 ? 'bg-yellow-500 hover:bg-yellow-400 hover:scale-110' 
                 : 'bg-gray-600 cursor-not-allowed'
               }
             `}
           >
             <Users className="w-6 h-6 text-blue-900" />
           </button>
           <span className="text-white text-sm mt-2">Audience</span>
         </div>
       </div>

       <div className="fixed right-4 top-4 bg-blue-800 bg-opacity-90 p-4 rounded-lg shadow-lg hidden md:block">
         {prizeLevels.slice().reverse().map((prize, index) => (
           <div
             key={prize}
             className={`
               py-2 px-4 rounded mb-1 transition-colors
               ${prizeLevels.length - 1 - index === currentQuestion
                 ? 'bg-yellow-500 text-blue-900 font-bold'
                 : 'text-white'
               }
               ${[4, 9, 14].includes(prizeLevels.length - 1 - index) ? 'border-l-4 border-yellow-500' : ''}
             `}
           >
             ${prize.toLocaleString()}
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default GameBoard;