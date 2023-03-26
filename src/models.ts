export interface Company {
  id: string;
  title: string;
  description: string;
  sector: string;
  goal: string;
  cnpj: number;
  project_time: number;
  challenges: string;
  team_size: number;
  project_started: string;
  website: string;
  ip: boolean;
  resources: string;
  resources_needed: string;
  mvp: boolean;
  incoming_model: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}
