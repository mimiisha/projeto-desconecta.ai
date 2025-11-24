import { useState } from 'react';

const AnalogMap = () => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [hoveredIsland, setHoveredIsland] = useState(null);
  const [selectedIsland, setSelectedIsland] = useState(null);


  const islands = [
    {
      id: 1,
      activity: "Desenhe a capa do seu próximo álbum imaginário.",
      bgColor: "bg-blue-200",
      image: "/icons/ilha1.png"
    },
    {
      id: 2,
      activity: "Ligue para um amigo e converse sobre algo nada digital.",
      bgColor: "bg-green-200",
      image: "/icons/ilha2.png"
    },
    {
      id: 3,
      activity: "Pratique 10 minutos de alongamento.",
      bgColor: "bg-yellow-200",
      image: "/icons/ilha3.png"
    },
    {
      id: 4,
      activity: "Leia um capítulo de um livro.",
      bgColor: "bg-purple-200",
      image: "/icons/ilha4.png"
    },
    {
      id: 5,
      activity: "Ajude em alguma tarefa doméstica.",
      bgColor: "bg-pink-200",
      image: "/icons/ilha5.png"
    }
  ];

  return (
    <section
      id="analog-map"
      className="bg-white text-bege p-8 rounded-xl shadow-md mb-8 text-center text-lg mx-8 md:mx-32 lg:mx-64"
    >
      <h2 className="text-xl md:text-3xl lg:text-5xl font-normal text-black mb-4 font-abril">
        Mapa de Ideias Analógico
      </h2>
      <p className="mb-6 text-black">Explore ilhas de inspiração para atividades offline. Clique para saber mais.</p>

      <div className="map-container flex justify-center gap-6 mt-8 flex-wrap">
        {islands.map(island => (
          <div
            key={island.id}
            onClick={() => {
              setSelectedIsland(island.id);
              setSelectedActivity(island.activity);
            }}
            onMouseEnter={() => setHoveredIsland(island.id)}
            onMouseLeave={() => setHoveredIsland(null)}
            className={`
    island w-20 h-20 rounded-full border-4 border-[#F4C49A] cursor-pointer 
    transition-all duration-300 ease-in-out transform
    ${hoveredIsland === island.id || selectedIsland === island.id ? "scale-110" : "scale-100"}
    ${!hoveredIsland && selectedIsland !== island.id ? island.bgColor : island.bgColor}
  `}
            style={{
              backgroundImage:
                hoveredIsland === island.id || selectedIsland === island.id
                  ? `url(${island.image})`
                  : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>

      <div id="island-info" className="mt-4 italic text-gray-600">
        {selectedActivity || "Clique em uma ilha para ver a sugestão."}
      </div>
    </section>
  );
};

export default AnalogMap;
