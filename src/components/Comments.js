import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export default function Comments(){
   const [comments, setComments] = useState([])
   const [coName , setCoName] = useState('') 
   const [comment , setComment] = useState('') 
   const [coLike , setCoLike] = useState(0) 
   const [coDislike, setCoDislike] = useState(0)
   
   const commentCol = collection(db , 'comments')

   useEffect(()=>{
   const getComments = async ()=>{
    const data = await getDocs(commentCol)
    setComments(data.docs.map((doc)=>(
        {...doc.data() , id : doc.id}
    )))
   }

   getComments()
   })


   const createComment = async (e)=>{
    e.preventDefault(e);
    await addDoc(commentCol, {
        name: coName,
        comment : comment,
        like : coLike,
        dislike : coDislike
    })
   }
 const addLike = async(com)=>{
    await updateDoc(doc(db, 'comments', com.id),{
        like : setCoLike(coLike +1)
    })
 }
 const addDislike = async(com)=>{
    await updateDoc(doc(db, 'comments',com.id),{
        dislike : setCoDislike(coDislike + 1)
    })
 }
   
    return(
        <>
        
    <div className="container-fluid " id="comments">
        <div className="row">
            <h1 className="text-center">New comments</h1>
        </div>
        <div className="comments p-3 container-fluid">
            <div className="row">
                <ul className="list-group">
                   {comments.map((comment ,index)=>( 
                     <li className="list-group-item" key={index}>
                     <div className="alert alert-primary comment">
                         <h1><i className='bx bxs-user-circle'></i> {comment.name}</h1>
                         <p>{comment.comment}</p>
                         <div className="comment-bar">
                             <button className="btn" onClick={addLike}>{comment.like}<i className='bx bxs-like'></i></button>
                             <button className="btn" onClick={addDislike}>{comment.dislike}<i className='bx bxs-dislike' ></i></button>
                         </div>
                     </div>
                 </li>
                  ) )}
                  
                </ul>
            </div>
        </div>
    </div>

    <div className="container-fluid">

           <form onSubmit={createComment}>
           <div className="add-comment-bar fixed-bottom">
           <input className="form-control" id="name" placeholder="Your name" value={coName} onChange={e=>setCoName(e.target.value)} />
            <textarea className="form-control" id="comment" placeholder="Comment..." rows="1" value={comment} onChange={e=>setComment(e.target.value)}></textarea>
            <button className="btn send-btn"><i className='bx bx-send'></i></button>
           </div>
           </form>
        
    </div>
        
        
        </>
    )
}