import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./slices/categories";
import { peajeSlice } from "./slices/peajes";
import { turnsSlice } from "./slices/turns";
import { uiSlice } from "./slices/ui";

export const store = configureStore({
  reducer: {
    turns: turnsSlice.reducer,
    category: categorySlice.reducer,
    ui: uiSlice.reducer,
    peajes: peajeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
