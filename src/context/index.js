import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: {
    dark: 'red-bg',
    light: 'gainsboro-bg',
  },
});

export const LocaleContext = createContext({
  locale: {
    local: '🇨🇳',
    foreign: '🇨🇳',
  },
});
