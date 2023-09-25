import * as Styled from './styles';
import { TextButton } from '../TextButton';

export type FilterButtonProps = {
  btnText?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const FilterButton = ({
  btnText = '',
  active = false,
  onClick,
}: FilterButtonProps) => {
  return (
    <Styled.Wrapper active={active}>
      <TextButton btnText={btnText} onClick={onClick} />
    </Styled.Wrapper>
  );
};
