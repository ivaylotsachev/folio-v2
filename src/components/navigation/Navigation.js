import { useSelector, useDispatch } from 'react-redux';
import { setActivePage, setNavigate } from '../../features/appSlice';

import "./Navigation.scss";

const Navigation = () => {
    const { activePage } = useSelector(state => state.app);
    const dispatch = useDispatch()

    const handleNavClick = (page) => {
        dispatch(setActivePage(page));
        dispatch(setNavigate(true));
    }

    return (
        <nav className="app-nav w-100">
            <ul className="app-nav-list flex flex-center w-100 p-4">
                <div className="mask">
                    <li className="app-nav-item">
                        <span onClick={() => handleNavClick('/')}>Home</span>
                    </li>
                </div>
                <div className="mask">
                    <li className="app-nav-item">
                        <span onClick={() => handleNavClick('/cases')}>Cases</span>
                    </li>
                </div>
                <div className="mask">
                    <li className="app-nav-item">
                        <span onClick={() => handleNavClick('/contact')}>Contact</span>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation