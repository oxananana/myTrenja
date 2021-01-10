import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { exersizeCategoriesJSON } from "../../data/exersizeCategoriesJSON";
import { exersizesJSON } from "../../data/exersizesJSON";
import { Exersize } from "../../entities/exersize";

const exersizesSlice = createSlice({
  name: "exersizes",
  initialState: {
    exersizes: exersizesJSON,
    exersizeCategories: exersizeCategoriesJSON,
  },
  reducers: {
    addExersize(state, action: PayloadAction<Exersize>) {
      const exersize = action.payload;
      state.exersizes[exersize.id] = exersize;
    },
    editExersize(state, action: PayloadAction<Exersize>) {
      const exersize = action.payload;
      let prevExersize = state.exersizes[exersize.id];
      prevExersize = { ...prevExersize, ...exersize };
    },
    deleteExersize(state, action: PayloadAction<{ id: string }>) {
      delete state.exersizes[action.payload.id];
    },
  },
});

export const {
  addExersize,
  editExersize,
  deleteExersize,
} = exersizesSlice.actions;

export const exersizesReducer = exersizesSlice.reducer;
