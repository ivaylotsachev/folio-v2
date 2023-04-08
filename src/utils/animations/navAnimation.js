import gsap from 'gsap';

const navAnimation = (navOpened) => {
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "Power3.easeInOut", stagger: 0.05}})

    if (navOpened) {
        tl
            .to(".page", { yPercent: -50 })
            .fromTo(".app-nav-item", 
                { yPercent: 110, scale: 0.8 }, 
                {yPercent: 0, scale: 1}, 
            0.1)
    } else {
        tl
        .to(".app-nav-item", { yPercent: 110, scale: 0.8 })
        .to(".page", { yPercent: 0 }, 0.1)
    }
}

export default navAnimation