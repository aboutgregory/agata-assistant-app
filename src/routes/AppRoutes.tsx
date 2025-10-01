// src/routes/AppRoutes.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TreatmentDetail from '../pages/TreatmentDetail';

// Componente principal de Rotas (uso de Rotas Estáticas e Dinâmicas)
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota Estática Principal */}
        <Route path="/" element={<Home />} />
        
        {/* Rota Dinâmica (uso obrigatório de useParams na página TreatmentDetail) */}
        <Route path="/treatment/:id" element={<TreatmentDetail />} />
        
        {/* Rota Fictícia de Simulação de Conexão */}
        <Route 
          path="/join/:apptId" 
          element={
            <div className="min-h-screen flex items-center justify-center bg-green-700 text-white p-10">
              <p className="text-3xl font-extrabold text-center">CONEXÃO ESTABELECIDA. <br/> Seu assistente Ágata funcionou!</p>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
