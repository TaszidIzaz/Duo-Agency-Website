import './App.css';
import MainContent from './components/MainContent';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Purple from './components/Purple';
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.x + 20 + "px";
        cursor.style.top = e.y + 20 + "px";
    });

    // Box hover logic
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", function() {
            const att = box.getAttribute("data-image");
            cursor.style.width = "470px";
            cursor.style.height = "370px";
            cursor.style.borderRadius = "0";
            cursor.style.backgroundImage = `url(${att})`;
        });
        box.addEventListener("mouseleave", function() {
            box.style.backgroundColor = "transparent";
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.borderRadius = "50%";
            cursor.style.backgroundImage = `none`;
        });
    });

    return () => {
      // Cleanup any other listeners if needed
    };

  }, []);

  return (
    <>
      <Cursor ref={cursorRef} />
      <Purple/>
      <Navbar />
      <MainContent />
      <Footer/>
    </>
  );
}

export default App;
