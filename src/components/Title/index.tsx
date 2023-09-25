import * as Styled from './styles';

export type TitleProps = {
  title?: string;
};

export const Title = ({ title = '' }: TitleProps) => {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
};
