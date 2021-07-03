import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const getMe = () => {}; //import from Api

interface WelcomeState {
  value: number;
  error: null | Array<string>;
}

const initialState: WelcomeState = {
  value: 0,
  error: null,
};

export const welcomeSlice = createSlice({
  name: 'welcomeSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state, action: any) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setError: (state, { payload: message }) => {
      state.error = message;
    },
  },
});

// Actions
export const { increment, decrement, incrementByAmount, setError } = welcomeSlice.actions;

//Thunks
export const getMeAsync = () => async (dispatch: any) => {
  dispatch(incrementByAmount(1));
  try {
    const payload = await getMe();
    dispatch(decrement(payload));
  } catch (e) {
    dispatch(incrementByAmount(1));
    dispatch(setError('error'));
    throw new Error(e);
  } finally {
    dispatch(incrementByAmount(1));
  }
};

// Selectors
export const selectValue = (state: any) => state.welcome.value;

export default welcomeSlice.reducer;
