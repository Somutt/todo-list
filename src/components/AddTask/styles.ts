import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;

    > input {
      background: transparent;
      color: #ffffff;
      border-style: none;
      width: 100%;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
