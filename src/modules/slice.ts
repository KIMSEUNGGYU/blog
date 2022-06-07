import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_SELECTED_TAG } from '@/src/constant';

type InitialState = {
  selectedTag: string;
};

export const initialState = {
  selectedTag: DEFAULT_SELECTED_TAG,
} as InitialState;

// define
const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedTag(state, { payload: selectedTagName }: PayloadAction<string>) {
      return {
        ...state,
        selectedTag: selectedTagName,
      };
    },
  },
});

// export actions
export const {
  setSelectedTag, //
} = actions;

// export reducer
export default reducer;
