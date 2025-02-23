/* ============================================================================
 * Copyright (c) KhulnaSoft, Ltd
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  value: string;
  options: string[];
}

const initialState: State = {} as any;

export const slice = createSlice({
  name: "contentType",
  initialState,
  reducers: {
    setContentType: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setContentType } = slice.actions;

export default slice.reducer;
