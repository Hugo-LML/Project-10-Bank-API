import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GetUserResponse {
  body: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

interface UpdateUserRequest {
  firstName: string;
  lastName: string;
}

interface UpdateUserResponse {
  body: {
    id: string;
    email: string;
  };
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/user`,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: build => ({
    getUser: build.query<GetUserResponse, void>({
      query: () => ({
        url: '/profile',
        method: 'POST',
      }),
      providesTags: ['User'],
    }),
    updateUser: build.mutation<UpdateUserResponse, UpdateUserRequest>({
      query: body => ({
        url: '/profile',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = usersApi;
