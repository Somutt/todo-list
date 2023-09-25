import React from 'react';
import * as types from './types';
import { ActionsType } from './data';

export const addTask = (
  dispatch: React.Dispatch<ActionsType>,
  id: number,
  text: string,
  done: boolean,
) => {
  dispatch({ type: types.ADD_TASK, id: id, text: text, done: done });
};

export const clearTask = (
  dispatch: React.Dispatch<ActionsType>,
  id: number,
) => {
  dispatch({ type: types.CLEAR_TASK, id: id });
};

export const editTask = (
  dispatch: React.Dispatch<ActionsType>,
  id: number,
  text: string,
  done: boolean,
) => {
  dispatch({ type: types.EDIT_TASK, id: id, text: text, done: done });
};

export const clearCompletedTasks = (dispatch: React.Dispatch<ActionsType>) => {
  dispatch({ type: types.CLEAR_COMPLETED });
};
