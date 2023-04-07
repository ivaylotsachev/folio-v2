import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isBusy: false,
        initialLoading: true,
        isProfileImageRight: true,
    },
    reducers: {
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

export const { setIsBusy, setInitialLoading, setIsProfileImageRight } = appSlice.actions;
export default appSlice.reducer;
