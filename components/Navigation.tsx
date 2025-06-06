
import React from 'react';

interface NavigationProps {
  currentSectionIndex: number;
  totalSections: number;
  onNavigate: (direction: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSectionIndex, totalSections, onNavigate }) => {
  const progressPercentage = totalSections > 1 ? (currentSectionIndex / (totalSections - 1)) * 100 : 0;
  
  const handleFinalize = () => {
    window.location.reload();
  };

  return (
    <nav className="flex flex-col-reverse md:flex-row justify-between items-center p-5 md:p-6 bg-slate-50 border-t border-slate-200 mt-auto">
      <button
        id="prevBtn"
        className="nav-button bg-sky-700 text-white px-6 py-2.5 rounded-full text-base font-medium transition-colors duration-300 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:transform-none transform hover:-translate-y-0.5 w-full md:w-auto mb-4 md:mb-0"
        onClick={() => onNavigate(-1)}
        disabled={currentSectionIndex === 0}
      >
        Anterior
      </button>
      <div className="progress-bar-container w-full md:w-2/5 h-2.5 bg-slate-200 rounded-full mb-4 md:mb-0">
        <div
          id="progressBar"
          className="progress-bar h-full bg-cyan-300 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <button
        id="nextBtn"
        className="nav-button bg-sky-700 text-white px-6 py-2.5 rounded-full text-base font-medium transition-colors duration-300 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:transform-none transform hover:-translate-y-0.5 w-full md:w-auto"
        onClick={currentSectionIndex === totalSections - 1 ? handleFinalize : () => onNavigate(1)}
      >
        {currentSectionIndex === totalSections - 1 ? 'Finalizar' : 'Siguiente'}
      </button>
    </nav>
  );
};

export default Navigation;
