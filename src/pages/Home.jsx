import formas from "../imgs/formas.png";

const Home = () => {
  return (
    <div className="bg-verde min-h-screen">
      <div className="grid md:grid-cols-2 mt-10 md:-mt-30 lg:-mt-40 -mb-50">
        <div className="flex flex-col justify-center items-start px-10 gap-6 z-10">
          <h1 className="text-[50px] md:text-[98px] font-abril text-tittle">
            desconecta.ai
          </h1>
          <p className="text-sm md:text-lg leading-relaxed text">
            Bem-vindo ao desconecta.ai, onde a tranquilidade encontra a
            tecnologia. Inspirados pela natureza, criamos um refúgio digital
            para te ajudar a desacelerar, encontrar clareza e nutrir seu
            bem-estar. Descubra como uma desconexão consciente pode trazer mais
            vida, leveza e significado para o seu dia a dia.
          </p>
        </div>
        <img
          src={formas}
          alt="Logo"
          className="-mt-10 md:mt-0 w-auto h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
