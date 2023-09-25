export type TasksType = {
  id: number;
  text: string;
  done: boolean;
};

export type ActionsType = {
  type: string;
  id?: number;
  text?: string;
  done?: boolean;
};

export const data: TasksType[] = [];
