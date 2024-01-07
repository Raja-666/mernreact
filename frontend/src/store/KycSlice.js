// kycSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { api } from './baseurl';

export const kycSlice = createSlice({
  name: 'kyc',
  initialState: {
    kycList: [],
  },
  reducers: {
    setKycList: (state, action) => {
      state.kycList = action.payload;
    },
  },
});



export const { setKycList } = kycSlice.actions;

export const fetchKycList = () => async (dispatch) => {
  try {
    const response = await api.endpoints.getKycList({});
    dispatch(setKycList(response.data));
  } catch (error) {
    console.error('Error fetching KYC list:', error.message);
  }
};

export const updateKycStatus = (data) => async (dispatch) => {
  try {
    const response = await api.endpoints.getKycUpdate(data);
    console.log(response.data);
    // Optionally, you can dispatch an action or handle the response accordingly
  } catch (error) {
    console.error('Error updating KYC status:', error.message);
  }
};

export const selectKycList = (state) => state.kyc.kycList;

export default kycSlice.reducer;
