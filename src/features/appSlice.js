import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isLoading: true,
        isProfileImageRight: true,
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsProfileImageRight: (state, action) => {
            state.isProfileImageRight = action.payload;
        }
    },
});

export const { setIsLoading, setIsProfileImageRight } = appSlice.actions;
export default appSlice.reducer;
