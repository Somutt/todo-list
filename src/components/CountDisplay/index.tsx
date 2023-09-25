import * as Styled from './styles';
import { useContext } from 'react';
import { TasksContext } from '../../contexts/TasksContext';

export const CountDisplay = () => {
  const tasksContext = useContext(TasksContext);
  const { tasksState } = tasksContext;

  return <Styled.Wrapper>{tasksState.length} items left</Styled.Wrapper>;
};
