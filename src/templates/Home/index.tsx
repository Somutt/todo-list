import * as Styled from './styles';
import { Title } from '../../components/Title';
import { AddTask } from '../../components/AddTask';
import { TasksContainer } from '../../components/TasksContainer';
import { ButtonsContainer } from '../../components/ButtonsContainer';

export const Home = () => {
  return (
    <Styled.Wrapper>
      <Styled.Box>
        <Title title='TODO'></Title>
        <AddTask />
        <TasksContainer />
        <ButtonsContainer />
      </Styled.Box>
    </Styled.Wrapper>
  );
};
