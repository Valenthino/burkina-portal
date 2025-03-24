/**
 * Configuration des services d'authentification
 * Ce fichier centralise les configurations des différents services qui nécessitent une authentification
 */

export interface ServiceConfig {
  title: string;
  description: string;
  defaultRedirect: string;
  requiresNewLogin: boolean;
}

export const serviceConfig: Record<string, ServiceConfig> = {
  cnib: {
    title: "Carte Nationale d'Identité Burkinabè",
    description: "Connectez-vous pour gérer vos demandes de CNIB",
    defaultRedirect: "/services/citoyens/cnib/dashboard",
    requiresNewLogin: true
  },
  passeport: {
    title: "Passeport Burkinabè",
    description: "Connectez-vous pour gérer vos demandes de passeport",
    defaultRedirect: "/services/citoyens/passeport/tableau-de-bord",
    requiresNewLogin: true
  },
  admin: {
    title: "Administration",
    description: "Accès réservé aux administrateurs",
    defaultRedirect: "/admin",
    requiresNewLogin: true
  },
  default: {
    title: "Portail du Burkina Faso",
    description: "Accédez à votre espace personnel",
    defaultRedirect: "/dashboard",
    requiresNewLogin: false
  }
};

/**
 * Obtient la configuration d'un service
 * @param service Identifiant du service
 * @returns Configuration du service ou configuration par défaut
 */
export function getServiceConfig(service: string | null): ServiceConfig {
  if (!service) return serviceConfig.default;
  return serviceConfig[service as keyof typeof serviceConfig] || serviceConfig.default;
}

/**
 * Obtient l'URL de redirection pour un service
 * @param service Identifiant du service
 * @param requestedRedirect URL de redirection demandée
 * @returns URL de redirection
 */
export function getRedirectUrl(service: string | null, requestedRedirect: string | null): string {
  const config = getServiceConfig(service);
  return requestedRedirect || config.defaultRedirect;
}