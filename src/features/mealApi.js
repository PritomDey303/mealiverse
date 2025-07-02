import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const mealApi = createApi ({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery ({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: builder => ({
    // Search meals by name
    searchMeals: builder.query ({
      query: searchTerm => `search.php?s=${searchTerm}`,
    }),
    // Get meal by ID
    getMealById: builder.query ({
      query: id => `lookup.php?i=${id}`,
    }),
    // Get random meal
    getRandomMeal: builder.query ({
      query: () => 'random.php',
    }),
    //get categories
    getCategories: builder.query ({
      query: () => 'categories.php',
    }),
    //get featured meals
    getFeaturedMeals: builder.query ({
      query: () => 'filter.php?c=Seafood',
    }),
    //get meals by category
    getMealsByCategory: builder.query ({
      query: category => `filter.php?c=${category}`,
    }),
    //get filtered meals by main ingredients
    getFilteredMeals: builder.query ({
      query: ingredient => `filter.php?i=${ingredient}`,
    }),
    //get ingredients list
    getIngredientsList: builder.query ({
      query: () => 'list.php?i=list',
    }),
  }),
});

export const {
  useSearchMealsQuery,
  useLazySearchMealsQuery,
  useGetMealByIdQuery,
  useLazyGetRandomMealQuery,
  useGetCategoriesQuery,

  useGetFeaturedMealsQuery,
  useGetMealsByCategoryQuery,
  useLazyGetMealsByCategoryQuery,
  useGetFilteredMealsQuery,
  useLazyGetFilteredMealsQuery,
  useGetIngredientsListQuery,
} = mealApi;
