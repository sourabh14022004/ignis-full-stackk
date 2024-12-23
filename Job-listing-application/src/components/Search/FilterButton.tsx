import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FilterButtonProps {
  Icon: LucideIcon;
  label: string;
}

export function FilterButton({ Icon, label }: FilterButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
    >
      <Icon size={20} className="text-gray-400" />
      <span>{label}</span>
    </button>
  );
}