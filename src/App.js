import logo from './logo.svg';
import './App.css';
import CustomButton from"./Components/CustomButton.jsx"
import NavBar from "./Components/headBar.jsx"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import News from './Pages/News.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Broken from './Pages/Broken.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>Hello World</h1>
      <CustomButton/>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/news' element = {<News/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/*' element = {<Broken/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
