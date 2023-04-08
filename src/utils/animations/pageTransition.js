import gsap from 'gsap';

const handlePageTransition = async (navCallback, pathname) => {
    document.body.classList.add("js-scroll-disabled")
    gsap.set(".animation-layer", {yPercent: 100})
    console.log('handlePageTransition', pathname);

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "Power4.easeInOut" }})

    return new Promise(resolve => {
        tl
            .to(".animation-layer", { yPercent: 0, onComplete: () => {
                navCallback(pathname === 'home' ? "/" : pathname)
            }})
            .from(".animation-layer .title-three", {yPercent: 110 }, 0.3)
            .to(".animation-layer", { yPercent: -110, onComplete: () => {
                resolve();
                document.body.classList.remove("js-scroll-disabled");
            }}, 2)
    })
}   

export default handlePageTransition;