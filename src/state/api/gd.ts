import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gdApi:any = createApi({
  reducerPath: "gdApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_BACKEND_URL}/api/gd/`,
  }),
  endpoints: (builder) => ({
    createPost: builder.mutation<any, any>({
      query: ({ userData, access_token }) => {
        const formData = new FormData();
        for (const key in userData) {
          const value = userData[key];
          if (value instanceof File) {
            formData.append(key, value, value.name);
          } else if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else if (value instanceof Date) {
            formData.append(key, value.toISOString().slice(0, 10));
          } else if (value !== null && value !== undefined) {
            formData.append(key, value.toString());
          }
        }

        return {
          url: "posts/",
          method: "POST",
          body: formData,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    updatePost: builder.mutation<any, any>({
      query: ({ userData, access_token, id }) => {
        const formData = new FormData();
        for (const key in userData) {
          const value = userData[key];
          if (value instanceof File) {
            formData.append(key, value, value.name);
          } else if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else if (value instanceof Date) {
            formData.append(key, value.toISOString().slice(0, 10));
          } else if (value !== null && value !== undefined) {
            formData.append(key, value.toString());
          }
        }

        return {
          url: `posts/${id}/`,
          method: "PUT",
          body: formData,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    createDonationSession: builder.mutation<any, any>({
      query: ({userData, id, access_token}) => ({
        url: `create-donation/${id}/`,
        method: "POST",
        body: userData,
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    getPosts: builder.query<any, any>({
      query: (params) => ({
        url: `posts/${params}`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getCompletedPosts: builder.query<any, any>({
      query: (params) => ({
        url: `completed-posts/${params}`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getCompletedPost: builder.query<any, any>({
      query: (id) => ({
        url: `single-post/${id}/`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getPost: builder.query<any, any>({
      query: (id) => ({
        url: `posts/${id}/`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getDonorsComments: builder.query<any, any>({
      query: (id) => ({
        url: `donors-comments/${id}/`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getPostCountries: builder.query<any, any>({
      query: () => ({
        url: "post-countries/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getOrderDetails: builder.query<any, any>({
      query: ({access_token, id}) => ({
        url: `orders/${id}/`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    getUserPosts: builder.query<any, any>({
      query: ({access_token}) => ({
        url: "user-posts/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    getPostDetails: builder.query<any, any>({
      query: ({access_token, id}) => ({
        url: `user-posts/${id}/`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    getDonations: builder.query<any, any>({
      query: ({access_token}) => ({
        url: "donations/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    getTips: builder.query<any, any>({
      query: ({access_token}) => ({
        url: "tips/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    createDonationsWithdrawalRequest: builder.mutation<any, any>({
      query: ({userData, access_token}) => ({
        url: "donations-withdrawal/create/",
        method: "POST",
        body: userData,
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    createTipsWithdrawalRequest: builder.mutation<any, any>({
      query: ({userData, access_token}) => ({
        url: "tips-withdrawal/create/",
        method: "POST",
        body: userData,
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
  }),
});

export const { useCreatePostMutation,useCreateDonationsWithdrawalRequestMutation, useCreateTipsWithdrawalRequestMutation, useGetOrderDetailsQuery, useUpdatePostMutation, useCreateDonationSessionMutation, useGetDonationsQuery, useGetTipsQuery, useGetPostsQuery, useGetPostCountriesQuery, useGetPostQuery, useGetUserPostsQuery, useGetCompletedPostsQuery, useGetDonorsCommentsQuery, useGetCompletedPostQuery, useGetPostDetailsQuery} = gdApi;
