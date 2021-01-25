import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Nullable } from "./../commonTypes";
import { User } from "../entities/user";
import { authAPI } from "../api/authAPI";

type AuthState = {
  user: Nullable<User>;
  isFetching: boolean;
};

const initialState: AuthState = {
  user: null,
  isFetching: true,
};

export const logout = createAsyncThunk("auth/logout", async () => {
  await authAPI.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setUser(state, action: PayloadAction<Nullable<User>>) {
      state.user = action.payload;
    },
  },
});

export const { setIsFetching, setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
