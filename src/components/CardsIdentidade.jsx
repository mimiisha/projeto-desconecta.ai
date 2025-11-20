import React from "react";

export const CardsIdentidade = () => {
    const items = [
        { title: "Verde", text: "O verde é a cor mais associada à Natureza, Saúde e Tranquilidade. Em um contexto digital, ele oferece um alívio. Ao usar o verde, o app subconscientemente transmite a ideia de Bem-Estar e Renovação, incentivando o usuário a buscar o equilíbrio e o crescimento pessoal fora do ciclo digital vicioso. Ele ajuda a reduzir a fadiga visual causada pela luz azul das telas. visual imediato", color: "bg-verde" },
        { title: "Azul", text: "O azul-claro é a cor da Serenidade, Clareza Mental e Confiança. Ao contrário do azul escuro (que pode ser muito corporativo), o azul claro remete ao céu e à água calma. Em um aplicativo que trata de ansiedade digital, o azul funciona como um sedativo visual. Ele encoraja a calma e a reflexão, ajudando o usuário a processar informações de forma não urgente.", color: "bg-azul" },
        { title: "Bege", text: "O Bege é a cor da Neutralidade, Simplicidade e Aconchego. ele deve ser usado predominantemente como cor de fundo principal. Ao contrário do branco puro (que pode ser muito brilhante e cansar a vista), o bege oferece uma base suave, simulando a textura de um papel natural ou linho. Ele é perfeito para o desconecta.ai porque simboliza a limpeza de tela e a ausência de ruído digital, oferecendo um ambiente visualmente tranquilo e não ameaçador.", color: "bg-bege" },
        { title: "Marrom", text: "O Marrom é a cor da Terra, Estabilidade e Segurança. utilizado para elementos de destaque que precisam de peso e seriedade, como botões de 'Ação Principal' (CTAs) ou na tipografia de títulos importantes. Ele fornece o contraste necessário para a legibilidade, mas sem o impacto agressivo do preto. O Marrom evoca a sensação de grounding (ancoragem), ligando o usuário à realidade física e à natureza, reforçando o objetivo de se desligar do virtual.", color: "bg-marrom" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative bg-white rounded-xl shadow-lg overflow-hidden pt-8 pb-6 px-6 w-full flex flex-col"
                >
                    <div
                        className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white/10 ${item.color}`}
                        aria-hidden="true"
                    />

                    <div className="mt-2 text-center flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-tittle">{item.title}</h3>
                        <p className="text-sm md:text-base text leading-relaxed">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsIdentidade;