export default function Cart (){
    return(
        <>
        
        <div class="offcanvas-header">
      <h1 class="offcanvas-title">MY CART <i class='bx bx-cart' ></i></h1>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
     <table class="table teble-striped table-hover px-5 text-center">
        <thead>
            <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Count</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img class="img-thumbnail"  src={require("../imgs/t10.png")} /></td>
                <td>T-SHIRT PLAZMA</td>
                <td>25</td>
                <td>1</td>
                <td>25</td>
                <td><button class="btn btn-danger">Remove</button></td>
            </tr>
        </tbody>
     </table>
    </div>
        
        </>
    )
}