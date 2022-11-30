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
import Dashboard from './components/dashboard/Dashboard';
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from '@firebase/firestore';
import { db } from './firebase';
Aos.init()
function App() {
  const [messages , setMessages] = useState([]);
  const [nameMsg , setNameMsg] = useState('');
  const [msgContent , setmsgContent] = useState('');
  const [emailMsg , setMsgEmail] = useState('');

  const msgCol = collection(db , 'messages')
  useEffect(()=>{
    const getMessages = async ()=>{
       const data =await getDocs(msgCol)
       setMessages(data.docs.map((doc)=>(
        {...doc.data() , id : doc.id}
       )))
    }


    getMessages()
  })
  const nameOnChangeMsg = (e) => setNameMsg(e.target.value)
  const msgContentonChange = (e) => setmsgContent(e.target.value)
  const emailMsgOnChange = (e) => setMsgEmail(e.target.value)
 
  const createMessage = async (e)=>{
    e.preventDefault(e)
    await addDoc(msgCol , {
      name : nameMsg,
      content : msgContent,
      email : emailMsg,
      
    })
    setMsgEmail('')
    setNameMsg('')
    setmsgContent('')
    alert('The message has been sent successfully !')
  }
  
  
  return (
 <>
 <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact nv={nameMsg} ev={emailMsg} cv={msgContent} nMsg={nameOnChangeMsg} cMsg={msgContentonChange} eMsg={emailMsgOnChange} createMessage={createMessage} />} />
        <Route path='/comments' element={ <Comments />} />
        <Route path='/Shop' element={ <Shop />} />
        <Route path='/Faq' element={ <Faq />} />
        <Route path='/dash12345' element={ <Dashboard messages={messages}  />} />
      </Routes>
 <Footer />
 
 </>
  );
}

export default App;
