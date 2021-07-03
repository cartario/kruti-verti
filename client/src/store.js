import { configureStore } from '@reduxjs/toolkit';
import welcomeSlice from './components/Welcome/welcomeSlice.ts';

const store = configureStore({
  reducer: {
    welcome: welcomeSlice
  },
  // customMiddlewareHere,
});

export default store;
