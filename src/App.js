import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage, setInitialLoading } from './features/appSlice';
import initialAnimation from './utils/animations/initAnimation';
import navAnimation from './utils/animations/navAnimation';

import HomeView from './views/home-view/HomeView';
import AnimationLayer from './components/animation-layer/AnimationLayer';
import MenuButton from './components/menu-button/MenuButton';
import Navigation from './components/navigation/Navigation';

const App = () => {
    const { navOpened } = useSelector(state => state.app);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const init = async () => {
            await initialAnimation()
                .then(res => {
                    dispatch(setInitialLoading(false))
                    dispatch(setActivePage(location.pathname))
                })
        }

        init();
    }, [])

    useEffect(() => {
        navAnimation(navOpened);
    }, [navOpened])

    return (
        <main className='app'>
            <Navigation />
            <Routes>
                <Route path='/' name='home' element={<HomeView />} />
            </Routes>
            <MenuButton />
            <AnimationLayer />
        </main>
    );
};

export default App;
