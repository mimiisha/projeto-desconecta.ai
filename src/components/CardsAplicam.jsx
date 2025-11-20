import React from "react";

export const CardsAplicam = () => {
    const items = [
        { title: "A Sinfonia da Natureza na Interface", text: "Nossa paleta de cores não é apenas um conjunto de tons; é uma sinfonia visual inspirada na natureza. O verde remete à vitalidade das florestas, o azul à clareza de um céu sem nuvens, e o bege e marrom à solidez da terra. Essa escolha intencional visa recriar digitalmente a sensação de estar ao ar livre, longe do ritmo frenético da tela. Queremos que cada interação com o desconecta.ai seja um pequeno respiro, um convite para o usuário se reconectar com a calma inerente ao mundo natural.", },
        { title: "Equilíbrio entre o Digital e o Humano", text: "No desconecta.ai, a escolha das cores vai além da estética: ela representa o equilíbrio entre o digital e o humano. Enquanto o azul e o verde oferecem a tranquilidade e a fluidez de uma interface moderna e intuitiva, o bege e o marrom trazem a textura e a familiaridade do toque humano e da materialidade. Essa combinação evita a frieza típica de muitos aplicativos, injetando calor e acessibilidade. É a ponte visual entre a tecnologia que nos auxilia e a experiência orgânica que almejamos alcançar.", },
        { title: "Despertando a Consciência e o Bem-Estar", text: "A identidade visual do desconecta.ai é uma ferramenta para despertar a consciência e promover o bem-estar. A suavidade do bege no fundo minimiza a agressividade visual, enquanto o verde e o azul agem como 'lembretes' constantes de que a saúde mental e a calma são alcançáveis. O marrom nos enraíza, dando a sensação de que estamos construindo algo sólido e duradouro em nossa relação com a tecnologia. Cada tom foi escolhido para guiar o usuário de um estado de sobrecarga para um de serenidade e controle, reforçando a mensagem central do projeto: a desconexão é um ato de autocuidado.", },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative bg-white rounded-xl shadow-lg overflow-hidden pt-8 pb-6 px-6 w-full flex flex-col"
                >
                    <div className="mt-2 text-center flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-tittle">{item.title}</h3>
                        <p className="text-sm md:text-base text leading-relaxed">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsAplicam;