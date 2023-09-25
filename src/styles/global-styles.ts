import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-family: ${({ theme }) => theme.font.family.primary};
}

h1 {
  font-size: ${({ theme }) => theme.font.sizes.large};
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

input:focus {
  outline: 0;
}
`;
