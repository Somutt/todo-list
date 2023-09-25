import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.3rem;
    gap: 2rem;
    width: 600px;

    > h1 {
      letter-spacing: 1.3rem;
      color: ${theme.colors.white};
    }
  `}
`;
