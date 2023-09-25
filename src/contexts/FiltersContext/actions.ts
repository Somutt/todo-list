import React from 'react';
import * as types from './types';
import { FilterActionsType } from './data';

export const filterAll = (
  dispatch: React.Dispatch<FilterActionsType>,
  name: string,
) => {
  dispatch({ type: types.FILTER_ALL, name: name });
};

export const filterActive = (
  dispatch: React.Dispatch<FilterActionsType>,
  name: string,
) => {
  dispatch({ type: types.FILTER_ACTIVE, name: name });
};

export const filterCompleted = (
  dispatch: React.Dispatch<FilterActionsType>,
  name: string,
) => {
  dispatch({ type: types.FILTER_COMPLETED, name: name });
};
