import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  ids: localStorage.getItem ('favouriteMeals')
    ? JSON.parse (localStorage.getItem ('favouriteMeals'))
    : [],
};
const favouriteSlice = createSlice ({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const mealId = action.payload;
      if (!state.ids.includes (mealId)) {
        state.ids.push (mealId);
        localStorage.setItem ('favouriteMeals', JSON.stringify (state.ids));
      }
    },
    removeFavourite: (state, action) => {
      const mealId = action.payload;
      state.ids = state.ids.filter (id => id !== mealId);
      localStorage.setItem ('favouriteMeals', JSON.stringify (state.ids));
    },
  },
});

export const {addFavourite, removeFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;
