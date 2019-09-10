let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
let ecran = document.getElementById("ecran");
let stock = document.querySelector("ecran");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let start = document.getElementById("start");
let reponse;
let recupInput = document.getElementById("recupInput");
let mots = ["jean", "thomas", "baptiste", "mathilde"];
let count = 0;
lettreTrouve = 0;

function randomMot() {

    reponse = mots[Math.floor(Math.random() * mots.length)];
    stock = reponse.split('')
    console.log(stock);
    
    //ecran.textContent += stock.join("");

    for(let i = 0; i < stock.length; i++){

        ecran.textContent += stock[i] = "-";
    }
    
    //ecran.textContent += ecran;
    /*ecran.textContent = "";
    for (i = 0; i < reponse.length; i++) {

        
        lettreCache = reponse[i];
        
        
        lettreCache = "-";
        //lettreCache = lettreCache.split('');
        

        ecran.textContent += lettreCache;


    }*/
}
start.addEventListener("click", randomMot);

function analyz(){

    let trouve = false;
    for(i = 0; i < stock.length; i++){

        if(stock[i] == input.value){
            console.log("ta lettre est a la "+i+"ème position")
            trouve = true;
            lettreTrouve++;
        }

    }
        //if(input.value == mot[i]){

        //}





    //si tu ne trouve pas
    
    if(!trouve){
        count++
        console.log(count)
    }
    if(count == 1){
        ctx.beginPath();
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.moveTo(50, 300);//sol
        ctx.lineTo(250, 300);//sol
        
    }else if(count == 2){
        ctx.moveTo(150, 300);//poutre
        ctx.lineTo(150, 50);//poutre
        ctx.lineTo(300, 50);//poutre
        ctx.lineTo(300, 80);//poutre
    }else if(count == 3){
        ctx.moveTo(320, 100);
        ctx.arc(300, 100, 20, 0, Math.PI * 2,true);//tete
    }else if(count == 4){
        ctx.moveTo(300, 120);//corp
        ctx.lineTo(300, 200);//corp
    }else if(count == 5){
        ctx.moveTo(350, 150);//bras
        ctx.lineTo(250, 150);//bras
    }else if(count == 6){
        ctx.moveTo(340, 250);//jambes
        ctx.lineTo(300, 200);//jambes
        ctx.lineTo(260, 250);//jambes
    }else if(count == 7){
        alert("death");
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


                //personnage





                //personnage

//marchine de torture




                //marchine de torture



