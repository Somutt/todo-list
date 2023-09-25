import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    width: 100vw;
    height: 100vh;
    background: #181622;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Box = styled.div`
  ${() => css`
    width: fit-content;
    height: fit-content;
  `}
`;
