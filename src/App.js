import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Client from './pages/Client/Client';
import About from './pages/About/About';
import './App.css'

function App() {
  return (
    <div className="">
     <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/client' element={<Client />}/>
          <Route path ='/contact' element={<Contact />}/>
          <Route path ="/about" element ={<About />} />
        </Routes> 
     </BrowserRouter>
    </div>
  );
}

export default App;
