import { setIsProfileImageRight } from '../../features/appSlice';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Profile from "../../components/profile/Profile";
import WorksList from "../../components/works-list/WorksList";
import gsap from 'gsap';

import "./HomeView.scss";

document.title = 'Ivaylo Tsachev - Folio - Home'

const HomeView = () => {
    const { isProfileImageRight, navOpened } = useSelector(state => state.app);
    const dispatch = useDispatch();

    const handleClick = () => {
        document.querySelector(".profile-image-container").classList.add("js-events-none");

        const tl = gsap.timeline({
            defaults: { duration: 0.8, ease: "Expo.easeOut" }
        })

        if (isProfileImageRight) {
            tl
                .to(".works-container", { xPercent: -100, onComplete: () => dispatch(setIsProfileImageRight(false)) })
                .to(".profile-image-container", { xPercent: -100 }, 0.05)
                .fromTo(".profile-info-container", { xPercent: 100 }, {xPercent: 0, opacity: 1, onComplete: () => {
                    document.querySelector(".profile-image-container").classList.remove("js-events-none");
                }}, 0.1)
        } else {
            tl
                .to(".profile-info-container", { xPercent: 100 })
                .to(".profile-image-container", { xPercent: 0 }, 0.05)
                .to(".works-container", { xPercent: 0, onComplete: () => {
                    dispatch(setIsProfileImageRight(true))
                    document.querySelector(".profile-image-container").classList.remove("js-events-none");
                }}, 0.1)
        }
    }

    return <section className={classNames({
        'page home-page flex h-100-vh': true,
        'js-events-none': navOpened
    })}>
        <WorksList />
        <Profile onclick={handleClick}/>
    </section>
}

export default HomeView