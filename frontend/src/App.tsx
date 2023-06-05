import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./styles/Global.scss"


document.body.style.backgroundImage = "linear-gradient(to right, #4880EC, #019CAD)" 



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {/* <Route path="/projects" element={<ProjectPage/>}/> */}
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
