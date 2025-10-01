// src/hooks/useData.ts

import { useState, useEffect, useCallback } from 'react';
import { IAppointment, ITreatment, mockAppointments, mockTreatments } from '../types/consultas';

/**
 * Hook customizado para simular a busca de dados da aplicação.
 * Cumpre os requisitos de useState e useEffect.
 */
export const useData = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [treatments, setTreatments] = useState<ITreatment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect obrigatório para simular o carregamento inicial de dados
  useEffect(() => {
    // Simula o tempo de carregamento da API
    setTimeout(() => {
      setAppointments(mockAppointments);
      setTreatments(mockTreatments);
      setLoading(false);
    }, 500);
  }, []);

  // useCallback para estabilizar a função, seguindo boas práticas
  const getTreatmentById = useCallback((id: string): ITreatment | undefined => {
    return mockTreatments.find(t => t.id === id); // Busca no mock data
  }, []);

  return { appointments, treatments, loading, getTreatmentById };
};
