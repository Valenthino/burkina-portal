interface Service {
  category: string;
  slug: string;
  parent_slug: string | null;
  canonical_url?: string;
}

export function formatServiceUrl(service: Service): string {
  if (service.canonical_url) {
    return service.canonical_url;
  }

  const parts = [service.category];
  
  if (service.parent_slug) {
    parts.push(service.parent_slug);
  }
  
  parts.push(service.slug);
  
  return '/' + parts.join('/');
} 