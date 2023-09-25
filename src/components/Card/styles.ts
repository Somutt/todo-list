import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    background-color: #25273c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem;
    gap: 2rem;
    width: 600px;
  `}
`;
