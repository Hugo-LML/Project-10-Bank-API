import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  body: {
    token: string;
  }
}

interface SignupRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}/user` }),
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
      })
    }),
    signup: build.mutation<unknown, SignupRequest>({
      query: body => ({
        url: '/signup',
        method: 'POST',
        body,
      })
    }),
  }),
})

export const { useLoginMutation, useSignupMutation } = authApi;