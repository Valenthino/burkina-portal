export interface Ministry {
  id: number;
  name: string;
  short_name: string | null;
  minister: string | null;
  description: string | null;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

export interface Service {
  id: number;
  title: string;
  description: string | null;
  ministry_id: number | null;
  category: string | null;
  url: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  created_at: Date;
  updated_at: Date;
}

export interface Feedback {
  id: number;
  user_id: number | null;
  service_id: number | null;
  rating: number | null;
  comment: string | null;
  created_at: Date;
} 