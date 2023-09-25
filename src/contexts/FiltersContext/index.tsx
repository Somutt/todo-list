import { createContext, useReducer } from 'react';
import { data, FilterActionsType, FiltersType } from './data';
import { reducer } from './reducer';

type FiltersProviderProps = {
  children: React.ReactNode;
};

export const FiltersContext = createContext<{
  filtersState: FiltersType[];
  filtersDispatch: React.Dispatch<FilterActionsType>;
}>({
  filtersState: data,
  filtersDispatch: () => null,
});

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [filtersState, filtersDispatch] = useReducer(reducer, data);

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};
