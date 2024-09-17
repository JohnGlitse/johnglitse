import "./styles/app.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Mywork from './pages/Mywork';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Foot from "./components/Foot";
 

function App() {
  const setPrimaryTheme = () =>{
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark")
  }

  const setSecondaryTheme = () =>{
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  }

  const selectedTheme = localStorage.getItem("selectedTheme")

  if(selectedTheme === "dark"){
    setPrimaryTheme()
  }


  const toggleTheme = (event) =>{
    if(event.target.checked){
      setPrimaryTheme();
    }else{
      setSecondaryTheme()
    }
  }

  const inputStyle = {
    position: "absolute",
    right: "16px",
    top: "200px",
    position: "fixed"
  }
  return (
    <div className="App">
       <Navbar/>
       <input type="checkbox" id="toggleDarkMode" onChange={toggleTheme} style={inputStyle}/>
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
