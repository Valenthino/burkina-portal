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
    <section className="py-8 bg-background-light">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-foreground-dark mb-6">
          Services les plus demandés - {category}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-foreground-dark group-hover:text-primary mb-2">
                {link.title}
              </h3>
              <p className="text-foreground-light text-sm">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 