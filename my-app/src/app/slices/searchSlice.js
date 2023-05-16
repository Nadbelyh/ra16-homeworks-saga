import { createSlice } from "@reduxjs/toolkit";
import { skills } from "../../data/skills";

const initialState = {
  items: skills,
  searchItems: [],
  search: "",
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    changeSearchField(state, action) {
      state.search = action.payload;
      if (state.search === "") state.searchItems = [];
    },
    searchResult(state, action) {
      state.searchItems = state.items.filter((i) =>
        i.name.toLowerCase().includes(action.payload)
      );
    },
  },
});

export default searchSlice.reducer;
export const { changeSearchField, searchResult } = searchSlice.actions;
