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

export type Actualite = {
    id: string;
    titre: string;
    contenu: string;
    date_publication: string;
    image_url: string | null;
    source_url: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  source_url: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Minister {
    id: string;
    name: string;
    title: string;
    ministry: string;
    photo_url?: string;
    bio?: string;
    order: number;
}

export interface MenuLink {
  title: string;
  url: string;
  description?: string;
  isNew?: boolean;
  inProgress?: boolean;
}

export interface SubSection {
  title: string;
  links: MenuLink[];
}

export interface MenuItem {
  title: string;
  sections: SubSection[];
}

export interface MegaMenuItem {
  title: string;
  sections: {
    title: string;
    links: MenuItem[];
  }[];
}

export interface MegaMenu {
  [key: string]: MenuItem;
} 