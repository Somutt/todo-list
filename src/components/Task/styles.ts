import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;

    > p,
    s {
      color: ${theme.colors.white};
      width: 100%;
    }

    > p,
    s &:hover {
      cursor: alias;
    }

    > input {
      background: ${theme.colors.white};
      width: 100%;
      border: none;
    }
  `}
`;
