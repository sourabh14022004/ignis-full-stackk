import React, { useState } from 'react';
import { Search, MapPin, Building2, DollarSign } from 'lucide-react';
import { FilterButton } from './FilterButton';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by job title"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <FilterButton Icon={MapPin} label="Location" />
          <FilterButton Icon={Building2} label="Company" />
          <FilterButton Icon={DollarSign} label="Salary" />
        </div>
      </form>
    </div>
  );
}