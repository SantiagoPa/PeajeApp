import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isOpenSidebar: boolean;
  isOpenModalPeaje: boolean;
}

const initialState: CounterState = {
  isOpenSidebar: true,
  isOpenModalPeaje: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toogleSidebar: (state /*action*/) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    setOpenModalPeaje: (state /*action*/) => {
      state.isOpenModalPeaje = true;
    },

    setCloseModalPeaje: (state /*action*/) => {
      state.isOpenModalPeaje = false;
    },

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.counter += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toogleSidebar, setCloseModalPeaje, setOpenModalPeaje } = uiSlice.actions;
