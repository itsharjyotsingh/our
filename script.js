  const locomotiveScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smoothMobile: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // yaha se


    gsap.to('#anjyot h1', {
        opacity: 1,
        scrollTrigger: {
            trigger: "#anjyot",
            scroller: '#main',
            start: "bottom 90%",
            end: "bottom 80%",
            scrub: 2,
        }
    });

    gsap.to('.later h1', {
        opacity: 1,
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 40%",
            end: "bottom 30%",
            scrub: 2,
        }
    });

    gsap.to('#wrapper', {
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 30%",
            end: "bottom -30%",
            scrub: 2,
            pin: "#wrapper",
        }
    });

    gsap.to('#operator h1', {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 30%",
            end: "bottom 0%",
            scrub: true,
        }
    });

    gsap.to('#equal', {
        transform: "rotate(270deg)",
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 30%",
            end: "bottom 0%",
            scrub: true,
        }
    });

    gsap.to('.combination h1', {
        color: '#de164f',
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 30%",
            end: "bottom 0%",
            scrub: true,
        }
    });

    gsap.to('#nav h1', {
        color: '#de164f',
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 30%",
            end: "bottom 0%",
            scrub: true,
        }
    });

    gsap.to('body', {
        backgroundColor: "#f0d1e3",
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 30%",
            end: "bottom 0%",
            scrub: true,
        }
    });

    gsap.to('#mountains', {
        opacity: 0,
        scrollTrigger: {
            trigger: ".combination",
            scroller: '#main',
            start: "bottom 90%",
            end: "bottom 100%",
            scrub: true,
        }
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotiveScroll();

const page1Animation = () => {
    gsap.from("#introHeading h1", {
        opacity: 0,
        y: "100%",
        delay: 0.4,
        duration: 0.5,
        stagger: 0.3,
    })
}
page1Animation();

const videoContainerHover = () => {
    const arr = document.querySelectorAll('.arrow-box');

    arr.forEach((ele,key) => {
        ele.addEventListener('click', () => {
            if (key % 2 != 0) {
                ele.classList.toggle('odd');
                ele.classList.toggle('left');
            }
            else {
                ele.classList.toggle('even');
                ele.classList.toggle('right');
            }
        })
    })
}
videoContainerHover();