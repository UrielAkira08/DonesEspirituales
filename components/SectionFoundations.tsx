
import React, { useState, useCallback } from 'react';
import { FILL_IN_THE_BLANK_ANSWERS } from '../constants';
import { UserFillInTheBlankAnswersType } from '../types';

const SectionFoundations: React.FC = () => {
  const initialBlankAnswers: UserFillInTheBlankAnswersType = {
    blank1: '',
    blank2: '',
    blank3: '',
    blank4: '',
  };
  const [userAnswers, setUserAnswers] = useState<UserFillInTheBlankAnswersType>(initialBlankAnswers);
  const [feedback, setFeedback] = useState<{ message: string; type: 'correct' | 'incorrect' } | null>(null);
  const [inputStatus, setInputStatus] = useState<{ [key: string]: boolean }>({});


  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserAnswers(prev => ({ ...prev, [id]: value }));
    // Reset feedback and input status on change
    setFeedback(null);
    setInputStatus(prev => ({ ...prev, [id]: false }));
  }, []);

  const checkBlanks = useCallback(() => {
    let allCorrect = true;
    const newStatus: { [key: string]: boolean } = {};

    Object.keys(FILL_IN_THE_BLANK_ANSWERS).forEach(key => {
      if (userAnswers[key].trim().toLowerCase() !== FILL_IN_THE_BLANK_ANSWERS[key]) {
        allCorrect = false;
        newStatus[key] = false; // incorrect
      } else {
        newStatus[key] = true; // correct
      }
    });
    setInputStatus(newStatus);

    if (allCorrect) {
      setFeedback({ message: '✅ ¡Excelente! Lo has completado correctamente.', type: 'correct' });
    } else {
      setFeedback({ message: '❌ Algunos espacios no son correctos. Inténtalo de nuevo.', type: 'incorrect' });
    }
  }, [userAnswers]);

  const getInputClass = (blankId: string) => {
    let baseClass = "fill-in-the-blank-input border-none border-b-2 border-dotted border-sky-700 mx-1 px-2 py-1 text-center text-base w-28 md:w-32 focus:outline-none focus:border-solid focus:border-sky-600";
    if (feedback) { // only apply color if feedback is shown
        if (inputStatus[blankId] === true) { // correct
            return `${baseClass} border-green-600`;
        } else if (inputStatus[blankId] === false) { // incorrect
            return `${baseClass} border-red-600`;
        }
    }
    return baseClass;
  };


  return (
    <div className="text-slate-700">
      <h3 className="text-slate-800 mt-0 mb-4 text-lg md:text-xl font-semibold">2.1 Lo que la Biblia dice sobre los Dones</h3>
      <p className="mb-4">Las fuentes principales en el Nuevo Testamento son: <strong>1 Pedro 4:10</strong>, <strong>Romanos 12:1-8</strong>, <strong>1 Corintios 12</strong>, y <strong>Efesios 4:1-16</strong>.</p>
      
      <div className="fill-in-the-blank bg-slate-50 p-4 rounded-lg my-6">
        <p className="font-semibold text-slate-800 mb-3">Ejercicio Interactivo (1 Pedro 4:10):</p>
        <p className="leading-relaxed">
          Cada uno ponga 
          <input type="text" id="blank1" placeholder="...." value={userAnswers.blank1} onChange={handleInputChange} className={getInputClass('blank1')} /> 
          de los demás el don que haya recibido, 
          <input type="text" id="blank2" placeholder="...." value={userAnswers.blank2} onChange={handleInputChange} className={getInputClass('blank2')} /> 
          fielmente la 
          <input type="text" id="blank3" placeholder="...." value={userAnswers.blank3} onChange={handleInputChange} className={getInputClass('blank3')} /> 
          de Dios en sus 
          <input type="text" id="blank4" placeholder="...." value={userAnswers.blank4} onChange={handleInputChange} className={getInputClass('blank4')} /> formas.
        </p>
        <button 
          className="check-button block mx-auto my-4 bg-cyan-300 text-slate-800 px-5 py-2 rounded-full cursor-pointer font-bold hover:bg-cyan-400 transition-colors"
          onClick={checkBlanks}
        >
          Comprobar Respuesta
        </button>
        {feedback && (
          <div className={`feedback p-3 mt-2 rounded-md font-medium text-sm ${
            feedback.type === 'correct'
              ? 'bg-green-50 text-green-700 border border-green-300'
              : 'bg-red-50 text-red-700 border border-red-300'
          }`}>
            {feedback.message}
          </div>
        )}
      </div>

      <p className="mb-2"><strong>Énfasis en Romanos 12:</strong> Este pasaje nos llama a la moderación, a no pensar en nosotros mismos con más altivez de la que corresponde. Dios nos da dones según la "medida de fe" que Él nos ha repartido.</p>
      <div className="reflection-box bg-sky-50 border-l-4 border-slate-400 p-4 my-5 italic text-slate-700 rounded-r-md">
        <strong>Pregunta de Reflexión:</strong> Según Romanos 12, ¿qué es lo que 'mide' tu función en la iglesia? ¿Tu talento, tu experiencia o la fe que Dios te ha dado?
      </div>

      <h3 className="text-slate-800 mt-8 mb-4 text-lg md:text-xl font-semibold">2.2 Elena de White y los Dones</h3>
      <blockquote className="bg-slate-50 border-l-4 border-slate-300 my-4 p-4 italic text-slate-700">
        "Dios puso en la iglesia diferentes dones. Estos son preciosos en sus debidos lugares, y todos pueden desempeñar una parte en la obra de preparar un pueblo para la pronta venida de Cristo." <cite className="block text-right mt-2 text-sm not-italic text-slate-600">– Obreros Evangélicos, p. 496</cite>
      </blockquote>
      <blockquote className="bg-slate-50 border-l-4 border-slate-300 my-4 p-4 italic text-slate-700">
        "No habiendo sido demandados y no habiendo sido usados, los dones espirituales que les fueron concedidos han menguado hasta ser débiles." <cite className="block text-right mt-2 text-sm not-italic text-slate-600">– Mensajes Selectos 1, p. 148</cite>
      </blockquote>

      <h3 className="text-slate-800 mt-8 mb-4 text-lg md:text-xl font-semibold">2.3 Responsabilidad de la Iglesia</h3>
      <p className="mb-2">La iglesia tiene un rol activo en el desarrollo de los dones:</p>
      <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
        <li><strong>Reconocer:</strong> La comunidad de creyentes ayuda a identificar y confirmar los dones en sus miembros.</li>
        <li><strong>Elegir:</strong> Los líderes son elegidos entre los dotados para guiar y servir.</li>
        <li><strong>Ordenar:</strong> Los ministerios son formalmente reconocidos y comisionados.</li>
      </ul>
      <p><strong>Ejemplo Práctico: Felipe.</strong> Sus dones se manifestaron y desarrollaron a lo largo de su ministerio: <strong>Sabiduría y Ayuda</strong> (Hechos 6:5) ➔ <strong>Evangelismo, Milagros y Curación</strong> (Hechos 8) ➔ Su hogar era un centro de <strong>Profecía</strong> (Hechos 21:8-9).</p>
    </div>
  );
};

export default SectionFoundations;
