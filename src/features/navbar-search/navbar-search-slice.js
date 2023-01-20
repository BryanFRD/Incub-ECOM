import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  search: ''
}

const navbarSearchSlice = createSlice({
  name: 'navbar-search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { setSearch } = navbarSearchSlice.actions;
export default navbarSearchSlice.reducer;