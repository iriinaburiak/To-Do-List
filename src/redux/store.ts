// store.ts
import { combineReducers, createStore } from 'redux';
import tasksReducer from './tasksReducer';
import deletedTasksReducer from './deletedTasksReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  deletedTasks: deletedTasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
