import * as Styled from './styles';
import { useContext, useState } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { Card } from '../Card';
import { Button } from '../Button';
import { TextButton } from '../TextButton';
import { clearTask, editTask } from '../../contexts/TasksContext/actions';

type TaskProps = {
  text?: string;
  id: number;
  done?: boolean;
};

export const Task = ({ text = '', id, done = false }: TaskProps) => {
  const tasksContext = useContext(TasksContext);
  const { tasksDispatch } = tasksContext;
  const [checked, setChecked] = useState(done);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Card>
      <Button
        bg={checked}
        onClick={() => {
          editTask(tasksDispatch, id, text, !checked);
          setChecked(!checked);
        }}
      />
      {isEditing ? (
        <>
          <Styled.Wrapper>
            <input
              maxLength={35}
              value={text}
              onChange={(e) =>
                editTask(tasksDispatch, id, e.target.value, checked)
              }
            />
          </Styled.Wrapper>
          <TextButton btnText='Save' onClick={() => setIsEditing(!isEditing)} />
        </>
      ) : (
        <>
          <Styled.Wrapper>
            {checked ? <s>{text}</s> : <p>{text}</p>}
          </Styled.Wrapper>
          <TextButton btnText='Edit' onClick={() => setIsEditing(!isEditing)} />
        </>
      )}
      <TextButton
        btnText='Clear'
        onClick={() => clearTask(tasksDispatch, id)}
      />
    </Card>
  );
};
