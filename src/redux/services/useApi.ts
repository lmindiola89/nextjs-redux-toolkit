import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const userApi = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => `users`,
    }),

    getUsersNyId: builder.query<User[], { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUsersNyIdQuery } = userApi;
