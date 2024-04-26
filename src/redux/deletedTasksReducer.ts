import { TaskActionTypes, DELETE_TASK, RESTORE_TASK } from './types';
import { Task } from './types'; // Імпортуємо тип Task з файлу types.ts

const initialState: Task[] = [];

const deletedTasksReducer = (state = initialState, action: TaskActionTypes): Task[] => {
  switch (action.type) {
    case DELETE_TASK:
      return [...state, action.payload];
    case RESTORE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
};

export default deletedTasksReducer;
