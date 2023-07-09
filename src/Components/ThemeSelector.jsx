import React, { useState } from 'react';


const ThemeSelector = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
<>
    <div className="flex items-center justify-end p-4 dark:bg-slate-900">
    <div className="dark:bg-dark-primary dark:text-dark-secondary">
    </div>

      <button onClick={toggleTheme} className="text-gray-500 dark:bg-black">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

      
    </div>


</>

  );
};

export default ThemeSelector;

