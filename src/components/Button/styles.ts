import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const activateBg = () => css`
  background: blue;
`;

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, bg }) => css`
    display: flex;
    background: transparent;
    ${bg && activateBg()};
    color: ${theme.colors.white};
    border-width: 0.1rem;
    border-radius: 50%;
    border-color: ${theme.colors.white};
    align-items: center;
    justify-content: center;
    min-width: 3.2rem;
    min-height: 3.2rem;

    &:hover {
      cursor: pointer;
    }
  `}
`;
