import { createGlobalStyle } from 'styled-components';

interface ThemeType {
  body: string;
  text: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    height: 100vh;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: 2;
    font-family: 'Poppins', sans-serif;
    color: #FFF;
    height: inherit;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  a {
    line-height: 0;
  }

  h3 {
    margin: 0;
  }
`;

export const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',

  colors: {
    primary: '#E2E2E2',
    secondary: '#000',
    tertiary: '#13131c',
    quaternary: 'rgb(100, 107, 128)',
    blue: '#1b6ad2',
  },
  borders: {
    primary: 'rgb(34, 37, 49)',
  },
};

const darkTheme = {
  body: '#1a1a25',
  colors: {
    primary: '#13131c',
    secondary: '#000',
    tertiary: '#13131c',
    quaternary: 'rgb(100, 107, 128)',
    blue: '#1b6ad2',
  },
  borders: {
    primary: 'rgb(34, 37, 49)',
  },
};

export { GlobalStyle, darkTheme };
