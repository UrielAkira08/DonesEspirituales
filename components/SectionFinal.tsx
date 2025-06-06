
import React from 'react';

const SectionFinal: React.FC = () => {
  // Note: The main h2 title for this section is handled in App.tsx
  return (
    <div className="final-message text-center py-6 px-2 text-slate-700">
      <p className="text-lg md:text-xl mb-4">Has completado el curso. Este es solo el comienzo de tu viaje. El descubrimiento y desarrollo de tus dones espirituales es un proceso para toda la vida.</p>
      <p className="text-lg md:text-xl mb-8">Sigue explorando, experimentando, orando y, sobre todo, sirviendo con amor.</p>
      <blockquote className="bg-slate-50 border-l-4 border-sky-600 my-4 p-6 italic text-lg md:text-xl rounded-r-md shadow-sm max-w-xl mx-auto">
        "Cada uno ponga al servicio de los demás el don que haya recibido, administrando fielmente la gracia de Dios en sus diversas formas."
        <br />
        <cite className="block text-right mt-3 text-base not-italic text-slate-600">– 1 Pedro 4:10 (NVI)</cite>
      </blockquote>
    </div>
  );
};

export default SectionFinal;
