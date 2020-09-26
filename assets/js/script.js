let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.herosection',
        start: "center",
        toggleActions: "restart none none none"
    }
});

tl.from(".about__cont", {y: 300, opacity: 0, duration: 1})
tl.from(".feature__one", {y: 300, opacity: 0, duration: 1})
tl.from(".project__content", {y: 300, opacity: 0, duration: 1})
tl.from(".contact__me", {y: 300, opacity: 0, duration: 1})


