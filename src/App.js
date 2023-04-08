import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setActivePage, setInitialLoading, setNavOpened, setNavigate } from './features/appSlice';
import initialAnimation from './utils/animations/initAnimation';
import navAnimation from './utils/animations/navAnimation';

import HomeView from './views/home-view/HomeView';
import ContactView from './views/contact-view/ContactView';
import AnimationLayer from './components/animation-layer/AnimationLayer';
import MenuButton from './components/menu-button/MenuButton';
import Navigation from './components/navigation/Navigation';
import handlePageTransition from './utils/animations/pageTransition';

const App = () => {
    const { navOpened, navigate, activePage } = useSelector(state => state.app);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigateCallback = useNavigate();

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
        if (navigate) {
            const animateBetweenPages = async () => {
                dispatch(setNavOpened(false));
                await handlePageTransition(navigateCallback, activePage)
                    .then(res => {
                        dispatch(setNavigate(false))
                    })
            }
            animateBetweenPages();
        }
    }, [navigate])

    useEffect(() => {
        navAnimation(navOpened);
    }, [navOpened])

    return (
        <main className='app'>
            <Navigation />
            <Routes>
                <Route path='/' name='home' element={<HomeView />} />
                <Route path='/contact' name='home' element={<ContactView/>} />
            </Routes>
            <MenuButton />
            <AnimationLayer />
        </main>
    );
};

export default App;
