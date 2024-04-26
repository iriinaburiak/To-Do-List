// types.ts
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RESTORE_TASK = 'RESTORE_TASK';

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: Task;
}

interface RestoreTaskAction {
  type: typeof RESTORE_TASK;
  payload: Task;
}

export type TaskActionTypes = AddTaskAction | DeleteTaskAction | RestoreTaskAction;

export interface Task {
  id: number;
  text: string;
}
