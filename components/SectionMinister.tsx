
import React from 'react';

const SectionMinister: React.FC = () => {
  return (
    <div className="text-slate-700 space-y-5">
      <p>El concepto es simple pero poderoso: <strong>si eres cristiano, eres un ministro</strong>. Tus dones son tu equipamiento para el ministerio.</p>
      
      <blockquote className="bg-slate-50 border-l-4 border-sky-600 my-4 p-4 italic">
        "Todos los cristianos son llamados al ministerio. Si no eres un ministro, es otra forma de decir que no eres cristiano."
        <cite className="block text-right mt-2 text-sm not-italic text-slate-600">– Elton Trueblood</cite>
      </blockquote>
      
      <p>La Biblia lo ilustra perfectamente con la analogía del cuerpo:</p>
      
      <blockquote className="bg-slate-50 border-l-4 border-slate-300 my-4 p-4 italic">
        "Pues, así como cada uno de nosotros tiene un solo cuerpo con muchos miembros, y no todos estos miembros desempeñan la misma función, también nosotros, siendo muchos, formamos un solo cuerpo en Cristo, y cada miembro está unido a todos los demás. Tenemos dones diferentes, según la gracia que se nos ha dado."
        <br />
        <cite className="block text-right mt-2 text-sm not-italic text-slate-600">– Romanos 12:4-6a (NVI)</cite>
      </blockquote>
      
      <p>El propósito de esta diversidad no es la independencia, sino la unidad y el bien común:</p>
      
      <blockquote className="bg-slate-50 border-l-4 border-slate-300 my-4 p-4 italic">
        "A cada uno se le da una manifestación especial del Espíritu para el bien de los demás... Ahora bien, ustedes son el cuerpo de Cristo, y cada uno es miembro de ese cuerpo."
        <br />
        <cite className="block text-right mt-2 text-sm not-italic text-slate-600">– 1 Corintios 12:7, 27 (NVI)</cite>
      </blockquote>
    </div>
  );
};

export default SectionMinister;
