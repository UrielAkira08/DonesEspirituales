
import React, { useState, useCallback } from 'react';
import { SECTIONS_DATA } from './constants';
import SectionWelcome from './components/SectionWelcome';
import SectionQuiz from './components/SectionQuiz';
import SectionFoundations from './components/SectionFoundations';
import SectionMinister from './components/SectionMinister';
import SectionDiscoveryPath from './components/SectionDiscoveryPath';
import SectionGiftCatalog from './components/SectionGiftCatalog';
import SectionPersonalPlan from './components/SectionPersonalPlan';
import SectionFinal from './components/SectionFinal';
import Navigation from './components/Navigation';

// Map string component names from constants to actual component imports
const componentMap: { [key: string]: React.FC } = {
  SectionWelcome,
  SectionQuiz,
  SectionFoundations,
  SectionMinister,
  SectionDiscoveryPath,
  SectionGiftCatalog,
  SectionPersonalPlan,
  SectionFinal,
};

const App: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const sectionsWithResolvedComponents = SECTIONS_DATA.map(section => ({
    ...section,
    component: componentMap[section.component.name] || (() => <div>Componente no encontrado</div>),
  }));


  const handleNavigate = useCallback((direction: number) => {
    const newIndex = currentSectionIndex + direction;
    if (newIndex >= 0 && newIndex < sectionsWithResolvedComponents.length) {
      setCurrentSectionIndex(newIndex);
    }
  }, [currentSectionIndex, sectionsWithResolvedComponents.length]);

  const CurrentSectionComponent = sectionsWithResolvedComponents[currentSectionIndex]?.component;
  const currentSectionData = sectionsWithResolvedComponents[currentSectionIndex];

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
          totalSections={sectionsWithResolvedComponents.length}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
};

export default App;
