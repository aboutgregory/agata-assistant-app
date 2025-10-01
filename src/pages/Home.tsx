// src/pages/Home.tsx

import React from 'react';
import { useData } from '../hooks/useData';
import NotificationCard from '../components/NotificationCard';
import { useNavigate } from 'react-router-dom'; // useNavigate obrigatório

const Home: React.FC = () => {
  const { appointments, treatments, loading } = useData(); // Uso obrigatório de Hook customizado
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-red-500">
        <p className="text-2xl font-bold">Carregando Ágata Assistant...</p>
      </div>
    );
  }

  // Notificação fixa: prioriza 'today', senão usa o próximo 'scheduled'
  const fixedAppointment = appointments.find(appt => appt.type === 'today') || appointments.find(appt => appt.type === 'scheduled');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 pb-24 md:pb-8">
      <header className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-red-600">Ágata Assistant</h1>
        <p className="text-sm mt-1 opacity-80">Diminuindo o absentismo com um toque.</p>
      </header>

      {/* Seção 1: Acompanhamento de Tratamento (Cumpre requisito da Tela) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">Seu Progresso Atual</h2>
        
        <div 
          // Responsividade: Layout Grid adaptável
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {treatments.map(treatment => (
            <div 
              key={treatment.id}
              onClick={() => navigate(`/treatment/${treatment.id}`)} // Rota dinâmica obrigatória
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-t-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-2">{treatment.name}</h3>
              <p className="text-sm opacity-70 mb-3">{treatment.area}</p>
              
              <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                <div 
                  className="bg-green-600 h-3 rounded-full" 
                  style={{ width: `${Math.round((treatment.tasksCompleted / treatment.totalTasks) * 100)}%` }}
                ></div>
              </div>
              <p className="text-xs font-bold mt-2 text-green-600">
                {Math.round((treatment.tasksCompleted / treatment.totalTasks) * 100)}% Concluído
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2: Próximas Consultas / Histórico (Cumpre requisito da Tela) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">Próximas Consultas / Perdidas</h2>
        <div className="space-y-4">
          {appointments
            .filter(appt => appt.type !== 'today') // Filtra a consulta de HOJE (que está fixa)
            .map(appt => (
              <NotificationCard 
                key={appt.id} 
                appointment={appt} 
                isFixed={false} 
              />
          ))}
        </div>
      </section>

      {/* Notificação Fixa (Notificação na hora da teleconsulta - "um toque") */}
      {fixedAppointment && (
        <NotificationCard appointment={fixedAppointment} isFixed={true} />
      )}
    </div>
  );
};

export default Home;
