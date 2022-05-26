const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  firstName: undefined,
  lastName: undefined,
  idToken: undefined,
  accessToken: undefined,
  pictureUrl: undefined,
  email: undefined,
};

const Authentication = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      Object.assign(state, action.payload);
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { setUser, logout } = Authentication.actions;

export default Authentication.reducer