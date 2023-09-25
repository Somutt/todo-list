import * as Styled from './styles';
import { useContext, useRef, useState } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { Card } from '../Card';
import { Button } from '../Button';
import { addTask } from '../../contexts/TasksContext/actions';

export const AddTask = () => {
  const tasksContext = useContext(TasksContext);
  const { tasksDispatch } = tasksContext;
  const [text, setText] = useState('');
  const nextId = useRef(0);

  return (
    <Card>
      <Button
        btnText='+'
        onClick={() => {
          addTask(tasksDispatch, nextId.current++, text, false);
          setText('');
        }}
      ></Button>
      <Styled.InputContainer>
        <input
          type='text'
          placeholder='Create new task'
          maxLength={35}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Styled.InputContainer>
    </Card>
  );
};
