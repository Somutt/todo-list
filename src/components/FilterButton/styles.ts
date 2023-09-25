import styled, { css } from 'styled-components';
import { FilterButtonProps } from '.';

const activeButton = () => css`
  color: blue;
`;

export const Wrapper = styled.div<FilterButtonProps>`
  ${({ active }) => css`
    > button {
      ${active && activeButton()};
    }
  `}
`;
