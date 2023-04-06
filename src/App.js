import { Routes, Route } from 'react-router-dom';

import HomeView from './views/home-view/HomeView';

const App = () => {
    return (
        <main className='App'>
            <Routes>
                <Route path='/' name='home' element={<HomeView />} />
            </Routes>
        </main>
    );
};

export default App;
