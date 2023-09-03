import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import './style.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
// import Cursor from '../Cursor';

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
    const mainRef = useRef(null);
    // const cursorRef = useRef(null);

    useEffect(() => {
        const main = mainRef.current;
        // const cursor = cursorRef.current;

        // Initialization Logic
        const locoScroll = new LocomotiveScroll({
            el: main,
            smooth: true
        });
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(main, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: main.style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

        // // Cursor Logic
        // document.addEventListener("mousemove", (e) => {
        //     cursor.style.left = e.x + 20 + "px";
        //     cursor.style.top = e.y + 20 + "px";
        // });

        // GSAP Animations
        gsap.from(".page1 h1,.page1 h2", {
            y: 10,
            rotate: 10,
            opacity: 0,
            delay: 0.3,
            duration: 0.7
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page1 h1",
                scroller: main,
                start: "top 27%",
                end: "top 0",
                scrub: 3
            }
        });

        tl.to(".page1 h1", { x: -100 }, "anim")
            .to(".page1 h2", { x: 100 }, "anim")
            .to(".page1 video", { width: "90%" }, "anim");

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page1 h1",
                scroller: main,
                start: "top -115%",
                end: "top -120%",
                scrub: 3
            }
        });
        tl2.to(main, { backgroundColor: "#fff" });

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".page1 h1",
                scroller: main,
                start: "top -280%",
                end: "top -300%",
                scrub: 3
            }
        });
        tl3.to(main, { backgroundColor: "#0F0D0D" });

        // const boxes = document.querySelectorAll(".box");
        // boxes.forEach((box) => {
        //     box.addEventListener("mouseenter", function() {
        //         const att = box.getAttribute("data-image");
        //         cursor.style.width = "470px";
        //         cursor.style.height = "370px";
        //         cursor.style.borderRadius = "0";
        //         cursor.style.backgroundImage = `url(${att})`;
        //     });
        //     box.addEventListener("mouseleave", function() {
        //         box.style.backgroundColor = "transparent";
        //         cursor.style.width = "20px";
        //         cursor.style.height = "20px";
        //         cursor.style.borderRadius = "50%";
        //         cursor.style.backgroundImage = `none`;
        //     });
        // });

        const h4Elems = document.querySelectorAll("#nav h4");
        const purple = document.querySelector("#purple");
        h4Elems.forEach((elem) => {
            elem.addEventListener("mouseenter", function() {
                purple.style.display = "block";
                purple.style.opacity = "1";
            });
            elem.addEventListener("mouseleave", function() {
                purple.style.display = "none";
                purple.style.opacity = "0";
            });
        });

        // Cleanup
        return () => {
            locoScroll.destroy();
            // If there are other event listeners you need to remove, do it here.
        };

    }, []);

    return (
        <div className="main" ref={mainRef}>
            {/* <Cursor ref={cursorRef} /> */}
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            
        </div>
    );
};

export default MainContent;
