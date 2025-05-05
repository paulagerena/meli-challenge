import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';

const rootReducer = combineReducers({
  search: searchReducer
  // Add other reducers here for extra features
});

export const setupStore = (): Store =>
  configureStore({
    reducer: rootReducer
  });

export const store: Store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
