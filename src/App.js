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
import Product from './Pages/Product.jsx';
import Counter from './Pages/Counter.jsx';
import Random from './Pages/Random.jsx';
function App() {
  return (
    <div className="App">

      {/* <h1>Hello World</h1>
      <CustomButton/> */}
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/news' element = {<News/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/*' element = {<Broken/>}/>
          <Route path = '/product' element = {<Product/>}/>
          <Route path = '/counter' element = {<Counter/>}/>
          <Route path = '/random' element = {<Random/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
