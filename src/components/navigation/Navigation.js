import { Link } from 'react-router-dom';

import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="app-nav w-100">
            <ul className="app-nav-list flex flex-column flex-center w-100 p-4">
                <div className="mask">
                    <li className="app-nav-item">
                        <Link to="/contacts">Cases</Link>
                    </li>
                </div>
                <div className="mask">
                    <li className="app-nav-item">
                        <Link to="/contacts">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation