import React, { useState, useEffect, useMemo } from 'react';

const BlackScreenChallenge = () => {
  const [challengeActive, setChallengeActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [currentReflection, setCurrentReflection] = useState('');
  const [initialDuration, setInitialDuration] = useState(0);


  const reflectionPhrases = useMemo(() => [
    "Sinta o ar ao seu redor.",
    "Pense em três coisas pelas quais você é grato.",
    "Feche os olhos e ouça os sons distantes.",
    "Imagine seu lugar favorito no mundo real.",
    "Respire profundamente e solte o ar lentamente."
  ], []);

  const startChallenge = (duration) => {
    setChallengeActive(true);
    setTimeLeft(duration * 60);
    setInitialDuration(duration);
    setShowCompletion(false);
    setCurrentReflection(reflectionPhrases[Math.floor(Math.random() * reflectionPhrases.length)]);
  };

  // const finishChallenge = React.useCallback(() => {
  //   setChallengeActive(false);
  //   setShowCompletion(true);

  //   let points = 0;
  //   if (initialDuration === 15) points = 50;
  //   else if (initialDuration === 30) points = 100;
  //   else if (initialDuration === 60) points = 200;

  //   setPointsEarned(points);

  //   const newTotal = totalPoints + points;
  //   setTotalPoints(newTotal);
  //   localStorage.setItem('desconectaPoints', newTotal.toString());
  // }, [initialDuration, totalPoints]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = challengeActive
    ? ((timeLeft / (initialDuration * 60)) * 100)
    : 0;


  const givePoints = React.useCallback(() => {
    let points = 0;

    if (initialDuration === 5) points = 20;
    else if (initialDuration === 15) points = 50;
    else if (initialDuration === 30) points = 100;
    else if (initialDuration === 60) points = 200;

    setPointsEarned(points);

    const newTotal = totalPoints + points;
    setTotalPoints(newTotal);
    localStorage.setItem("desconectaPoints", newTotal.toString());
  }, [initialDuration, totalPoints]);

  const stopChallenge = () => {
    setChallengeActive(false);
    setShowCompletion(false);
    setTimeLeft(0);
  };


  useEffect(() => {
    const storedPoints = localStorage.getItem('desconectaPoints');
    if (storedPoints) {
      setTotalPoints(parseInt(storedPoints));
    }
  }, []);

  useEffect(() => {
    let interval;
    if (challengeActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (challengeActive && timeLeft === 0) {
      setChallengeActive(false);
      setShowCompletion(true);
      givePoints();
    }

    return () => clearInterval(interval);
  }, [challengeActive, timeLeft, givePoints]);

  useEffect(() => {
    let reflectionInterval;
    if (challengeActive) {
      reflectionInterval = setInterval(() => {
        setCurrentReflection(reflectionPhrases[Math.floor(Math.random() * reflectionPhrases.length)]);
      }, 7000);
    }
    return () => clearInterval(reflectionInterval);
  }, [challengeActive, reflectionPhrases]);



  return (
    <section id="black-screen-challenge" className="bg-white text-bege p-8 rounded-xl shadow-md mb-8 text-center text-lg mx-8 md:mx-32 lg:mx-64">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-normal text-black mb-4 font-abril">O Desafio do Modo Tela Preta</h2>
      <p className="mb-6 text-black">Escolha a duração e desafie-se a uma pausa consciente!</p>

      {challengeActive && (
        <div className="
    fixed inset-0 bg-black flex flex-col items-center justify-center
    z-[9999] text-white
  ">
          <div className="text-5xl font-bold mb-6">
            {formatTime(timeLeft)}
          </div>

          <div className="w-1/2 bg-gray-700 rounded-full h-2.5 mb-6">
            <div
              className="bg-white h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-xl italic animate-pulse">
            {currentReflection}
          </div>

          <button
            onClick={() => stopChallenge()}
            className="mt-10 text-sm border border-white px-4 py-2 rounded-lg opacity-50 hover:opacity-100"
          >
            Encerrar desafio
          </button>
        </div>
      )}

      {!challengeActive ? (
        <>
          <div className="challenge-options mb-6 gap-4 flex flex-col lg:flex-row justify-center">
            <button
              className="bg-marrom text-white px-6 py-3 rounded-full font-bold mx-1 transition-transform hover:translate-y-[-2px] active:translate-y-0"
              onClick={() => startChallenge(5)}
            >
              5 Minutos (+20 pontos)
            </button>
            <button
              className="bg-marrom text-white px-6 py-3 rounded-full font-bold mx-1 transition-transform hover:translate-y-[-2px] active:translate-y-0"
              onClick={() => startChallenge(15)}
            >
              15 Minutos (+50 pontos)
            </button>
            <button
              className="bg-marrom text-white px-6 py-3 rounded-full font-bold mx-1 transition-transform hover:translate-y-[-2px] active:translate-y-0"
              onClick={() => startChallenge(30)}
            >
              30 Minutos (+100 pontos)
            </button>
            <button
              className="bg-marrom text-white px-6 py-3 rounded-full font-bold mx-1 transition-transform hover:translate-y-[-2px] active:translate-y-0"
              onClick={() => startChallenge(60)}
            >
              60 Minutos (+200 pontos)
            </button>
          </div>

          {showCompletion && (
            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <h3 className="text-xl font-bold text-black">Parabéns! Desafio concluído.</h3>
              <p className="text-black">Você ganhou <span className="font-bold">{pointsEarned}</span> pontos!</p>
            </div>
          )}
        </>
      ) : (
        <div className="challenge-container flex flex-col items-center">
          <div className="text-5xl font-bold text-black my-8">
            {formatTime(timeLeft)}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-[#8CC0DE] h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xl italic my-8 animate-pulse text-black">
            {currentReflection}
          </div>
        </div>
      )}

      <p className="points-display mt-6 text-black">
        Seus pontos: <span className="font-bold">{totalPoints}</span>
      </p>
    </section>
  );
};

export default BlackScreenChallenge;