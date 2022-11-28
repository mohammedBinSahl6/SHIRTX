export default function Dashboard({messages}){
    return(

        <>
        
        <div class="row p-5 starter">
        <h1 class="display-1 text-center">Dashboard</h1>
    </div>
    <div class="container-fluid">
        <div class="row my-5">
            <div class="col-sm-6 p-5 mesaages">
                <h2 class="text-center">Messges</h2>
                <div class="alert alert-dark my-3">
                    <h3>mohammed bin sahl</h3>
                    <h5>mohammed.dbs.660@gmail.com</h5>
                    <p>hello there  , thank you for your good services .</p>
                    <h6>12/12/2022</h6>
                </div>
                 
            </div>
            <div class="col-sm-6 p-5 orders">
                <h2 class="text-center">Orders</h2>
                <h4 class="text-center">Nothig yet here !</h4>
            </div>
        </div>
    </div>
        
        </>
    )
}