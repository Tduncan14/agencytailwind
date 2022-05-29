import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Client from './pages/Client/Client';
import About from './pages/About/About';

function App() {
  return (
    <div className=" center text-4xl bg-red-500">
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
