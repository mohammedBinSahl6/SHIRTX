import './App.css';
import './styles2.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Comments from './components/Comments';
import Shop from './components/Shop';
import Faq from './components/Faq';
Aos.init()
function App() {
  return (
 <>
 <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/comments' element={ <Comments />} />
        <Route path='/Shop' element={ <Shop />} />
        <Route path='/Faq' element={ <Faq />} />
      </Routes>
 <Footer />
 
 </>
  );
}

export default App;
