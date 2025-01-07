// App.jsx
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import ReactConfetti from 'react-confetti';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "./components/ui/alert-dialog";
import WelcomeScreen from './components/WelcomeScreen';
import GameBoard from './components/GameBoard';
import { getQuestionsByTopic, PRIZE_LEVELS } from './data';

// Import sounds
import play from './sounds/background.mp3';
import correct from './sounds/correct.mp3';
import wrong from './sounds/wrong.mp3';
import wait from './sounds/timer.mp3';

export default function App() {
 const [gameState, setGameState] = useState('welcome');
 const [playerName, setPlayerName] = useState('');
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [timer, setTimer] = useState(30);
 const [selectedAnswer, setSelectedAnswer] = useState(null);
 const [showConfetti, setShowConfetti] = useState(false);
 const [questions, setQuestions] = useState([]);
 const [currentTopic, setCurrentTopic] = useState('javascript');
 const [lifelines, setLifelines] = useState({
   fifty: true,
   phone: true,
   audience: true
 });
 const [isMuted, setIsMuted] = useState(false);
 const [showAlert, setShowAlert] = useState(false);
 const [alertContent, setAlertContent] = useState({ title: '', description: '' });
 const [availableOptions, setAvailableOptions] = useState([0, 1, 2, 3]);
 const [audienceHelp, setAudienceHelp] = useState(null);
 const [windowSize, setWindowSize] = useState({
   width: window.innerWidth,
   height: window.innerHeight,
 });
 
 const [playBgMusic, { stop: stopBgMusic }] = useSound(play, { 
   volume: 0.35,
   loop: true 
 });
 const [playCorrect] = useSound(correct, { volume: 0.5 });
 const [playWrong] = useSound(wrong, { volume: 0.5 });
 const [playWait] = useSound(wait, { volume: 0.5 });

 useEffect(() => {
   if (isMuted) {
     stopBgMusic();
   } else if (gameState === 'playing') {
     playBgMusic();
   }
 }, [isMuted, gameState, playBgMusic, stopBgMusic]);

 useEffect(() => {
   const topicQuestions = getQuestionsByTopic(currentTopic);
   setQuestions(shuffleArray(topicQuestions));
 }, [currentTopic]);

 useEffect(() => {
   const handleResize = () => {
     setWindowSize({
       width: window.innerWidth,
       height: window.innerHeight,
     });
   };
   window.addEventListener('resize', handleResize);
   return () => window.removeEventListener('resize', handleResize);
 }, []);

 useEffect(() => {
   let interval;
   if (gameState === 'playing' && timer > 0 && !selectedAnswer) {
     interval = setInterval(() => {
       setTimer(prev => {
         if (prev <= 5 && prev > 0 && !isMuted) {
           playWait();
         }
         return prev - 1;
       });
     }, 1000);
   } else if (timer === 0) {
     handleGameOver();
   }
   return () => clearInterval(interval);
 }, [timer, gameState, selectedAnswer, isMuted, playWait]);

 const shuffleArray = (array) => {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
 };

 const handleStartGame = (name, topic) => {
   setPlayerName(name);
   setCurrentTopic(topic);
   setGameState('playing');
   setTimer(30);
   const topicQuestions = getQuestionsByTopic(topic);
   setQuestions(shuffleArray(topicQuestions));
   resetGameState();
   if (!isMuted) playBgMusic();
 };

 const resetGameState = () => {
   setCurrentQuestion(0);
   setSelectedAnswer(null);
   setShowConfetti(false);
   setLifelines({ fifty: true, phone: true, audience: true });
   setAvailableOptions([0, 1, 2, 3]);
   setAudienceHelp(null);
 };

 const handleAnswer = (optionIndex) => {
   setSelectedAnswer(optionIndex);
   if (questions[currentQuestion].correct !== optionIndex) {
    stopBgMusic(); 
   }
   
   if (timer <= 0) {
     handleGameOver();
     return;
   }

   setTimeout(() => {
     if (questions[currentQuestion].correct === optionIndex) {
       if (!isMuted) playCorrect();
       if (currentQuestion === questions.length - 1) {
         handleWinGame();
       } else {
         setTimeout(() => {
           setCurrentQuestion(prev => prev + 1);
           setTimer(30);
           setSelectedAnswer(null);
           setAvailableOptions([0, 1, 2, 3]);
           setAudienceHelp(null);
         }, 2000);
       }
     } else {
       if (!isMuted) playWrong();
       handleGameOver();
     }
   }, 3000);
 };

 const handleWinGame = () => {
   setGameState('won');
   setShowAlert(true);
   setShowConfetti(true);
   setAlertContent({
     title: '🎉 Congratulations! 🎉',
     description: `${playerName}, you've won $${PRIZE_LEVELS[currentQuestion].toLocaleString()}!`
   });
 };

 const handleGameOver = () => {
   if (!isMuted) playWrong();
   setGameState('lost');
   setShowAlert(true);
   setAlertContent({
     title: 'Game Over!',
     description: `Sorry ${playerName}, you lost! You won $${PRIZE_LEVELS[Math.max(0, currentQuestion - 1)].toLocaleString()}`
   });
 };

 const handleLifeline = (type) => {
   if (!lifelines[type]) return;
   
   setLifelines(prev => ({ ...prev, [type]: false }));
   
   switch(type) {
     case 'fifty':
       handleFiftyFifty();
       break;
     case 'phone':
       handlePhoneFriend();
       break;
     case 'audience':
       handleAskAudience();
       break;
     default:
       break;
   }
 };

 const handleFiftyFifty = () => {
   const correct = questions[currentQuestion].correct;
   let remaining = [correct];
   while (remaining.length < 2) {
     const random = Math.floor(Math.random() * 4);
     if (random !== correct && !remaining.includes(random)) {
       remaining.push(random);
     }
   }
   setAvailableOptions(remaining.sort());
 };

 const handlePhoneFriend = () => {
   setShowAlert(true);
   setAlertContent({
     title: 'Phone a Friend',
     description: `Your friend thinks the answer is ${
       ['A', 'B', 'C', 'D'][questions[currentQuestion].correct]
     }, but they're not entirely sure.`,
     isLifeline: true
   });
 };

 const handleAskAudience = () => {
   const correctAnswer = questions[currentQuestion].correct;
   const audienceVotes = Array(4).fill(0).map((_, index) => {
     if (index === correctAnswer) {
       return Math.floor(Math.random() * 30) + 40;
     }
     return Math.floor(Math.random() * 20);
   });
   const total = audienceVotes.reduce((a, b) => a + b);
   const percentages = audienceVotes.map(votes => Math.round((votes / total) * 100));
   setAudienceHelp(percentages);
 };

 const handleCloseAlert = () => {
   setShowAlert(false);
   if (gameState === 'won' || gameState === 'lost') {
     window.location.reload();
   }
 };

 return (
   <div className="relative">
     {showConfetti && gameState === 'won' && (
       <ReactConfetti
         width={windowSize.width}
         height={windowSize.height}
         recycle={false}
         numberOfPieces={1000}
         gravity={0.2}
       />
     )}

     {gameState === 'welcome' ? (
       <WelcomeScreen onStart={handleStartGame} />
     ) : (
       <GameBoard
         question={questions[currentQuestion]}
         timer={timer}
         prizeMoney={PRIZE_LEVELS[currentQuestion]}
         onAnswer={handleAnswer}
         selectedAnswer={selectedAnswer}
         lifelines={lifelines}
         onUseLifeline={handleLifeline}
         isMuted={isMuted}
         onToggleMute={() => setIsMuted(!isMuted)}
         availableOptions={availableOptions}
         audienceHelp={audienceHelp}
         currentQuestion={currentQuestion}
         prizeLevels={PRIZE_LEVELS}
         topic={currentTopic}
       />
     )}

     <AlertDialog open={showAlert}>
       <AlertDialogContent className="bg-gradient-to-b from-blue-900 to-blue-950 border-2 border-yellow-500">
         <AlertDialogHeader>
           <AlertDialogTitle className="flex items-center gap-2 text-white">
             {alertContent.title}
           </AlertDialogTitle>
           <AlertDialogDescription className="text-gray-200">
             {alertContent.description}
           </AlertDialogDescription>
         </AlertDialogHeader>
         <AlertDialogFooter>
           <AlertDialogAction 
             onClick={handleCloseAlert}
             className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold"
           >
             {alertContent.isLifeline ? 'OK' : 'Play Again'}
           </AlertDialogAction>
         </AlertDialogFooter>
       </AlertDialogContent>
     </AlertDialog>
   </div>
 );
}