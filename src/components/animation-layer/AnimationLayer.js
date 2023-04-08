import { useEffect, useRef } from "react";
import { setIsBusy } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from 'gsap';
import { setInitialLoading } from "../../features/appSlice";

import "./AnimationLayer.scss";
import lettering from "../../utils/lettering";

const AnimationLayer = () => {
    const { initialLoading } = useSelector(state => state.app);
    const dispatch = useDispatch();
    const titleOne = useRef(null);
    const titleTwo = useRef(null);

    useEffect(() => {
        gsap.set("body", { visibility: "visible"});

        dispatch(setIsBusy(true));
        lettering(titleOne.current, "Be.Creative");
        lettering(titleTwo.current, "Be.Different");

        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "Expo.inOut",
                stagger: 0.02,
                delay: 0.6
            }
        });

        const delay = 4;

        if (initialLoading) {
            tl
                .from(".title-one p", {yPercent: 110 })
                .to(".title-one p", {xPercent: 110 }, 2)
                .from(".title-two p", {xPercent: 110 }, 2)
                .to(".title-two p", {yPercent: -110 }, 4)
                .to(".animation-layer", {yPercent: -110 }, delay)
                .from(".profile-image-container", {scale: 1.4}, delay - 0.2)
                .from(".works-container", {yPercent: 110, onComplete: () => {
                    dispatch(setInitialLoading(false))
                } }, delay - 0.2)
        }
    }, [])

    return (
        <div className="animation-layer w-100 h-100 flex flex-column flex-center">
            <div ref={titleOne} className="title title-one flex"></div>
            <div ref={titleTwo} className="title title-two flex"></div>
        </div>
    )
}

export default AnimationLayer;