import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  selectedTag: string;
};

export const initialState = {
  selectedTag: '#전체보기',
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
