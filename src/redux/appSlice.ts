import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticationToken: null,
};

export const appSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authenticationToken = action.payload;
      localStorage.setItem("token", action.payload);
      console.log(state), "redux";
    },
    removeAuthToken: (state) => {
      state.authenticationToken = null;
      localStorage.removeItem("token");

      console.log(state);
    },
  },
});

export const { setAuthToken, removeAuthToken } = appSlice.actions;

export default appSlice.reducer;
