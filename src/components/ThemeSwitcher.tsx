'use client';
import React, { useState, useEffect } from 'react';
import { LuSunMoon } from 'react-icons/lu';
import { LuMoonStar } from 'react-icons/lu';
import SquareButton from './SquareButton';

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
    <SquareButton aria-label='theme switcher button ' onClick={handleClick}>
      {isDarkMode ? <LuSunMoon /> : <LuMoonStar />}
    </SquareButton>
  );
};

export default ThemeSwitcher;
