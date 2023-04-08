import { setNavOpened } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";

import "./MenuButton.scss";

const MenuButton = () => {
    const { navOpened } = useSelector(state => state.app);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setNavOpened(!navOpened))
    }

    return (
        <div className="menu-button flex flex-center" onClick={handleClick}>
            <p className="uppercase bold">{navOpened ? "Close" : "Menu"}</p>
        </div>
    )
}

export default MenuButton;