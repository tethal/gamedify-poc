'use client';
import React, { useState, useEffect } from 'react';
import { LuSunMoon } from 'react-icons/lu';
import { LuMoonStar } from 'react-icons/lu';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState('dark');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      window.document.documentElement.classList.add('dark');
    }
  }, []);

  const handleClick = () => {
    if (isDarkMode === 'light') {
      window.document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
      window.document.documentElement.classList.add('dark');
    }
    setIsDarkMode(isDarkMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      aria-label='theme switcher button '
      onClick={handleClick}
      className='px-4 py-2 rounded-md bg-gray-800 text-white hover:text-cyan-500 hover:shadow-[0px_0px_10px_2px_#06B6D4]'
    >
      {isDarkMode ? <LuSunMoon /> : <LuMoonStar />}
    </button>
  );
};

export default ThemeSwitcher;
