
import React from 'react';
import { Section, QuizQuestionType, CatalogItemType, PlanStepType, FillInTheBlankAnswersType } from './types';

// Section Components (forward declaration, will be imported in App.tsx)
// These are placeholders for type checking, actual components are in their files.
const SectionWelcome: React.FC = () => null;
const SectionQuiz: React.FC = () => null;
const SectionFoundations: React.FC = () => null;
const SectionMinister: React.FC = () => null;
const SectionDiscoveryPath: React.FC = () => null;
const SectionGiftCatalog: React.FC = () => null;
const SectionPersonalPlan: React.FC = () => null;
const SectionFinal: React.FC = () => null;

// SVG Icons as React Components
// Fill with "currentColor" to be styled by Tailwind text color classes e.g. text-sky-700
const IconBaseStyles = "w-8 h-8 mr-3 fill-current";

export const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={IconBaseStyles}>
    <path d="M21 5c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h15c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V4c0-1.4.9-2.67 2.18-2.93C2.37 1.03 0 1.5 0 2.25V20c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h0Zm-16 0h12v2H5V5Z" />
  </svg>
);

export const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={IconBaseStyles}>
    <path d="M2 22c0-2.48 0-4.53 0-7 0-1.66 1.34-3 3-3h14c1.66 0 3 1.34 3 3s0 7 0 7C9.23 22 2 22 2 22Zm16-12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4Z" />
  </svg>
);

export const PathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={IconBaseStyles}>
    <path d="M18.36 5.64c-1.95-1.95-4.52-2.86-7.36-2.64-.55.04-.99.51-.96 1.06.04.55.51.99 1.06.96C11.98 4.93 14.21 5.6 15.93 7.32c.49.49.88 1.04 1.19 1.64.29.55.89.83 1.45.62.63-.25 1.04-.91.79-1.54-.4-.7-.91-1.33-1.5-1.91Zm-12.72 12.72c1.95 1.95 4.52 2.86 7.36 2.64.55-.04.99-.51.96-1.06-.04-.55-.51-.99-1.06-.96-2.86.23-5.09-.44-6.81-2.16-.49-.49-.88-1.04-1.19-1.64-.29-.55-.89-.83-1.45-.62-.63.25-1.04.91-.79 1.54.4.7.91 1.33 1.5 1.91ZM4 12h1.46c.46 0 .86-.32.97-.77.21-.98.58-1.89 1.1-2.69.19-.3.22-.69.09-1.01-.13-.31-.42-.52-.75-.53H2.2c-.41 0-.75.34-.75.75s.34.75.75.75h1.11c-.37.65-.65 1.39-.83 2.19-.08.31.08.64.38.76s.64-.07.73-.38c.14-.58.36-1.13.64-1.66h-.32c-.41 0-.75.34-.75.75s.34.75.75.75Zm12.53-.77c-.21.98-.58 1.89-1.1 2.69-.19.3-.22.69-.1 1.01.13.31.42.52.75.53H21.8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.11c.37-.65.65-1.39.83-2.19.08-.31-.08-.64-.38-.76s-.64.07-.73.38c-.14.58-.36-1.13-.64-1.66h.33c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H18.53c-.45 0-.85.33-.97.77Z" />
  </svg>
);

export const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={IconBaseStyles}>
    <path d="M7 7h4v2H3V7h4Zm-4 6h8v-2H3v2Zm0 6h10v-2H3v2Zm14-8h4v2h-4v-2Zm-4 6h8v-2h-8v2Zm0 6h10v-2h-10v2ZM3 3h18v2H3V3Z" />
  </svg>
);

export const PlanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={IconBaseStyles}>
    <path d="M7 7h2.84L19.5 4.34C19.79 4.16 19.9 4 19.92 4c.43 0 .81.26 1.04.73.2.39.22.87-.04 1.26l-2.08 3.02h.38c.55 0 1 .45 1 1V19c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7Zm6.93 10.5c.19.2.45.32.73.32.55 0 1-.45 1-1v-.08L17 9.38V11h-4v5.46c0 .34.17.64.43.81.26.18.59.19.87.03h1.63ZM7 9v10h4V9H7Z" />
  </svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);


export const SECTIONS_DATA: Section[] = [
  { id: 0, title: "¡Bienvenido!", icon: <span role="img" aria-label="Sparkles" className={IconBaseStyles}>✨</span>, component: SectionWelcome },
  { id: 1, title: "¿Cuánto Conoces sobre los Dones Espirituales?", icon: <span role="img" aria-label="Quiz" className={IconBaseStyles}>🧐</span>, component: SectionQuiz },
  { id: 2, title: "Fundamentos Teológicos", icon: <BookIcon />, component: SectionFoundations },
  { id: 3, title: "Cada Cristiano: Un Ministro Dotado", icon: <CommunityIcon />, component: SectionMinister },
  { id: 4, title: "Tu Camino al Descubrimiento", icon: <PathIcon />, component: SectionDiscoveryPath },
  { id: 5, title: "Un Catálogo de Dones Bíblicos", icon: <ListIcon />, component: SectionGiftCatalog },
  { id: 6, title: "Tu Plan de Ministerio Personal", icon: <PlanIcon />, component: SectionPersonalPlan },
  { id: 7, title: "Final del Curso", icon: <span role="img" aria-label="Party Popper" className={IconBaseStyles}>🎉</span>, component: SectionFinal },
];

export const QUIZ_QUESTIONS: QuizQuestionType[] = [
  { id: 1, text: "¿Todo cristiano tiene por lo menos un don espiritual?", correctAnswer: "Verdadero", hint: "🤔 Piensa en lo que dice 1 Pedro 4:10 sobre la gracia de Dios.", feedbackCorrect: "✅ ¡Correcto! ¡Así es! La Biblia enseña que cada creyente recibe al menos un don espiritual al momento de la conversión, para edificación del cuerpo de Cristo (1 Pedro 4:10).", feedbackIncorrect: "❌ Incorrecto. No exactamente. La Biblia enseña que cada creyente recibe al menos un don espiritual para servir a otros." },
  { id: 2, text: "¿Los no creyentes también tienen dones espirituales?", correctAnswer: "Falso", hint: "🤔 Considera quién recibe el Espíritu Santo.", feedbackCorrect: "✅ ¡Correcto! Los dones espirituales son otorgados por el Espíritu Santo a los creyentes. Los no creyentes pueden tener talentos naturales, pero no dones espirituales en el sentido bíblico.", feedbackIncorrect: "❌ Incorrecto. No es correcto. Los dones espirituales son otorgados por el Espíritu Santo exclusivamente a los creyentes." },
  { id: 3, text: "¿La mayoría de los cristianos tienen todos los dones mencionados en el Nuevo Testamento?", correctAnswer: "Falso", hint: "🤔 Romanos 12:4-6 habla sobre la diversidad de miembros en un cuerpo.", feedbackCorrect: "✅ ¡Exacto! El Nuevo Testamento menciona una variedad de dones, pero ningún cristiano posee todos ellos. La diversidad promueve la interdependencia.", feedbackIncorrect: "❌ Incorrecto. La Biblia enseña que los dones son diversos y que ningún cristiano posee todos los dones. La diversidad es clave." },
  { id: 4, text: "¿Somos libres de elegir los dones que queremos?", correctAnswer: "Falso", hint: "🤔 Piensa en la soberanía del Espíritu Santo en la distribución de los dones (1 Corintios 12:11).", feedbackCorrect: "✅ ¡Correcto! Los dones espirituales son dados por el Espíritu Santo según Su voluntad soberana, no los elegimos.", feedbackIncorrect: "❌ Incorrecto. Los dones son dados por el Espíritu Santo, no son elegidos por nosotros." },
  { id: 5, text: "¿Los creyentes darán cuenta al Señor por la forma en que utilizaron sus dones?", correctAnswer: "Verdadero", hint: "🤔 Reflexiona sobre la idea de la mayordomía (1 Pedro 4:10).", feedbackCorrect: "✅ ¡Sí! El creyente dará cuenta de cómo usó los dones. Debemos ser fieles administradores.", feedbackIncorrect: "❌ Incorrecto. La Biblia enfatiza la responsabilidad del creyente en el uso de los dones." },
  { id: 6, text: "¿Los dones utilizados sin amor también pueden cumplir los propósitos designados de Dios?", correctAnswer: "Falso", hint: "🤔 Recuerda el capítulo del 'amor' en 1 Corintios.", feedbackCorrect: "✅ ¡Precisamente! 1 Corintios 13 enfatiza que sin amor, los dones no tienen valor ni cumplen el propósito de Dios.", feedbackIncorrect: "❌ Incorrecto. 1 Corintios 13 es claro: sin amor, los dones no tienen valor." },
  { id: 7, text: "¿Una personalidad no cristiana puede anular la eficacia de los dones espirituales?", correctAnswer: "Verdadero", hint: "🤔 El documento lo menciona explícitamente. ¿Qué es más importante, el don o el fruto del Espíritu?", feedbackCorrect: "✅ ¡Así es! El documento lo menciona explícitamente: \"Una personalidad no cristiana, puede anular la eficacia de sus dones espirituales y su ministerio\". El fruto del Espíritu es crucial.", feedbackIncorrect: "❌ Incorrecto. El documento establece que una personalidad no cristiana puede anular la eficacia de los dones." },
];

export const FILL_IN_THE_BLANK_ANSWERS: FillInTheBlankAnswersType = {
  blank1: "al servicio",
  blank2: "administrando",
  blank3: "gracia",
  blank4: "diversas"
};

export const GIFT_CATALOG_ITEMS: CatalogItemType[] = [
    { id: "admin", title: "Administración", description: "La habilidad especial para comprender los objetivos de la iglesia y diseñar y ejecutar planes efectivos para cumplirlos.", references: "1 Corintios 12:28; Hechos 6:1-7; Hechos 27:11; Lucas 14:28-30." },
    { id: "ayuda", title: "Ayuda / Servicio", description: "La habilidad especial para invertir los talentos que se tienen en el cuerpo, lo que permite a otros aumentar la eficacia de sus propios dones.", references: "1 Corintios 12:28; Romanos 12:7; Romanos 16:1-2; Hechos 9:36." },
    { id: "conocimiento", title: "Conocimiento", description: "La habilidad especial para descubrir, acumular, analizar y aclarar información e ideas que son aplicables para el crecimiento y bienestar del cuerpo.", references: "1 Corintios 12:8; 1 Corintios 2:14; Colosenses 2:2-3." },
    { id: "contribucion", title: "Contribución (Dar)", description: "La habilidad especial para contribuir con recursos materiales para la obra del Señor con liberalidad y alegría.", references: "Romanos 12:8; 2 Corintios 8:1-7; 2 Corintios 9:2-8." },
    { id: "curacion", title: "Curación", description: "La habilidad especial para servir como intermediario humano a través del cual Dios se complace en curar enfermedades y restaurar la salud.", references: "1 Corintios 12:9, 28; Hechos 3:1-10; Hechos 5:12-16." },
    { id: "discernimiento", title: "Discernimiento de espíritus", description: "La habilidad especial para conocer con certeza si ciertos comportamientos que pretenden ser de Dios, son realmente divinos, humanos o satánicos.", references: "1 Corintios 12:10; Hechos 5:1-11; 1 Juan 4:1-6." },
    { id: "ensenanza", title: "Enseñanza", description: "La habilidad especial para comunicar información relevante para la salud y ministerio del cuerpo, de tal manera que otros aprendan.", references: "Romanos 12:7; 1 Corintios 12:28; Efesios 4:11-14; Hechos 18:24-28." },
    { id: "evangelista", title: "Evangelista", description: "La habilidad especial para compartir el evangelio con no creyentes de tal manera que lleguen a ser discípulos de Jesús y miembros responsables del cuerpo de Cristo.", references: "Efesios 4:11-14; 2 Timoteo 4:5; Hechos 8:26-40." },
    { id: "exhortacion", title: "Exhortación (Ánimo)", description: "La habilidad especial para expresar palabras de consuelo, incentivo y consejo a otros miembros del cuerpo, de tal manera que se sientan ayudados y sanados.", references: "Romanos 12:8; 1 Timoteo 4:13; Hebreos 10:25." },
    { id: "fe", title: "Fe", description: "La habilidad especial para discernir con extraordinaria confianza la voluntad y propósitos de Dios para su obra.", references: "1 Corintios 12:9; Hebreos 11; Romanos 4:18-21." },
    { id: "hospitalidad", title: "Hospitalidad", description: "La habilidad especial para proveer una casa abierta y una cordial bienvenida a aquellos necesitados de alimento y hospedaje.", references: "1 Pedro 4:9; Romanos 12:13; Romanos 16:23; Hebreos 13:1-2." },
    { id: "intercesion", title: "Intercesión", description: "La habilidad especial para orar por largos períodos de tiempo de forma regular y ver respuestas frecuentes y específicas a sus oraciones.", references: "Santiago 5:14-16; Colosenses 1:9-12; Hechos 12:12." },
    { id: "liderazgo", title: "Liderazgo", description: "La habilidad especial para establecer metas de acuerdo con el propósito de Dios y comunicarlas de tal manera que otros voluntariamente trabajen juntos para lograrlas.", references: "Romanos 12:8; 1 Timoteo 5:17; Hechos 15:7-11; Hebreos 13:17." },
    { id: "misericordia", title: "Misericordia", description: "La habilidad especial para sentir empatía y compasión genuina por personas que sufren y traducir esa compasión en hechos que reflejen el amor de Cristo.", references: "Romanos 12:8; Lucas 10:33-35; Marcos 9:41." },
    { id: "misionero", title: "Misionero", description: "La habilidad especial para ministrar con cualquier otro don espiritual en una cultura diferente a la propia.", references: "1 Corintios 9:19-23; Hechos 13:2-3; Romanos 10:15." },
    { id: "pastor", title: "Pastor / Pastoreo", description: "La habilidad especial para asumir una responsabilidad personal a largo plazo por el bienestar espiritual de un grupo de creyentes.", references: "Efesios 4:11-14; 1 Pedro 5:1-3; Juan 10:1-18." },
    { id: "sabiduria", title: "Sabiduría", description: "La habilidad especial para conocer la intención del Espíritu Santo y recibir ideas sobre cómo el conocimiento puede ser mejor aplicado a las necesidades del cuerpo de Cristo.", references: "1 Corintios 12:8; 1 Corintios 2:1-13; Hechos 6:3, 10; Santiago 1:5-6." },
];

export const PERSONAL_PLAN_STEPS: PlanStepType[] = [
    { id: "plan-1", label: "Paso 1: Identifica tus Dones Espirituales", placeholder: "Basado en lo que has aprendido y orado, ¿cuáles crees que son tus dones primarios y secundarios?" },
    { id: "plan-3", label: "Paso 3: Define tus Funciones", placeholder: "¿Dónde encajan mis dones en la estructura actual de mi iglesia? ¿Qué nuevos ministerios podrían iniciarse?" },
    { id: "plan-4", label: "Paso 4: Lista los Ministerios que te interesan", placeholder: "Ej: Liderar un grupo pequeño, visitar enfermos, ayudar en la tesorería, predicar, etc." },
    { id: "plan-5", label: "Paso 5: Identifica las Barreras", placeholder: "¿Qué podría impedirte servir? (Ej: falta de tiempo, recursos, apoyo, información, miedo, etc.)" },
    { id: "plan-11", label: "Paso 11: Plan de Acción Inmediato", placeholder: "¿Cuál es el primer paso que puedes dar esta semana? ¿Con quién necesitas hablar? ¿Qué necesitas investigar?" },
    { id: "plan-12", label: "Paso 12: Metas a Corto y Largo Plazo", placeholder: "Meta a 3 meses: ...\nMeta a 1 año: ...\nMeta a largo plazo: ..." },
];

