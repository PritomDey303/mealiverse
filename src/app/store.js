import {configureStore} from '@reduxjs/toolkit';
import {mealApi} from '../features/mealApi';
import favouriteReducer from '../features/favouriteSlice';
export const store = configureStore ({
  reducer: {
    favourites: favouriteReducer,

    [mealApi.reducerPath]: mealApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ().concat (mealApi.middleware),
});
