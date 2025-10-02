// src/App.tsx

import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './index.css'; // Importa o CSS do Tailwind

const App: React.FC = () => {
  // Apenas renderiza o gerenciador de rotas da SPA
  return <AppRoutes />;
};

export default App;
