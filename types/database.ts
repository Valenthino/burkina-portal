export interface Ministry {
  id: number;
  name: string;
  short_name: string | null;
  minister: string | null;
  description: string | null;
  slug: string;
  created_at: Date;
  updated_at: Date;
  services?: Service[];
  missions?: Mission[];
}

export interface Service {
  id: number;
  nom: string;
  type: string;
  route_type: string;
  slug: string;
  category: string;
  parent_slug: string;
}

export interface Mission {
  id: number;
  description: string;
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