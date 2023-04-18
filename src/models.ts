export interface Company {
  id: string;
  title: string;
  description: string;
  sector: string;
  goal: string;
  cnpj: string;
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
  // level: number;
  // sprint: string;
}

export interface CompanyProgress {
  id: string;
  company_id: string;
  canvas?: string;
  canvas_score?: number;

  pitch?: string;
  pitch_score?: number;

  ip?: string;
  ip_score?: number;

  development_state?: string;
  development_state_score?: number;

  solution_definition?: string;
  solution_definition_score?: number;

  needed_resources?: string;
  needed_resources_score?: number;

  ecosystem?: string;
  ecosystem_score?: number;

  definition_validation?: string;
  definition_validation_score?: number;

  clients?: string;
  clients_score?: number;

  concurrency_analysis?: string;
  concurrency_analysis_score?: number;

  market_size?: string;
  market_size_score?: number;

  incoming_method?: string;
  incoming_method_score?: number;

  mvp?: string;
  mvp_score?: number;

  feedback_cycle?: string;
  feedback_cycle_score?: number;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export interface FieldHistory {
  date: Date;
  value: number;
}

export interface CompanyMetricsGroup {
  improved: string[];
  remained: string[];
  worsened: string[];

  overall: number;

  history: Record<string, FieldHistory[]>;
}

export interface CompanyMetrics {
  structure: CompanyMetricsGroup;
  solution: CompanyMetricsGroup;
  market: CompanyMetricsGroup;
}
