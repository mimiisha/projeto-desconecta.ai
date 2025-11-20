import { CardsIdentidade } from "../components/CardsIdentidade.jsx";
import { CardsAplicam } from "../components/CardsAplicam.jsx";
import logo from "../imgs/logo.svg";
import { Developeres } from "../components/Developers.jsx";

const About = () => {
    return (
        <div className="bg-verde min-h-screen">
            <div className="grid md:grid-cols-2 mt-10 md:-mt-30 px-12 md:px-16">
                <div className="flex flex-col justify-center items-start gap-6 z-10">
                    <h1 className="text-[80px] md:text-[120px] font-abril text-tittle">
                        Sobre
                    </h1>
                    <p className="text-lg md:text-2xl leading-relaxed text">
                        O desconecta.ai nasceu para te empoderar. Acreditamos que é possível usar a tecnologia a nosso favor, sem que ela domine nossas vidas. Explore nossas dicas, documentos e recursos para construir hábitos digitais equilibrados e redescobrir a beleza do mundo real. Sua jornada para uma vida mais presente começa aqui.
                    </p>
                    <button className="mt-10 bg-marrom text-bege px-16 py-3 rounded-full hover:bg-marromHover transition-all duration-200">
                        Se desafie!
                    </button>
                </div>
                <div className="flex justify-center md:justify-end items-start md:pr-8">
                    <img
                        src={logo}
                        alt="Logo do aplicativo"
                        className="mt-10 md:mt-0 w-auto max-w-[480px] md:max-w-[700px] h-auto object-contain"
                    />
                </div>
                <div className="md:col-span-2 mt-10 md:mt-20 w-full">
                    <Developeres />
                </div>
                <div className="flex flex-col justify-center items-start mt-10 w-full px-0 gap-6 md:col-span-2">
                    <h1 className="text-[50px] md:text-[80px] font-abril text-tittle">
                        Identidade visual
                    </h1>
                    <p className="text-sm md:text-lg leading-relaxed text mb-5">
                        A paleta de cores do Desconecta.ai foi cuidadosamente escolhida para transmitir a mensagem de equilíbrio digital, combinando tons que representam tranquilidade, clareza, simplicidade e segurança. Cada cor tem um propósito específico na comunicação visual do projeto.
                    </p>
                    <CardsIdentidade />
                </div>
                <div className="flex flex-col justify-center items-start w-full px-0 gap-6 z-10 mt-10 md:col-span-2">
                    <h1 className="text-[50px] md:text-[80px] font-abril text-tittle">
                        Como as cores se aplicam ao projeto
                    </h1>
                    <CardsAplicam />
                </div>
            </div>
        </div>
    );
};

export default About;
