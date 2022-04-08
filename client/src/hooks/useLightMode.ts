import { useEffect, useState } from 'react';

export const useLightMode = () => {
  const [theme, setTheme] = useState('dark');
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('light')
      : localTheme
      ? setTheme(localTheme)
      : setMode('dark');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
