import gsap from 'gsap';

const initialAnimation = async (page) => {
    console.log("init animation...", page)
    document.body.classList.add("js-scroll-disabled")

    const delay = 4;

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "Expo.inOut",
            stagger: 0.02,
            delay: 0.6
        }
    });

    return new Promise(resolve => {
        tl
            .from(".title-one p", {yPercent: 110 })
            .to(".title-one p", {xPercent: 110 }, 2)
            .from(".title-two p", {xPercent: 110 }, 2)
            .to(".title-two p", {yPercent: -110 }, 4)
            .to(".animation-layer", {yPercent: -110 }, delay)
            .from(".profile-image-container", {scale: 1.4}, delay - 0.2)
            .from(".works-container", {yPercent: 110, onComplete: () => {
                resolve(true);
                document.body.classList.remove("js-scroll-disabled")
            } }, delay - 0.2)
    })
}

export default initialAnimation;