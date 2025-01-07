'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-8 text-gray-600 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2">›</span>}
          <Link 
            href={item.href}
            className={`hover:text-primary ${index === items.length - 1 ? 'text-gray-900 font-medium' : 'underline'}`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
} 