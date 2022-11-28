import './App.css';
import './styles2.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';
Aos.init()
function App() {
  return (
 <>
 <Navbar />
 <Homepage />
 <Footer />
 
 </>
  );
}

export default App;
