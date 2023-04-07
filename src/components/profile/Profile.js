import { useCallback, useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import centerImage from '../../assets/center.jpg';
import leftOne from '../../assets/left_1.jpg'
import leftTwo from '../../assets/left_2.jpg'
import rightOne from '../../assets/right_1.jpg'
import rightTwo from '../../assets/right_2.jpg'

import "./Profile.scss"

const Profile = ({ onclick }) => {
    const [activeImage, setActiveImage] = useState(3);
    const imageContainer = useRef(null)

    const handleMouseMove = (e) => {
        const windowWidth = window.innerWidth;
        const baseWidth = Math.round(windowWidth / 5);
        const mouseXPos = e.clientX;
    
        if (mouseXPos > baseWidth * 4) setActiveImage(1)
        if (mouseXPos < baseWidth * 4) setActiveImage(2)
        if (mouseXPos < baseWidth * 3) setActiveImage(3)
        if (mouseXPos < baseWidth * 2) setActiveImage(4)
        if (mouseXPos < baseWidth) setActiveImage(5)
    }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => handleMouseMove(e));
    }, [])

    return (
        <div className='profile-container'>
            <div className="profile-info-container p-4">
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam, omnis, veniam reiciendis quam facere neque minus nam aperiam quis quidem iure corporis minima aliquam nisi quas rem autem aliquid.</h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam, omnis, veniam reiciendis quam facere neque minus nam aperiam quis quidem iure corporis minima aliquam nisi quas rem autem aliquid.</h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam, omnis, veniam reiciendis quam facere neque minus nam aperiam quis quidem iure corporis minima aliquam nisi quas rem autem aliquid.</h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam, omnis, veniam reiciendis quam facere neque minus nam aperiam quis quidem iure corporis minima aliquam nisi quas rem autem aliquid.</h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam, omnis, veniam reiciendis quam facere neque minus nam aperiam quis quidem iure corporis minima aliquam nisi quas rem autem aliquid.</h1>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsam, omnis, veniam reiciendis quam facere neque minus nam aperiam quis quidem iure corporis minima aliquam nisi quas rem autem aliquid.</h1>
            </div>

            <div
                onClick={onclick} 
                ref={imageContainer}
                className="profile-image-container h-100 w-100">
                <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 5
                })} src={leftTwo} alt="" />
                <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 4
                })} src={leftOne} alt="" />
                 <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 3
                })} src={centerImage} alt="" />
                 <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 2
                })} src={rightOne} alt="" />
                <img className={classNames({
                    'profile-image': true,
                    'js-active-image': activeImage === 1
                })} src={rightTwo} alt="" />
            </div>
        </div>
    )
}

export default Profile;