import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPeaje {
    typeVehicle: string;
    price: number;
    typeCategory: string;
    labelCategory: string;
    id: string;
    placa: string;
    turno: string;
}

export interface IPeajeState {
  isLoading: boolean;
  peajes: IPeaje[];
  eventPeaje: IPeaje | null
}

const initialState: IPeajeState = {
  isLoading: false,
  peajes: [],
  eventPeaje: null
}

export const peajeSlice = createSlice({
  name: 'peaje',
  initialState,
  reducers: {    
    setInitAction: (state /*action*/) => {
        state.isLoading = true;
      },
      addPeaje: (state, action: PayloadAction<IPeaje>) => {
        state.peajes = [...state.peajes, action.payload];
        state.isLoading = false;
      },
      setPeaje: (state, action: PayloadAction<IPeaje>) => {
        state.eventPeaje = action.payload;
      },
      updatePeaje: (state, action: PayloadAction<IPeaje>) => {
        state.peajes = state.peajes.map((peaje) =>
        peaje.id === action.payload.id ? action.payload : peaje
        );
        state.isLoading = false;
      },
      deletePeaje: (state, action: PayloadAction<IPeaje>) => {
        state.peajes = state.peajes.filter((peaje) => peaje.id !== action.payload.id);
        state.isLoading = false;
      },
  },
})

// Action creators are generated for each case reducer function
export const { addPeaje, deletePeaje, setInitAction, setPeaje, updatePeaje } = peajeSlice.actions