import { useContext, useEffect } from 'react';
import { TasksContext } from '../../contexts/TasksContext';
import { FiltersContext } from '../../contexts/FiltersContext';
import { Task } from '../Task';

export const TasksContainer = () => {
  const tasksContext = useContext(TasksContext);
  const { tasksState } = tasksContext;
  const filterContext = useContext(FiltersContext);
  const { filtersState } = filterContext;

  useEffect(() => {
    JSON.parse(localStorage.getItem('tasks') || '[]');

    localStorage.setItem('tasks', JSON.stringify(tasksState));
  }, [tasksState]);

  const filterRenderSelect = () => {
    const selectedFilter = filtersState.filter(
      (filter) => filter.active === true,
    );
    let filteredTasks = tasksState;
    if (selectedFilter[0].name === 'Active') {
      filteredTasks = tasksState.filter((task) => task.done !== true);
    } else if (selectedFilter[0].name === 'Completed') {
      filteredTasks = tasksState.filter((task) => task.done === true);
    }
    return filteredTasks.map((task) => (
      <Task key={task.id} text={task.text} id={task.id} done={task.done} />
    ));
  };

  return <>{filterRenderSelect()}</>;
};
