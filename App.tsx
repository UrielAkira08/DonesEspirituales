// App.tsx
import React, { useState, useCallback } from 'react';
import { SECTIONS_DATA } from './constants'; // Ahora SECTIONS_DATA contiene los componentes reales
// Ya no necesitas importar los componentes aquí individualmente si solo se usan en componentMap,
// Y ya no necesitas el componentMap ni sectionsWithResolvedComponents

import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Usa SECTIONS_DATA directamente, ya contiene los componentes reales
  const sections = SECTIONS_DATA;

  const handleNavigate = useCallback((direction: number) => {
    const newIndex = currentSectionIndex + direction;
    if (newIndex >= 0 && newIndex < sections.length) {
      setCurrentSectionIndex(newIndex);
    }
  }, [currentSectionIndex, sections.length]);

  const CurrentSectionComponent = sections[currentSectionIndex]?.component;
  const currentSectionData = sections[currentSectionIndex];

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 p-0 md:p-5">
      <div className="course-container w-full max-w-3xl bg-white rounded-none md:rounded-xl shadow-2xl overflow-hidden flex flex-col min-h-screen md:min-h-0 md:max-h-[95vh]">
        <header className="bg-slate-800 text-white p-5 md:p-6 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Descubre y Activa tus Dones Espirituales</h1>
        </header>

        <main className="p-5 md:p-8 flex-grow overflow-y-auto">
          {CurrentSectionComponent && currentSectionData && (
             <div key={currentSectionData.id}>
                <h2 className="text-sky-700 border-b-2 border-cyan-300 pb-3 mb-6 text-xl md:text-2xl font-semibold flex items-center">
                  {currentSectionData.icon}
                  {currentSectionData.title}
                </h2>
                <CurrentSectionComponent />
            </div>
          )}
        </main>

        <Navigation
          currentSectionIndex={currentSectionIndex}
          totalSections={sections.length}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
};

export default App;