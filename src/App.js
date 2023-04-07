import { Routes, Route } from 'react-router-dom';

import HomeView from './views/home-view/HomeView';
import AnimationLayer from './components/animation-layer/AnimationLayer';

const App = () => {
    return (
        <main className='app'>
            <Routes>
                <Route path='/' name='home' element={<HomeView />} />
            </Routes>
            <AnimationLayer />
        </main>
    );
};

export default App;
