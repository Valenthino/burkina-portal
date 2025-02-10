import { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  RiUser3Line, 
  RiBuilding2Line, 
  RiGlobalLine, 
  RiGovernmentLine,
  RiStarLine,
} from '@remixicon/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type ServiceCategory = 'plusDemandes' | 'citoyens' | 'entreprises' | 'administration' | 'international';

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  badge?: string;
};

type ServiceCategoriesProps = {
  serviceCategories: Record<ServiceCategory, Service[]>;
  activeTab: ServiceCategory;
  setActiveTab: (tab: ServiceCategory) => void;
};

export default function ServiceCategories({ 
  serviceCategories, 
  activeTab, 
  setActiveTab 
}: ServiceCategoriesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white shadow-md relative">
      <div className="container mx-auto relative">
        {/* Left scroll button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Right scroll button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <button
            onClick={() => setActiveTab('plusDemandes')}
            className={`flex items-center whitespace-nowrap px-6 py-4 text-lg font-medium ${
              activeTab === 'plusDemandes'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <RiStarLine className="mr-2 w-5 h-5" />
            Services les plus demandés
          </button>
          <button
            onClick={() => setActiveTab('citoyens')}
            className={`flex items-center whitespace-nowrap px-6 py-4 text-lg font-medium ${
              activeTab === 'citoyens'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <RiUser3Line className="mr-2 w-5 h-5" />
            Pour le citoyen
          </button>
          <button
            onClick={() => setActiveTab('entreprises')}
            className={`flex items-center whitespace-nowrap px-6 py-4 text-lg font-medium ${
              activeTab === 'entreprises'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <RiBuilding2Line className="mr-2 w-5 h-5" />
            Pour l'entrepreneur
          </button>
          <button
            onClick={() => setActiveTab('administration')}
            className={`flex items-center whitespace-nowrap px-6 py-4 text-lg font-medium ${
              activeTab === 'administration'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <RiGovernmentLine className="mr-2 w-5 h-5" />
            Administration
          </button>
          <button
            onClick={() => setActiveTab('international')}
            className={`flex items-center whitespace-nowrap px-6 py-4 text-lg font-medium ${
              activeTab === 'international'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <RiGlobalLine className="mr-2 w-5 h-5" />
            International
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCategories[activeTab].slice(0, 15).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                href={service.url}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start space-x-4">
                  <IconComponent className="w-8 h-8 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary mb-2">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
} 