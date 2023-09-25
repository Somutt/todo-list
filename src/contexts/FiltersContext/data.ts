export type FiltersType = {
  name: string;
  active: boolean;
};

export type FilterActionsType = {
  type: string;
  name: string;
};

export const data: FiltersType[] = [
  { name: 'All', active: true },
  { name: 'Active', active: false },
  { name: 'Completed', active: false },
];
