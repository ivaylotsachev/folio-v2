import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        navOpened: false,
        isBusy: false,
        initialLoading: true,
        isProfileImageRight: true,
    },
    reducers: {
        setNavOpened: (state, action) => {
            state.navOpened = action.payload
        },
        setIsBusy: (state, action) => {
            state.isBusy = action.payload
        },
        setInitialLoading: (state, action) => {
            state.initialLoading = action.payload;
        },
        setIsProfileImageRight: (state, action) => {
            state.isProfileImageRight = action.payload;
        }
    },
});

export const { setIsBusy, setInitialLoading, setIsProfileImageRight, setNavOpened } = appSlice.actions;
export default appSlice.reducer;
