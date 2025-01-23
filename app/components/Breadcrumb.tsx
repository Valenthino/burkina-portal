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
  // For very small screens, only show the last 2 items
  const displayItems = items.length > 2 
    ? [
        { label: 'Accueil', href: '/' },
        ...items.slice(-2)
      ]
    : items;

  return (
    <nav className="flex flex-wrap mb-4 sm:mb-8 text-gray-600 text-xs sm:text-sm px-4 sm:px-0">
      {displayItems.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === displayItems.length - 1;
        const showEllipsis = isFirst && items.length > 2 && displayItems.length < items.length;

        return (
          <div key={index} className="flex items-center py-1">
            {index > 0 && (
              <span className="mx-1 sm:mx-2 text-gray-400" aria-hidden="true">
                ›
              </span>
            )}
            <Link 
              href={item.href}
              className={`
                hover:text-primary transition-colors
                ${isLast ? 'text-gray-900 font-medium' : 'text-gray-600 hover:underline'}
                ${showEllipsis ? 'after:content-["/..."] after:mx-1 sm:after:mx-2 after:text-gray-400' : ''}
              `}
            >
              {item.label}
            </Link>
          </div>
        );
      })}
    </nav>
  );
} 