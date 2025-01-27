export interface Service {
  id: number
  nom: string
  description: string | null
  slug: string
  categorie: string
  sous_categorie: string
  type: string
  route_type: 'info' | 'external' | 'direct'
  external_url: string | null
  ministere?: {
    id: number
    nom: string
    slug: string
  }
}

export interface Subcategory {
  name: string
  slug: string
  services: Service[]
}

export interface Category {
  name: string
  slug: string
  subcategories: Subcategory[]
}

export interface Mission {
  id: number
  description: string
  ministere_id: number
  ordre: number
}

export interface MinistereService {
  id: number
  nom: string
  description?: string | null
  type?: string
  route_type?: 'info' | 'external' | 'direct'
  external_url?: string | null
  slug?: string
  categorie?: string
  sous_categorie?: string
}

export type Ministere = {
  id: number;
  nom: string;
  nom_court?: string;
  ministre?: string;
  description?: string;
  slug: string;
  est_actif: boolean;
  missions?: MinistereMission[];
  services?: MinistereService[];
};

export type MinistereMission = {
  id: number;
  description: string;
  ordre: number;
}; 