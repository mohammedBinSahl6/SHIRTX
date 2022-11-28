export default function Comments(){
    return(
        <>
        
    <div className="container-fluid " id="comments">
        <div className="row">
            <h1 className="text-center">New comments</h1>
        </div>
        <div className="comments p-3 container-fluid">
            <div className="row">
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="alert alert-primary comment">
                            <h1><i className='bx bxs-user-circle'></i> John doe</h1>
                            <p>Wow i love the Quality its amazing!</p>
                            <div className="comment-bar">
                                <button className="btn"><i className='bx bxs-like'></i></button>
                                <button className="btn"><i className='bx bxs-dislike' ></i></button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="alert alert-primary comment">
                            <h1><i className='bx bxs-user-circle'></i> Mark wiss</h1>
                            <p>i need some t-shirt with small size!!!</p>
                            <div className="comment-bar">
                                <button className="btn"><i className='bx bxs-like'></i></button>
                                <button className="btn"><i className='bx bxs-dislike' ></i></button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="alert alert-primary comment">
                            <h1><i className='bx bxs-user-circle'></i> Mohammed dbs</h1>
                            <p>I like this section</p>
                            <div className="comment-bar">
                                <button className="btn"><i className='bx bxs-like'></i></button>
                                <button className="btn"><i className='bx bxs-dislike' ></i></button>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="alert alert-primary comment">
                            <h1><i className='bx bxs-user-circle'></i> sara doe</h1>
                            <p>it is an amazing shop!</p>
                            <div className="comment-bar">
                                <button className="btn"><i className='bx bxs-like'></i></button>
                                <button className="btn"><i className='bx bxs-dislike' ></i></button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="add-comment-bar fixed-bottom">
            <input className="form-control" id="name" placeholder="Your name" />
            <textarea className="form-control" id="comment" placeholder="Comment..." rows="1"></textarea>
            <button className="btn send-btn"><i className='bx bx-send'></i></button>
        </div>
    </div>
        
        
        </>
    )
}