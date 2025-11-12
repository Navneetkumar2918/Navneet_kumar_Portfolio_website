import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="group relative p-2 sm:p-2.5 md:p-3 lg:p-3.5 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 overflow-hidden">
        {/* Sun Icon */}
        <Sun 
          className={`absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-yellow-500 transform transition-all duration-500 ${
            isDarkMode ? 'translate-y-8 rotate-180 opacity-0' : 'translate-y-0 rotate-0 opacity-100'
          }`} 
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-blue-500 transform transition-all duration-500 ${
            isDarkMode ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-8 -rotate-180 opacity-0'
          }`} 
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 px-2 sm:px-3 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-200 rotate-45"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;