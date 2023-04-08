import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gsap } from 'gsap';

import "./AnimationLayer.scss";
import lettering from "../../utils/lettering";

const AnimationLayer = () => {
    const titleOne = useRef(null);
    const titleTwo = useRef(null);
    const titleThree = useRef(null);


    useEffect(() => {
        gsap.set("body", { visibility: "visible"});

        lettering(titleOne.current, "Be.Creative");
        lettering(titleTwo.current, "Be.Different");
    }, [])

    return (
        <div className="animation-layer w-100 h-100 flex flex-column flex-center">
            <div ref={titleOne} className="title title-one flex"></div>
            <div ref={titleTwo} className="title title-two flex"></div>
            <div ref={titleThree} className="title title-two flex"></div>
        </div>
    )
}

export default AnimationLayer;