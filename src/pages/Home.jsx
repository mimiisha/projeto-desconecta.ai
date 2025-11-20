import formas from "../imgs/formas.png";

const Home = () => {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 mt-10 md:-mt-30">
        <div className="flex flex-col justify-center items-start px-12 md:px-16 gap-6 z-10">
          <h1 className="text-[80px] md:text-[120px] font-abril text-tittle">
            desconecta.ai
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed text">
            Bem-vindo ao desconecta.ai, onde a tranquilidade encontra a
            tecnologia. Inspirados pela natureza, criamos um refúgio digital
            para te ajudar a desacelerar, encontrar clareza e nutrir seu
            bem-estar. Descubra como uma desconexão consciente pode trazer mais
            vida, leveza e significado para o seu dia a dia.
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-start md:pr-8 overflow-hidden">
          <img
            src={formas}
            alt="Formas página principal"
            className="mt-10 md:mt-0 w-full max-w-[420px] md:max-w-[640px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
