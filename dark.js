const body = document.querySelector('body'),
navbar = body.querySelector('nav')
toggle = body.querySelector('.toggle'),
modeswi = body.querySelector('.toggle-switch'),
modetxt = body.querySelector(".mode-text"),
htitle = body.querySelector('.display-1'),
lan = body.querySelector('.land'),
prg = body.querySelector('.des'),
logo = body.querySelector('.logo-land');




modeswi.addEventListener("click" , () =>{
    body.classList.toggle("dark");


if(body.classList.contains("dark")){
    modetxt.innerText = "Ligth mode";
}else{
    modetxt.innerText = "Dark mode";
}

if(body.classList.contains("dark")){
    htitle.style.color = '#706c61'
}else{
    htitle.style.color = '#e5446d'
}

if(body.classList.contains("dark")){
    lan.style.background =' rgba(255, 255, 255, 0.521);'
}else{
    lan.style.background = ' rgba(255, 255, 255, 0.521)'
}

if(body.classList.contains("dark")){
    prg.style.color = '#706c61'
}else{
    prg.style.color = '#e5446d'
}

if(body.classList.contains('dark')){
    logo.style.width = '50%'
    logo.style.position = 'fixed'
    logo.style.top = '10%' 
}else{
    logo.style.width = '50%'
    logo.style.position = 'fixed'
    logo.style.top = '10%'
};

if(body.classList.contains('dark')){
    navbar.style.background = '#f854e3'
}else{
    navbar.style.background = '#2a2b2a'
}
});
