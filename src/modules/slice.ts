import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_SELECTED_TAG } from '@/src/constant';

import { Post } from '@/types/index';

type InitialState = {
  selectedTag: string;
  selectedPost: Post | null;
};

export const initialState = {
  selectedTag: DEFAULT_SELECTED_TAG,
  selectedPost: null,
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

    setSelectedPost(state, { payload: selectedPost }: PayloadAction<Post>) {
      return {
        ...state,
        selectedPost: selectedPost,
      };
    },
  },
});

// export actions
export const {
  setSelectedTag, //
  setSelectedPost,
} = actions;

// export reducer
export default reducer;
