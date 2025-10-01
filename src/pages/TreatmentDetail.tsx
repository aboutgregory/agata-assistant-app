// src/pages/TreatmentDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams obrigatório
import { useData } from '../hooks/useData';
import { ITreatment } from '../types/consultas';

// Página para rota dinâmica (cumpre requisito de useParams)
const TreatmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Uso obrigatório de useParams (rota dinâmica)
  const navigate = useNavigate();
  const { getTreatmentById, loading } = useData();
  const [treatment, setTreatment] = useState<ITreatment | undefined>(undefined);

  // useEffect obrigatório: dispara quando o ID da rota muda
  useEffect(() => {
    if (id) {
      const data = getTreatmentById(id); 
      setTreatment(data);
    }
  }, [id, getTreatmentById]); // Dependências obrigatórias para evitar loop

  if (loading) {
    return <div className="text-center p-8 text-lg font-semibold">Carregando detalhes...</div>;
  }

  if (!treatment) {
    return (
      <div className="p-8 text-center bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Tratamento Não Encontrado</h1>
        <button 
          onClick={() => navigate('/')} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Voltar para Home
        </button>
      </div>
    );
  }
  
  const progressPercent = Math.round((treatment.tasksCompleted / treatment.totalTasks) * 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 md:p-10">
      <header className="flex justify-between items-center mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
        <h1 className="text-3xl font-extrabold text-blue-600">Detalhes do Tratamento</h1>
        <button 
          onClick={() => navigate('/')} // useNavigate obrigatório
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          ← Voltar
        </button>
      </header>

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-red-500">
        <h2 className="text-2xl font-bold mb-4 text-red-500">{treatment.name}</h2>
        <p className="text-lg mb-2">Área: <span className="font-semibold">{treatment.area}</span></p>
        <p className="text-lg mb-4">Início: {treatment.startDate.toLocaleDateString('pt-BR')}</p>

        <div className="mt-6 p-4 border border-green-500 rounded-lg bg-green-50 dark:bg-green-900 dark:text-gray-200">
          <h3 className="text-xl font-semibold mb-2">Progresso</h3>
          <p className="text-base">Tarefas: {treatment.tasksCompleted} de {treatment.totalTasks}</p>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2 dark:bg-gray-700">
            <div 
              className="bg-green-600 h-4 rounded-full" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-sm font-bold mt-1">{progressPercent}% Concluído!</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
