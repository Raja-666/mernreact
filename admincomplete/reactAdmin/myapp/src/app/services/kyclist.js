import { api } from './api'
const token = localStorage.getItem('token')

const userKycApi = api.injectEndpoints({
  endpoints: (builder) => ({
    
      getKycList: builder.mutation({
      query: (body) => ({
        url: '/admin/kyc/list',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Admin-Kyc'],
    }),

    getKycUpdate: builder.mutation({
      query: (body) => ({
        url: '/admin/kyc/update',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Admin-Kyc'],
    }),
    
  }),
})

export const { useGetKycListMutation, useGetKycUpdateMutation} = userKycApi
