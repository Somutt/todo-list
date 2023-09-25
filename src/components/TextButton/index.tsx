import * as Styled from './styles';

export type TextButtonProps = {
  btnText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TextButton = ({ btnText = '', onClick }: TextButtonProps) => {
  return <Styled.Wrapper onClick={onClick}>{btnText}</Styled.Wrapper>;
};
