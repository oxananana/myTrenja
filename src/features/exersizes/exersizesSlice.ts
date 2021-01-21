import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { exersizesAPI } from "../../api/exersizesAPI";
import {
  Exersize,
  ExersizeCategories,
  Exersizes,
} from "../../entities/exersize";

type ExersizesState = {
  catalog: Exersizes;
  categories: ExersizeCategories;
  isFetching: boolean;
};

const initialState: ExersizesState = {
  catalog: {},
  categories: {},
  isFetching: false,
};

export const fetchExersizes = createAsyncThunk(
  "exersizes/fetchExersizes",
  async () => {
    const response = await exersizesAPI.fetchExersizes();
    return response;
  }
);

const exersizesSlice = createSlice({
  name: "exersizes",
  initialState,
  reducers: {
    addExersize(state, action: PayloadAction<Exersize>) {
      const exersize = action.payload;
      state.catalog[exersize.id] = exersize;
    },
    editExersize(state, action: PayloadAction<Exersize>) {
      const exersize = action.payload;
      let prevExersize = state.catalog[exersize.id];
      prevExersize = { ...prevExersize, ...exersize };
    },
    deleteExersize(state, action: PayloadAction<{ id: string }>) {
      delete state.catalog[action.payload.id];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExersizes.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(
        fetchExersizes.fulfilled,
        (
          state,
          action: PayloadAction<{
            catalog: Exersizes;
            categories: ExersizeCategories;
          }>
        ) => {
          state.catalog = action.payload.catalog;
          state.categories = action.payload.categories;
          state.isFetching = false;
        }
      );
  },
});

export const {
  addExersize,
  editExersize,
  deleteExersize,
} = exersizesSlice.actions;

export const exersizesReducer = exersizesSlice.reducer;
