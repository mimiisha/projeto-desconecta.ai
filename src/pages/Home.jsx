import formas from "../assets/imgs/formas.png";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-10 px-4 md:px-16 justify-center items-center gap-6 md:gap-0">
        <div className="flex flex-col gap-4 md:gap-6 z-10 order-2 md:order-1">
          <h1 className="text-[48px] md:text-[120px] font-abril text-tittle leading-tight md:leading-normal">
            desconecta.ai
          </h1>
          <p className="text-base md:text-2xl leading-relaxed text-justify md:text-left">
            Bem-vindo ao desconecta.ai, onde a tranquilidade encontra a
            tecnologia. Inspirados pela natureza, criamos um refúgio digital
            para te ajudar a desacelerar, encontrar clareza e nutrir seu
            bem-estar. Descubra como uma desconexão consciente pode trazer mais
            vida, leveza e significado para o seu dia a dia.
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-start md:pr-8 order-2">
          <img
            src={formas}
            alt="Formas página principal"
            className="mt-4 md:mt-0 w-full max-w-[280px] md:max-w-[640px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;