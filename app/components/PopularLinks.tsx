'use client';

import Link from 'next/link';

interface PopularLink {
  title: string;
  url: string;
  description: string;
}

interface PopularLinksProps {
  category: string;
  links: PopularLink[];
}

export default function PopularLinks({ category, links }: PopularLinksProps) {
  return (
    <section className="py-6 sm:py-8 bg-background-light">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground-dark mb-4 sm:mb-6">
          Services les plus demandés - {category}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group border border-transparent hover:border-primary/10"
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground-dark group-hover:text-primary transition-colors duration-200 mb-2">
                {link.title}
              </h3>
              <p className="text-foreground-light text-xs sm:text-sm leading-relaxed">
                {link.description}
              </p>
              <div className="mt-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">
                En savoir plus →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 