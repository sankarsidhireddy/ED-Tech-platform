import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Nav from './Nav.js';
import Login from './Login';
import Sign from './Sign';
import "./App.css";
import Footer from './Footer';
let App=()=>{
  return(
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </div>

  )
}
export default App;