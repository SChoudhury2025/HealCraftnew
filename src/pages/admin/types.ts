export interface Service {
  id: string;
  name: string;
  description: string;
  isPrime: boolean;
  isActive: boolean;
}

export interface Hospital {
  id: string;
  name: string;
  email: string;
  contact: string;
  description: string;
  departments: string[];
  isActive: boolean;
}

export interface Department {
  id: string;
  doctorName: string;
  address: string;
  details: string;
  specialization: string;
  experience: number;
  isConsultant: boolean;
  isActive: boolean;
}