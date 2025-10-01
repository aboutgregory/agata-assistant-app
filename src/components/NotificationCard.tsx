// src/components/NotificationCard.tsx

import React from 'react';
import { IAppointment } from '../types/consultas';
import { useNavigate } from 'react-router-dom'; // useNavigate obrigatório

interface NotificationCardProps {
  appointment: IAppointment; // Props obrigatória
  isFixed: boolean;
}

// Mapeamento de cor e ícone para o Tailwind CSS (para notificação)
const statusClasses = {
  today: 'bg-red-600 border-red-800', // Destaque para HOJE
  scheduled: 'bg-blue-500 border-blue-700',
  missed: 'bg-gray-400 border-gray-600',
};

const NotificationCard: React.FC<NotificationCardProps> = ({ appointment, isFixed }) => {
  const navigate = useNavigate();
  const statusType = appointment.type;
  const classes = statusClasses[statusType];

  const handleConnect = () => {
    if (statusType === 'today') {
      alert(`Simulando conexão para: ${appointment.professional}. Bem-vindo ao Ágata Assistant!`);
      // Em um projeto real, faria navigate(appointment.connectionLink);
    } else {
      // Navegação para um painel de reagendamento/detalhes
      navigate(`/treatment/${appointment.treatmentId}`); 
    }
  };

  const formattedTime = appointment.dateTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div 
      // Responsividade Obrigatória com TailwindCSS
      className={`
        p-4 md:p-6 rounded-xl shadow-2xl m-2 text-white transition-all duration-300
        border-4 
        ${classes}
        ${isFixed ? 
          'fixed bottom-4 right-4 z-50 w-[90%] sm:w-[350px] lg:w-[400px]' // Notificação Fixa
          : 'w-full'}
      `}
    >
      <h3 className="text-xl md:text-2xl font-extrabold mb-2">
        {statusType === 'today' ? '🔴 CONSULTA AGORA!' : appointment.specialty}
      </h3>
      
      <p className="text-sm md:text-base opacity-90 mb-3">
        Com: **{appointment.professional}**
      </p>

      {/* Botão Clicável para Conexão Direta */}
      {statusType === 'today' && (
        <button
          onClick={handleConnect}
          // Acessibilidade e Usabilidade: Grande target de toque
          className="w-full py-4 bg-white text-red-600 font-extrabold text-lg rounded-xl shadow-lg hover:bg-gray-100 transition-colors mt-2"
        >
          ENTRAR NA CONSULTA ({formattedTime})
        </button>
      )}

      {statusType !== 'today' && (
        <button
          onClick={handleConnect}
          className="w-full py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold rounded-lg transition-colors mt-2 text-sm"
        >
          {statusType === 'missed' ? 'Ver e Reagendar' : `Ver Detalhes (${formattedTime})`}
        </button>
      )}
    </div>
  );
};

export default NotificationCard;