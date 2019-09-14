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
let lettreTrouve = 0;
let stockUnderscore = [];
function randomMot() {
    
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
            lettreTrouve++;
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
        
        

/*function analyz() {
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;

    if (ecran.textContent == reponse) {

        alert("Gagner !");

    }else if (count == 1) {
        ctx.moveTo(50, 300);//sol
        ctx.lineTo(250, 300);//sol
        console.log("coucou");

    } else if (count == 2) {
        ctx.moveTo(150, 300);//poutre
        ctx.lineTo(150, 50);//poutre
        ctx.lineTo(300, 50);//poutre
        ctx.lineTo(300, 80);//poutre
        console.log("coucou2");
    } else if (count == 3) {
        ctx.moveTo(320, 100);
        ctx.arc(300, 100, 20, 0, Math.PI * 2,
            true);//tete
        console.log("coucou2");
    } else if (count == 4) {
        ctx.moveTo(300, 120);//corp
        ctx.lineTo(300, 200);//corp
        console.log("coucou2");
    } else if (count == 5) {
        ctx.moveTo(350, 150);//bras
        ctx.lineTo(250, 150);//bras
        console.log("coucou2");
    } else if (count == 6) {
        ctx.moveTo(340, 250);//jambes
        ctx.lineTo(300, 200);//jambes
        ctx.lineTo(260, 250);//jambes
        console.log("coucou2");
    } else if (count == 7) {

        alert("death");
    }
    ctx.stroke();

    /*if (input.value == reponse.charAt(0)) {

        ecran.textContent = ecran.textContent.replace(ecran.textContent.charAt(0), "-");

    }if(input.value == reponse.charAt(1)){

        ecran.textContent = ecran.textContent.replace(ecran.textContent.charAt(1), "-");
    }
    else {

        console.log(count++);
        
    }
}*/

//submit.addEventListener("click", analyz);









//ctx.fillRect(10,20,100,200);

//ctx.strokeRect(300,300,200,200);

// ctx.beginPath();
// ctx.moveTo(100,200);
// ctx.lineTo(100,300);
// ctx.moveTo(100,200);
// ctx.lineTo(200,200);
// ctx.moveTo(100,250);
// ctx.lineTo(150,250);
//ctx.stroke();





