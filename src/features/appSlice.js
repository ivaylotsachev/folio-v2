import { createSlice } from '@reduxjs/toolkit';

// TODO: move this to utils;

const appSlice = createSlice({
    name: 'app',
    initialState: {
        navOpened: false,
        isBusy: false,
        initialLoading: true,
        isProfileImageRight: true,
        activePage: "",
        navigate: false,
    },
    reducers: {
        setNavigate: (state, action) => {
            state.navigate = action.payload
        },
        setActivePage: (state, action) => {
            const page = action.payload.split("/")[1] || 'home'
            console.log("action page", action.payload)
            state.activePage = page
        },
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

export const { setNavigate, setActivePage, setIsBusy, setInitialLoading, setIsProfileImageRight, setNavOpened } = appSlice.actions;

export default appSlice.reducer;
