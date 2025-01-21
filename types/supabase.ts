export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      utilisateurs: {
        Row: {
          id: string
          email: string
          mot_de_passe: string
          nom: string
          prenom: string
          telephone: string | null
          est_verifie: boolean
          est_actif: boolean
          date_creation: string
          date_modification: string
        }
        Insert: {
          id?: string
          email: string
          mot_de_passe: string
          nom: string
          prenom: string
          telephone?: string | null
          est_verifie?: boolean
          est_actif?: boolean
          date_creation?: string
          date_modification?: string
        }
        Update: {
          id?: string
          email?: string
          mot_de_passe?: string
          nom?: string
          prenom?: string
          telephone?: string | null
          est_verifie?: boolean
          est_actif?: boolean
          date_creation?: string
          date_modification?: string
        }
      }
      roles: {
        Row: {
          id: number
          nom: string
          description: string | null
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          description?: string | null
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          description?: string | null
          date_creation?: string
        }
      }
      permissions: {
        Row: {
          id: number
          nom: string
          description: string | null
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          description?: string | null
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          description?: string | null
          date_creation?: string
        }
      }
      roles_permissions: {
        Row: {
          role_id: number
          permission_id: number
        }
        Insert: {
          role_id: number
          permission_id: number
        }
        Update: {
          role_id?: number
          permission_id?: number
        }
      }
      utilisateurs_roles: {
        Row: {
          utilisateur_id: string
          role_id: number
        }
        Insert: {
          utilisateur_id: string
          role_id: number
        }
        Update: {
          utilisateur_id?: string
          role_id?: number
        }
      }
      regions: {
        Row: {
          id: number
          nom: string
          code: string | null
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          code?: string | null
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          code?: string | null
          date_creation?: string
        }
      }
      provinces: {
        Row: {
          id: number
          nom: string
          region_id: number
          code: string | null
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          region_id: number
          code?: string | null
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          region_id?: number
          code?: string | null
          date_creation?: string
        }
      }
      communes: {
        Row: {
          id: number
          nom: string
          province_id: number
          type_commune: string | null
          code: string | null
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          province_id: number
          type_commune?: string | null
          code?: string | null
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          province_id?: number
          type_commune?: string | null
          code?: string | null
          date_creation?: string
        }
      }
      ministeres: {
        Row: {
          id: number
          nom: string
          description: string | null
          categorie: string | null
          date_creation: string
          date_modification: string
        }
        Insert: {
          id?: number
          nom: string
          description?: string | null
          categorie?: string | null
          date_creation?: string
          date_modification?: string
        }
        Update: {
          id?: number
          nom?: string
          description?: string | null
          categorie?: string | null
          date_creation?: string
          date_modification?: string
        }
      }
      missions_ministere: {
        Row: {
          id: number
          description: string
          ministere_id: number
          date_creation: string
        }
        Insert: {
          id?: number
          description: string
          ministere_id: number
          date_creation?: string
        }
        Update: {
          id?: number
          description?: string
          ministere_id?: number
          date_creation?: string
        }
      }
      services_ministere: {
        Row: {
          id: number
          nom: string
          description: string | null
          ministere_id: number
          type: string
          route_type: string
          external_url: string | null
          slug: string
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          description?: string | null
          ministere_id: number
          type?: string
          route_type?: string
          external_url?: string | null
          slug: string
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          description?: string | null
          ministere_id?: number
          type?: string
          route_type?: string
          external_url?: string | null
          slug?: string
          date_creation?: string
        }
      }
      modeles_flux_travail: {
        Row: {
          id: number
          nom: string
          description: string | null
          service_id: number
          est_actif: boolean
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          description?: string | null
          service_id: number
          est_actif?: boolean
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          description?: string | null
          service_id?: number
          est_actif?: boolean
          date_creation?: string
        }
      }
      etapes_flux_travail: {
        Row: {
          id: number
          modele_id: number
          nom: string
          description: string | null
          ordre: number
          delai_execution: number | null
          est_obligatoire: boolean
          date_creation: string
        }
        Insert: {
          id?: number
          modele_id: number
          nom: string
          description?: string | null
          ordre: number
          delai_execution?: number | null
          est_obligatoire?: boolean
          date_creation?: string
        }
        Update: {
          id?: number
          modele_id?: number
          nom?: string
          description?: string | null
          ordre?: number
          delai_execution?: number | null
          est_obligatoire?: boolean
          date_creation?: string
        }
      }
      types_document: {
        Row: {
          id: number
          nom: string
          description: string | null
          date_creation: string
        }
        Insert: {
          id?: number
          nom: string
          description?: string | null
          date_creation?: string
        }
        Update: {
          id?: number
          nom?: string
          description?: string | null
          date_creation?: string
        }
      }
      documents_utilisateur: {
        Row: {
          id: number
          utilisateur_id: string
          type_document_id: number
          url_document: string
          est_verifie: boolean
          date_creation: string
        }
        Insert: {
          id?: number
          utilisateur_id: string
          type_document_id: number
          url_document: string
          est_verifie?: boolean
          date_creation?: string
        }
        Update: {
          id?: number
          utilisateur_id?: string
          type_document_id?: number
          url_document?: string
          est_verifie?: boolean
          date_creation?: string
        }
      }
      journaux_securite: {
        Row: {
          id: number
          utilisateur_id: string | null
          action: string
          description: string | null
          adresse_ip: string | null
          user_agent: string | null
          date_creation: string
        }
        Insert: {
          id?: number
          utilisateur_id?: string | null
          action: string
          description?: string | null
          adresse_ip?: string | null
          user_agent?: string | null
          date_creation?: string
        }
        Update: {
          id?: number
          utilisateur_id?: string | null
          action?: string
          description?: string | null
          adresse_ip?: string | null
          user_agent?: string | null
          date_creation?: string
        }
      }
      sessions_utilisateur: {
        Row: {
          id: string
          utilisateur_id: string
          token: string
          date_expiration: string
          est_active: boolean
          date_creation: string
        }
        Insert: {
          id?: string
          utilisateur_id: string
          token: string
          date_expiration: string
          est_active?: boolean
          date_creation?: string
        }
        Update: {
          id?: string
          utilisateur_id?: string
          token?: string
          date_expiration?: string
          est_active?: boolean
          date_creation?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 