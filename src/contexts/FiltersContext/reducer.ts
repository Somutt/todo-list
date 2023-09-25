import * as types from './types';
import { FiltersType, FilterActionsType } from './data';

export const reducer = (state: FiltersType[], action: FilterActionsType) => {
  switch (action.type) {
    case types.FILTER_ALL: {
      return state.map((f) => {
        if (f.name === action.name) {
          return { name: action.name, active: true };
        } else {
          return { ...f, active: false };
        }
      });
    }
    case types.FILTER_ACTIVE: {
      return state.map((f) => {
        if (f.name === action.name) {
          return { name: action.name, active: true };
        } else {
          return { ...f, active: false };
        }
      });
    }
    case types.FILTER_COMPLETED: {
      return state.map((f) => {
        if (f.name === action.name) {
          return { name: action.name, active: true };
        } else {
          return { ...f, active: false };
        }
      });
    }
  }
};
