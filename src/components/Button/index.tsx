import * as Styled from './styles';

export type ButtonProps = {
  btnText?: string;
  bg?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ btnText = '', bg = false, onClick }: ButtonProps) => {
  return (
    <Styled.Wrapper bg={bg} onClick={onClick}>
      {btnText}
    </Styled.Wrapper>
  );
};
