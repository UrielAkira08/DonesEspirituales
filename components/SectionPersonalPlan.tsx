
import React, { useState } from 'react';
import { PERSONAL_PLAN_STEPS } from '../constants';
import { PlanInputsType } from '../types';

const SectionPersonalPlan: React.FC = () => {
  const initialPlanInputs: PlanInputsType = PERSONAL_PLAN_STEPS.reduce((acc, step) => {
    acc[step.id] = '';
    return acc;
  }, {} as PlanInputsType);

  const [planInputs, setPlanInputs] = useState<PlanInputsType>(initialPlanInputs);

  const handleInputChange = (id: string, value: string) => {
    setPlanInputs(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <p className="mb-6 text-slate-700">¡Es hora de aplicar lo aprendido! Esta sección es un borrador para tu reflexión personal (el texto no se guarda). Usa estos pasos para comenzar a bosquejar cómo usarás tus dones.</p>
      
      {PERSONAL_PLAN_STEPS.map(step => (
        <div key={step.id} className="plan-step mb-6">
          <label htmlFor={step.id} className="block font-semibold text-sky-700 mb-2">
            {step.label}
          </label>
          <textarea
            id={step.id}
            value={planInputs[step.id]}
            onChange={(e) => handleInputChange(step.id, e.target.value)}
            placeholder={step.placeholder}
            className="w-full p-3 border rounded-md border-slate-300 min-h-[100px] resize-y focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-700"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionPersonalPlan;
