import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICategory {
  price: number;
  label: string;
  category: string;
  vehicles: [string, string] | [string];
}

export interface ICategoryState {
  categories: ICategory[];
}

const initialState: ICategoryState = {
  categories: [
    {
      label: "Categoria A",
      price: 1500,
      vehicles: ["vehiculo", "bus"],
      category: 'categoryA'
    },
    {
      label: "Categoria B",
      price: 2100,
      vehicles: ["camion", "grua"],
      category: 'categoryB'

    },
    {
      label: "Categoria C",
      price: 2700,
      vehicles: ["Tractocamion"],
      category: 'categoryC'

    },
  ],
};

export const categorySlice = createSlice({
  name: "turns",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions;
