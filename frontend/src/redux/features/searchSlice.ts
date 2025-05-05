import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Item } from '../../models/Search.model';

export interface SearchState {
  results: Item[] | null;
  loading: boolean;
  selectedItemId: string | null;
  latestSearchTerm: string | null;
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: null,
    loading: false,
    selectedItemId: null,
    latestSearchTerm: null
  } as SearchState,
  reducers: {
    updateResults: (state, action: PayloadAction<Item[] | null>) => {
      state.results = action.payload;
      state.selectedItemId = null; // Reset selected item ID when new results are fetched
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateSelectedItemId: (state, action: PayloadAction<string>) => {
      state.selectedItemId = action.payload;
    },
    updateLatestSearchTerm: (state, action: PayloadAction<string | null>) => {
      state.latestSearchTerm = action.payload;
    }
  }
});

export const { updateResults, updateLoading, updateSelectedItemId, updateLatestSearchTerm } =
  searchSlice.actions;

export default searchSlice.reducer;
