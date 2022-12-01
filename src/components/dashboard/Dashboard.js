export default function Dashboard({messages , faqQuestions,subscribeEmails}){
    return(

        <>
        
        <div className="row p-5 starter">
        <h1 className="display-1 text-center">Dashboard </h1>
        <div className="f-holder">
        <div className="shapes"></div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row my-5">
            <div className="col-sm-6 p-5 mesaages">
                <h2 className="text-center">Messges</h2>
                {messages.map((msg, index)=>(
                    <div key={index} className="alert alert-dark my-3">
                    <h3>{msg.name}</h3>
                    <h5>{msg.email}</h5>
                    <p>{msg.content}</p>
                    
                </div>
                ))}
                 
            </div>
            <div className="col-sm-6 p-5 orders">
                <h2 className="text-center">Orders</h2>
                <h4 className="text-center">Nothig yet here !</h4>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-sm-6 p-5 faq-quistions">
                <h2 className="text-center">FAQ Questions</h2>
                {faqQuestions.map((q ,index)=>(
                    <div key={index} className="alert alert-warning my-3">
                    <h1>FAQ Question :</h1>
                    <h3>{q.name}</h3>
                    <h4>{q.email}</h4>
                    <p>{q.question}</p>
                </div>
                ))}
               
            </div>
            <div className="col-sm-6 p-5 semails">
                <ul className="list-group">
                    {subscribeEmails.map((semail, index)=>(
                        <li className="list-group-item">{semail.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
        
        </>
    )
}