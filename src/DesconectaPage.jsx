// pages/DesconectaPage.jsx
import React from 'react';
import HeaderTestPage from './components/Tests/HeardTestPage';
import QuizTestPage from './components/Tests/QuizTestPage';
import BlackScreenChallenge from './components/Challenges/BlackScreenChallenge';
import AnalogMap from './components/Challenges/AnalogMap';
import TimeDashboard from './components/Tests/TimeDashboard';
import ShortDocs from './components/Home/ShortDocs';
import Forum from './components/Home/Forum';
import Footer from './components/Footer';

const DesconectaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F4F0] to-[#c3cfe2] text-gray-800">
      <HeaderTestPage />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="intro-section text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Desconecte para se conectar.</h1>
          <p className="text-xl">
            Criado por adolescentes, para adolescentes. Vamos juntos descobrir um equilíbrio saudável com o mundo digital.
          </p>
        </section>

        <QuizTestPage />
        <hr className="my-12 border-gray-300" />
        <BlackScreenChallenge />
        <hr className="my-12 border-gray-300" />
        <AnalogMap />
        <hr className="my-12 border-gray-300" />
        <TimeDashboard />
        <hr className="my-12 border-gray-300" />
        <ShortDocs />
        <hr className="my-12 border-gray-300" />
        <Forum />
      </main>
      
      <Footer />
    </div>
  );
};

export default DesconectaPage;