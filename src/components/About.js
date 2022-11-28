export default function About(){
    return(
        <>
            
        <div class="container-fluid mt-5" id="about-body">

<div class="row">
    <h1 class="text-center">OUR TEAM</h1>
</div>
        
<div class="f-holder">
<div id="demo" class="carousel slide " data-bs-ride="carousel">
 
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>

     
    <div class="carousel-inner">
    <div class="carousel-item active">
       <div class="card-about">
        <div class="row">
            <div class="f-holder">
                <img src={require("../imgs/GR.jpg")} class="personal-img"/>
            </div>
           </div>
           <div class="row">
            <h1 class="text-center">Sam Nail</h1>
            <h2 class="text-center">Graphic Desiger</h2>
           </div>
       </div>
    </div>
    <div class="carousel-item">
       <div class="card-about">
        <div class="row">
            <div class="f-holder">
                <img src={require("../imgs/IT.jpg")} class="personal-img"/>
            </div>
           </div>
           <div class="row">
            <h1 class="text-center">Adam Nail</h1>
            <h2 class="text-center">IT SUPPORT</h2>
           </div>
       </div>
        </div>
        <div class="carousel-item">
            <div class="card-about">
                <div class="row">
                    <div class="f-holder">
                        <img src={require("../imgs/MANEGER.webp")} class="personal-img"/>
                    </div>
                   </div>
                   <div class="row">
                    <h1 class="text-center">PULl MAC</h1>
                    <h2 class="text-center">GENERAL MANEGER</h2>
                   </div>
            </div>
            </div>
    </div>
    
        
    
    

     
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    </button>
</div>



</div>

<div class="container-fluid mt-5">
<div class="row">
    <h1 class="text-center">Our Story</h1>
</div>
<div class="row">
    <div class="col-lg-6">
        <img src={require("../imgs/team.jpg")} class="img-thumbnail" />
    </div>
    <div class="col-lg-6">
        <p class="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum cumque quis, qui inventore eligendi. Ex excepturi asperiores est beatae, quo nam eos nulla sed quaerat accusantium sunt sequi modi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum, architecto asperiores sed sint voluptatem accusamus commodi illo ipsum tenetur veritatis ab enim, rerum rem laudantium qui fuga odio saepe.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsum explicabo hic rerum earum sequi molestias suscipit odit ad fugiat eos voluptatum corrupti, tenetur ducimus nam voluptatibus voluptas facere minima!logo
        </p>
    </div>
</div>
</div>

</div>





        
        </>
    )
}