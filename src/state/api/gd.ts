import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gdApi = createApi({
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
    getOrders: builder.query<any, any>({
      query: ({access_token}) => ({
        url: "orders/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
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
    getTransactions: builder.query<any, any>({
      query: ({access_token}) => ({
        url: "transactions/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
  }),
});

export const { useCreatePostMutation, useGetOrdersQuery, useGetOrderDetailsQuery, useUpdatePostMutation, useCreateDonationSessionMutation, useGetTransactionsQuery, useGetPostsQuery, useGetPostCountriesQuery, useGetPostQuery, useGetDonorsCommentsQuery} = gdApi;
