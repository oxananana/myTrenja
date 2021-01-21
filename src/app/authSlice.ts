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
  isFetching: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    await authAPI.login(email, password);
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isFetching = false;
      });
  },
});

export const { setIsFetching, setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
