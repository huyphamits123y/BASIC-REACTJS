import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slides/counterSlice';
import userReducer from './slides/userSlice';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
});

export default store;