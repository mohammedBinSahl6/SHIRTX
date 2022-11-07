const swe = document.querySelector('#switch'),
lab = body.q('#SwitchCheck');

// swe.addEventListener("click" , () => {
// lab.classList.toggle('close');
// })

if(body.classList.contains("dark")){
    swe.innerText = "white";
  }else{
    swe.innerText = "black";
    
  }


  if(body.classList.contains("dark")){
    lab.style.color = 'white'
}else{
    lab.style.color = 'black'
}