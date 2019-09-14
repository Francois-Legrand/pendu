let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
let ecran = document.getElementById("ecran");
let stock = document.querySelector("ecran");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let start = document.getElementById("start");
let reponse;
let mots = ["adoption", "amitié", "cabane", "chapeaux","citrouille","corbeau","dictionnaire","figurine","indépendence","journal","lunettes","mercantile","pasteur","ruisseau","tableau","vélocipède"];
let count = 0;
let stockUnderscore = [];

function drawCanvas() {
    count = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
  }
function randomMot() {
    
    drawCanvas();
    reponse = mots[Math.floor(Math.random() * mots.length)];
    stock = reponse.split('')
    console.log(stock);
    ecran.textContent = "";

    for(let i = 0; i < stock.length; i++){

        ecran.textContent += "-";

    }
    stockUnderscore = ecran.textContent.split('');
        console.log(stockUnderscore);
}
start.addEventListener("click", randomMot);

function analyz(){

    let trouve = false;
    for(i = 0; i < stock.length; i++){

        if(stock[i] == input.value){

            stockUnderscore[i] = stock[i];
            ecran.textContent = stockUnderscore.join("");
            trouve = true;
        }

    }
    if(ecran.textContent == reponse){
        alert("Win!");
        
    }
    console.log(stockUnderscore)
    
    if(!trouve){
        count++
        console.log(count)
    }
    if(count == 1){
        ctx.beginPath();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 10;
        ctx.moveTo(50, 590);//sol
        ctx.lineTo(550, 590);//sol
        
    }else if(count == 2){
        ctx.moveTo(150, 590);//poutre
        ctx.lineTo(150, 50);//poutre
        ctx.lineTo(350, 50);//poutre
        ctx.lineTo(350, 200);//poutre
    }else if(count == 3){
        ctx.moveTo(385, 245);
        ctx.arc(350, 245, 40, 0, Math.PI * 2,true);//tete
    }else if(count == 4){
        ctx.moveTo(350, 290);//corp
        ctx.lineTo(350, 380);//corp
    }else if(count == 5){
        ctx.moveTo(400, 300);//bras
        ctx.lineTo(300, 300);//bras
    }else if(count == 6){
        ctx.moveTo(410, 430);//jambes
        ctx.lineTo(350, 380);//jambes
        ctx.lineTo(300, 430);//jambes
    }else if(count == 7){
        alert("hanged");
    }
    ctx.stroke();
}
submit.addEventListener("click", analyz);
 