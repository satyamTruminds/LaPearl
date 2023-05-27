import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Pages/Homepage';
import SideNav from './Components/Reusable/SideNav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './Components/Pages/About';
import Gallery from './Components/Pages/Gallery';
import Blog from './Components/Pages/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <SideNav />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/blog' element={<Blog />}/>
      </Routes>
      {/* <HomePage /> */}
    </div>
    </Router>
  );
}

export default App;
