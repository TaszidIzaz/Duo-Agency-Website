import './app.css';
import MainContent from './components/MainContent';
// import Cursor from './components/MainContent/Cursor';
import Navbar from './components/Navbar';
import Purple from './components/Purple';
import Footer from './components/Footer';


const App = () => {

  return (
    <>
      {/* <Cursor ref={cursorRef} /> */}
      <Purple/>
      <Navbar />
      <MainContent />
      <Footer/>
    </>
  );
}

export default App;
