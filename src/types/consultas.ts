/**
 * Define as áreas de tratamento para categorização.
 */
export enum TreatmentArea {
  Cardiology = 'Cardiologia',
  Oncology = 'Oncologia',
  Geriatrics = 'Geriatria',
  Physiotherapy = 'Fisioterapia',
}

/**
 * Interface para representar uma Notificação/Consulta.
 * Usada para props e estado.
 */
export interface IAppointment {
  id: string; // Chave primária (PK)
  type: 'scheduled' | 'missed' | 'today'; // Tipos de notificação
  patientName: string;
  professional: string;
  specialty: string;
  dateTime: Date;
  treatmentId: string; // Chave estrangeira (FK) para o tratamento
  connectionLink: string;
}

/**
 * Interface para a tela de Acompanhamento de Tratamento.
 */
export interface ITreatment {
  id: string;
  name: string;
  area: TreatmentArea;
  startDate: Date;
  tasksCompleted: number;
  totalTasks: number;
}

// Dados simulados para o MVP (Mock Data)
export const mockAppointments: IAppointment[] = [
  {
    id: 'appt-001',
    type: 'today',
    patientName: 'Dona Maria',
    professional: 'Dr. João Silva',
    specialty: 'Cardiologia',
    dateTime: new Date(new Date().setHours(14, 0, 0, 0)),
    treatmentId: 'tx-101',
    connectionLink: '/join/appt-001',
  },
  {
    id: 'appt-002',
    type: 'scheduled',
    patientName: 'Dona Maria',
    professional: 'Dra. Ana Costa',
    specialty: 'Fisioterapia',
    dateTime: new Date(new Date().setDate(new Date().getDate() + 3)),
    treatmentId: 'tx-102',
    connectionLink: '/join/appt-002',
  },
  {
    id: 'appt-003',
    type: 'missed',
    patientName: 'Dona Maria',
    professional: 'Dr. Paulo Santos',
    specialty: 'Geriatria',
    dateTime: new Date(new Date().setDate(new Date().getDate() - 1)),
    treatmentId: 'tx-101',
    connectionLink: '/join/appt-003',
  },
];

export const mockTreatments: ITreatment[] = [
  {
    id: 'tx-101',
    name: 'Reabilitação Cardíaca',
    area: TreatmentArea.Cardiology,
    startDate: new Date('2023-10-01'),
    tasksCompleted: 15,
    totalTasks: 30,
  },
  {
    id: 'tx-102',
    name: 'Fisioterapia Motora',
    area: TreatmentArea.Physiotherapy,
    startDate: new Date('2023-11-15'),
    tasksCompleted: 5,
    totalTasks: 10,
  },
];