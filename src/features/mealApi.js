import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const mealApi = createApi ({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery ({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: builder => ({
    // Example: search meals by name
    searchMeals: builder.query ({
      query: searchTerm => `search.php?s=${searchTerm}`,
    }),
    // Example: get meal by ID
    getMealById: builder.query ({
      query: id => `lookup.php?i=${id}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {useSearchMealsQuery, useGetMealByIdQuery} = mealApi;
