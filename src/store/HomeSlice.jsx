import { createSlice } from "@reduxjs/toolkit";

export const HomeSlice = createSlice({
  name: "Home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiconfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiconfiguration, getGenres } = HomeSlice.actions;

export default HomeSlice.reducer;
