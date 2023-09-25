import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
      color: blue;
    }
  `}
`;
