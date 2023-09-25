import * as Styled from './styles';
import { useContext } from 'react';
import { FiltersType } from '../../contexts/FiltersContext/data';
import { TasksContext } from '../../contexts/TasksContext';
import { FiltersContext } from '../../contexts/FiltersContext';
import { Card } from '../Card';
import { CountDisplay } from '../CountDisplay';
import { TextButton } from '../TextButton';
import { FilterButton } from '../FilterButton';
import { clearCompletedTasks } from '../../contexts/TasksContext/actions';
import {
  filterActive,
  filterAll,
  filterCompleted,
} from '../../contexts/FiltersContext/actions';

export const ButtonsContainer = () => {
  const tasksContext = useContext(TasksContext);
  const { tasksDispatch } = tasksContext;
  const filtersContext = useContext(FiltersContext);
  const { filtersState, filtersDispatch } = filtersContext;

  const filterDispatchSelect = (filter: FiltersType) => {
    if (filter.name === 'All') {
      return filterAll(filtersDispatch, filter.name);
    } else if (filter.name === 'Active') {
      return filterActive(filtersDispatch, filter.name);
    } else {
      return filterCompleted(filtersDispatch, filter.name);
    }
  };

  return (
    <Card>
      <CountDisplay />
      <Styled.Wrapper>
        {filtersState.map((filter) => (
          <FilterButton
            key={filter.name}
            btnText={filter.name}
            active={filter.active}
            onClick={() => filterDispatchSelect(filter)}
          />
        ))}
      </Styled.Wrapper>
      <TextButton
        btnText='Clear Completed'
        onClick={() => clearCompletedTasks(tasksDispatch)}
      />
    </Card>
  );
};
