import "./styles/app.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Mywork from './pages/Mywork';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Foot from "./components/Foot";
import { FaArrowUp} from "react-icons/fa";
import { useState, useEffect} from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const sun = useRef();
  // const moon = useRef();

  // Apply the theme based on localStorage or default to light theme
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setPrimaryTheme();
      setIsDarkTheme(true);
    } else {
      setSecondaryTheme();
      setIsDarkTheme(false);
    }
  }, []);

  // Set dark theme
  const setPrimaryTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  // Set light theme
  const setSecondaryTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  // Toggle between themes
  const toggleTheme = () => {
    if (isDarkTheme) {
      setSecondaryTheme();
      setIsDarkTheme(false);
      //sun.current.style.display = "none";
    } else {
      setPrimaryTheme();
      setIsDarkTheme(true);
    }
  };

  // Scroll to top function
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Styles for the theme toggle button (sun icon) and scroll to top button
  // const iconStyle = {
  //   position: "fixed",
  //   right: "45%",
  //   // tranform: "translateY(-50%)",
  //   top: "3px",
  //   zIndex: "100",
  //   cursor: "pointer",
  //   fontSize: "22px",
  //   color: "var(--accent)",
  // };

  const toTopStyle = {
    position: "fixed",
    right: "16px",
    bottom: "40px",
    padding: "10px",
    boxShadow: "var(--box-shadow2)",
    color: "var(--accent)",
    fontSize: "40px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <div className="App">
      <Navbar />
       
      {
      isDarkTheme? <IoSunnyOutline  onClick={toggleTheme} className="fasun"/> :
      <RxMoon onClick={toggleTheme} className="fasun"/>
      
      }
      
      <FaArrowUp style={toTopStyle} onClick={toTop} />
 
      <Home />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;
