import React, { createContext, useReducer } from 'react';
import { data, TasksType, ActionsType } from './data';
import { reducer } from './reducer';

type TasksProviderProps = {
  children: React.ReactNode;
};

export const TasksContext = createContext<{
  tasksState: TasksType[];
  tasksDispatch: React.Dispatch<ActionsType>;
}>({
  tasksState: data,
  tasksDispatch: () => null,
});

export const TasksProvider = ({ children }: TasksProviderProps) => {
  const [tasksState, tasksDispatch] = useReducer(reducer, data);

  console.log(JSON.stringify(tasksState));

  return (
    <TasksContext.Provider value={{ tasksState, tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
