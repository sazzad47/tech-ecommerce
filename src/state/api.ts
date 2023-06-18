import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RefreshTokenRequest = {
  refresh: string;
};

type RegisterUserRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
};

type LoginRequest = {
  email: string;
  password: string;
};

type ChangePasswordRequest = {
  userData: {};
  access_token: any;
};

type ResetPasswordRequest = {
  userData: {};
  id: string | undefined;
  token: string | undefined;
};

type SendResetPasswordRequest = {
  email: string;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/api/user/auth/",
  }),
  endpoints: (builder) => ({
    refreshToken: builder.mutation<any, RefreshTokenRequest>({
      query: (data) => ({
        url: "token/refresh/",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    registerUser: builder.mutation<any, RegisterUserRequest>({
      query: (data) => ({
        url: "register/",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    activateAccount: builder.mutation({
      query: (data) => ({
        url: `verify-email/${data.otp}/`,
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    login: builder.mutation<any, LoginRequest>({
      query: (data) => ({
        url: "login/",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    changePassword: builder.mutation<any, ChangePasswordRequest>({
      query: ({ userData, access_token }) => ({
        url: "changepassword/",
        method: "POST",
        body: userData,
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    resetPassword: builder.mutation<any, ResetPasswordRequest>({
      query: ({ userData, token, id }) => ({
        url: `reset-password/${id}/${token}/`,
        method: "POST",
        body: userData,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    sendPasswordResetEmail: builder.mutation<any, SendResetPasswordRequest>({
      query: (data) => ({
        url: "send-reset-password-email/",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    createBillingAddress: builder.mutation<any, any>({
      query: ({userData, access_token}) => ({
        url: "billing-address/",
        method: "POST",
        body: userData,
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    updateBillingAddress: builder.mutation<any, any>({
      query: ({userData, access_token}) => ({
        url: "billing-address/update/",
        method: "PUT",
        body: userData,
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    getBillingAddress: builder.query<any, any>({
      query: ({access_token}) => ({
        url: "billing-address/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    updateProfile: builder.mutation<any, any>({
      query: ({ userData, access_token }) => {
        const formData = new FormData();
        for (const key in userData) {
          formData.append(key, userData[key]);
        }
        return {
          url: "profile/update/",
          method: "PUT",
          body: formData,
          headers: {
            authorization: `Bearer ${access_token}`,
            
          },
        };
      },
    }),
    
    getProfile: builder.query<any, any>({
      query: ({access_token}) => ({
        url: "profile/detail/",
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${access_token}`,
        },
      }),
    }),
  }),
});

export const {
  useRefreshTokenMutation,
  useRegisterUserMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useResetPasswordMutation,
  useSendPasswordResetEmailMutation,
  useActivateAccountMutation,
  useGetBillingAddressQuery,
  useCreateBillingAddressMutation,
  useUpdateBillingAddressMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,

} = userApi;
