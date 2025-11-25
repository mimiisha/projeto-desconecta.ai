import { CardsIdentidade } from "../components/About/CardsIdentidade.jsx";
import { CardsAplicam } from "../components/About/CardsAplicam.jsx";
import { Developeres } from "../components/About/Developers.jsx";
import logo from "../assets/imgs/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    return (
        <div className="w-full max-w-[100vw]">
            <div className="grid md:grid-cols-2 mt-6 md:mt-10 px-4 md:px-16 justify-center items-center">

                <div
                    className="flex flex-col gap-4 md:gap-6 z-10 order-2 md:order-1"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h1 className="text-[70px] md:text-[120px] font-abril text-tittle leading-tight">
                        Sobre
                    </h1>
                    <p className="text-base md:text-2xl leading-relaxed text">
                        O desconecta.ai nasceu para te empoderar. Acreditamos que é possível usar a tecnologia a nosso favor, sem que ela domine nossas vidas. Explore nossas dicas, documentos e recursos para construir hábitos digitais equilibrados e redescobrir a beleza do mundo real. Sua jornada para uma vida mais presente começa aqui.
                    </p>
                    <a
                        href="/desafios"
                        className="mt-6 md:mt-10 bg-marrom text-bege px-8 md:px-16 py-3 rounded-full hover:bg-marromHover transition-all duration-200 w-64 text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Se desafie!
                    </a>
                </div>

                <div
                    className="flex justify-center md:justify-end items-start md:pr-8 order-1"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="mt-4 md:mt-0 md:-mr-24 w-full max-w-[280px] md:max-w-[700px] h-auto object-contain"
                    />
                </div>

                <div
                    className="md:col-span-2 mt-8 md:mt-20 w-full order-3"
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    <Developeres />
                </div>

                <div
                    className="flex flex-col justify-center items-start mt-8 md:mt-10 w-full px-0 gap-4 md:gap-6 md:col-span-2 order-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h1 className="text-[36px] md:text-[80px] font-abril text-tittle leading-tight">
                        Identidade visual
                    </h1>
                    <p className="text-sm md:text-lg leading-relaxed text mb-4 md:mb-5">
                        A paleta de cores do Desconecta.ai foi cuidadosamente escolhida para transmitir a mensagem de equilíbrio digital, combinando tons que representam tranquilidade, clareza, simplicidade e segurança. Cada cor tem um propósito específico na comunicação visual do projeto.
                    </p>
                    <CardsIdentidade />
                </div>

                <div
                    className="flex flex-col justify-center items-start w-full px-0 gap-4 md:gap-6 z-10 mt-8 md:mt-10 md:col-span-2 order-5"
                    data-aos="fade-up"
                    data-aos-delay="350"
                >
                    <h1 className="text-[36px] md:text-[80px] font-abril text-tittle leading-tight">
                        Como as cores se aplicam ao projeto
                    </h1>
                    <CardsAplicam />
                </div>
            </div>
        </div>
    );
};

export default About;
