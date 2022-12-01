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
import { async } from '@firebase/util';
Aos.init()
function App() {
  const [messages , setMessages] = useState([]);
  const [nameMsg , setNameMsg] = useState('');
  const [msgContent , setmsgContent] = useState('');
  const [emailMsg , setMsgEmail] = useState('');
//states for faq questions
const [faqQuestions , setfaqQuestions] = useState([]);
const [faqName , setfaqName] = useState('');
const [question , setQeustion] = useState('');
const [faqEmail , setfaqEmail] = useState('');
  const msgCol = collection(db , 'messages');
  const faqqCol = collection(db , 'faqQuestions');
  const semailsCol = collection(db,'SubscribeEmails')

  //states for subscribe emails
  const [subscribeEmails,setsubscribeEmails ] = useState([])
  const [Semail, setSemail] = useState('');
  useEffect(()=>{
    const getMessages = async ()=>{
       const data =await getDocs(msgCol)
       setMessages(data.docs.map((doc)=>(
        {...doc.data() , id : doc.id}
       )))
    }
    const getFaqQ = async ()=>{
      const data = await getDocs(faqqCol)
      setfaqQuestions(data.docs.map((doc)=>(
        {...doc.data(), id : doc.id}
      )))
    };
    const getSemails = async ()=>{
      const data = await getDocs(semailsCol)
      setsubscribeEmails(data.docs.map((doc)=>(
        {...doc.data(), id: doc.id}
      )))
    }
    getSemails()
    getFaqQ()
    getMessages()
  })
  //for semails
  const semailOnchange = (e)=>setSemail(e.target.value)

  //for contact
  const nameOnChangeMsg = (e) => setNameMsg(e.target.value)
  const msgContentonChange = (e) => setmsgContent(e.target.value)
  const emailMsgOnChange = (e) => setMsgEmail(e.target.value)
 
  //for faq
const faqnameChange = e => setfaqName(e.target.value)
const faqemailChange = e => setfaqEmail(e.target.value)
const faqQChange = e => setQeustion(e.target.value)

  //events
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

  const createQuestion = async (e)=>{
    e.preventDefault(e);
    await addDoc(faqqCol, {
      name : faqName,
      email : faqEmail,
      question : question
    })
    setQeustion('')
    setfaqName('')
    setfaqEmail('')
    alert('your question has sent!')
  };
  const addSemail = async (e)=>{
    e.preventDefault()
    await addDoc(semailsCol,{
      email: Semail
    })
    setSemail('')
    alert('Your email has been added to subscribe offer ')
  }
  
  
  return (
 <>
 <Navbar />
      <Routes>
        <Route path='/' element={ <Homepage semailOnchange={semailOnchange} addSemail={addSemail} Semail={Semail} />} />
        <Route path='/about' element={ <About />} />
        <Route path='/contact' element={ <Contact nv={nameMsg} ev={emailMsg} cv={msgContent} nMsg={nameOnChangeMsg} cMsg={msgContentonChange} eMsg={emailMsgOnChange} createMessage={createMessage} />} />
        <Route path='/comments' element={ <Comments />} />
        <Route path='/Shop' element={ <Shop />} />
        <Route path='/Faq' element={ <Faq fnv={faqName} fev={faqEmail} fq={question} createQuestion={createQuestion} cfn={faqnameChange} cfe={faqemailChange} cfq={faqQChange} />} />
        <Route path='/dash12345' element={ <Dashboard messages={messages}  faqQuestions={faqQuestions} subscribeEmails={subscribeEmails} />} />
      </Routes>
 <Footer />
 
 </>
  );
}

export default App;
