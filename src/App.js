import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

import HomeView from './views/home-view/HomeView';
import AnimationLayer from './components/animation-layer/AnimationLayer';
import MenuButton from './components/menu-button/MenuButton';
import Navigation from './components/navigation/Navigation';

const App = () => {
    const { navOpened, initialLoading } = useSelector(state => state.app);

    useEffect(() => {
        if (!initialLoading) {
            const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "Power3.easeInOut", stagger: 0.05}})

            if (navOpened) {
                tl
                    .to(".page", { yPercent: -50 })
                    .fromTo(".app-nav-item", 
                        { yPercent: 110, scale: 0.8 }, 
                        {yPercent: 0, scale: 1}, 
                    0.1)
            } else {
                tl
                .to(".app-nav-item", { yPercent: 110, scale: 0.8 })
                .to(".page", { yPercent: 0 }, 0.1)
            }
        }
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
