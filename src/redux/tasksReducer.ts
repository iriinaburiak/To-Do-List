import { TaskActionTypes, ADD_TASK, DELETE_TASK } from './types';
import { Task } from './types'; // Імпортуємо тип Task з файлу types.ts

const initialState: Task[] = []; // Використовуємо Task замість task

const tasksReducer = (state = initialState, action: TaskActionTypes): Task[] => { // Також використовуємо Task замість task
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id); // Отримуємо доступ до id через task
    default:
      return state;
  }
};

export default tasksReducer;
