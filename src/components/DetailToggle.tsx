import React, { useState } from 'react';

interface DetailToggleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  iconColor?: string;
}

export function DetailToggle({ title, children, className = "", iconColor = "text-blue-500" }: DetailToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-gray-200 rounded-lg ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 flex items-center justify-between"
      >
        <span className="font-medium text-gray-800 flex items-center">
          <span className={`mr-2 ${iconColor}`}>❓</span>
          {title}
        </span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} text-gray-500`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className="px-4 py-3 bg-white border-t border-gray-200 rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  );
}