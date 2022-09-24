import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITurns {
  turn: string;
  hours: string;
  id: string;
}

export interface ITurnsState {
  isLoading: boolean;
  turns: ITurns[];
  eventTurn: ITurns | null;
}

const initialState: ITurnsState = {
  isLoading: false,
  turns: [
    {
      turn: 'Turno 1',
      hours: '6am - 6pm',
      id: 'id_turn1'
    },
    {
      turn: 'Turno 2',
      hours: '6pm - 6am',
      id: 'id_turn2'
    }
  ],
  eventTurn: null,
};

export const turnsSlice = createSlice({
  name: "turns",
  initialState,
  reducers: {
    setInitAction: (state /*action*/) => {
      state.isLoading = true;
    },
    addTurn: (state, action: PayloadAction<ITurns>) => {
      state.turns = [...state.turns, action.payload];
      state.isLoading = false;
    },
    setTurn: (state, action: PayloadAction<ITurns>) => {
      state.eventTurn = action.payload;
    },
    updateTurn: (state, action: PayloadAction<ITurns>) => {
      state.turns = state.turns.map((turn) =>
        turn.id === action.payload.id ? action.payload : turn
      );
      state.isLoading = false;
    },
    deleteTurn: (state, action: PayloadAction<ITurns>) => {
      state.turns = state.turns.filter((turn) => turn.id !== action.payload.id);
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTurn, deleteTurn, setInitAction, setTurn, updateTurn } =
  turnsSlice.actions;
