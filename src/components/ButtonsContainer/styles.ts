import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    justify-content: space-evenly;
  `}
`;
