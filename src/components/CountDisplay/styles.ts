import styled, { css } from 'styled-components';

export const Wrapper = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 0.9rem;

    &:hover {
      cursor: alias;
    }
  `}
`;
