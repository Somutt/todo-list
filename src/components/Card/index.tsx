import * as Styled from './styles';

export type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
