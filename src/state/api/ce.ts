import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ceApi = createApi({
  reducerPath: "ceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_BACKEND_URL}/api/ce/`,
  }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, any>({
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
          url: "orders/create/",
          method: "POST",
          body: formData,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    updateOrder: builder.mutation<any, any>({
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
          url: `orders/edit/${id}/`,
          method: "PUT",
          body: formData,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    createPaymentSession: builder.mutation<any, any>({
      query: ({id}) => ({
        url: `create-payment/${id}/`,
        method: "POST",
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

export const { useCreateOrderMutation, useGetOrdersQuery, useGetOrderDetailsQuery, useUpdateOrderMutation, useCreatePaymentSessionMutation, useGetTransactionsQuery } = ceApi;
