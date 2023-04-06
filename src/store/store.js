import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';

const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

console.log('Initial state: ', store.getState().app);
store.subscribe(() => console.warn('State updated: ', store.getState().app));

export default store;
