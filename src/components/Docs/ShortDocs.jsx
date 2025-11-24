import React from 'react';

const ShortDocs = () => {
  const videos = [
    { title: "Crianças e Internet", id: "F0dwxPO2UWg?si=mTkzgRuYCZCr4mUG" },
    { title: "Sobre o documentário 'Dilema das Redes'", id: "a18wjM8cyH4?si=FXJlgoO42WhdB1CO" },
    { title: "Impacto das telas em crianças e adolescentes", id: "CKMjHPk_mq8?si=nOJDEjBR-RYslczn" },
    { title: "Like us", id: "dhyzsn9SEaw?si=vpv3n6Z6VGoeQyOU" },
    { title: "Curta Escravos da Tecnologia", id: "Qx8JIoNOz0Y?si=SWFZmYW1FZiqIinC" },
    { title: "Dependência Tecnologica", id: "NZaIDMXohrY?si=FUVXhsQ0wHaebcO_" },
  ];

  return (
    <section id="short-docs" className="text-black p-8 rounded-xl mb-8 text-center text-lg mx-8 md:mx-32 lg:mx-64">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Biblioteca de <span className="font-abril">"Short Docs"</span></h2>
      <p className="mb-6">Vídeos curtos para entender a ciência por trás do mundo digital.</p>

      <div className="video-grid grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {videos.map(video => (
          <div key={video.id} className="video-container bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-medium mb-2">{video.title}</h4>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autopla y; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 rounded"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortDocs;