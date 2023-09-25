import * as types from './types';
import { TasksType, ActionsType } from './data';

export const reducer = (state: TasksType[], action: ActionsType) => {
  switch (action.type) {
    case types.ADD_TASK: {
      return [
        ...state,
        { id: action.id, text: action.text, done: action.done },
      ];
    }
    case types.CLEAR_TASK: {
      return state.filter((t) => t.id !== action.id);
    }
    case types.EDIT_TASK: {
      return state.map((t) => {
        if (t.id === action.id) {
          return { id: action.id, text: action.text, done: action.done };
        } else {
          return t;
        }
      });
    }
    case types.CLEAR_COMPLETED: {
      return state.filter((t) => t.done !== true);
    }
  }
};
