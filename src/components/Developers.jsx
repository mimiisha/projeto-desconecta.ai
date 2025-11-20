import React from "react";
import jay from "../imgs/jayfoto.jpeg";
import mishafoto from "../imgs/mishafoto.jpeg";

export const Developeres = () => {
    return (
        <div>
            <h1 className="text-[50px] md:text-[80px] font-abril text-tittle">
                Desenvolvedores do Projeto
            </h1>
            <p className="text-sm md:text-lg leading-relaxed text mb-5">
                Criado por adolescentes, para adolescentes. Vamos juntos descobrir um equilíbrio saudável com o mundo digital.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
                <div className="flex flex-col items-center">
                    <img src={jay} alt="Jayne" className="mt-10 md:mt-0 w-auto max-w-[320px] md:max-w-[500px] h-auto object-contain rounded-full" />
                    <p className="mt-6 text-center text-lg font-semibold">Jayne Matias</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={mishafoto} alt="Outra desenvolvedora" className="mt-10 md:mt-0 w-auto max-w-[320px] md:max-w-[500px] h-auto object-contain rounded-full" />
                    <p className="mt-6 text-center text-lg font-semibold">Misha</p>
                </div>
            </div>
        </div>
    )
}