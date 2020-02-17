let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
let ecran = document.getElementById("ecran");
let stock = document.querySelector("ecran");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let start = document.getElementById("start");
let reponse;
let mots = ["adoption", "amitie", "cabane", "chapeaux","citrouille","corbeau","dictionnaire","figurine","independence","journal","lunettes","mercantile","pasteur","ruisseau","tableau","velocipede"];
let count = 0;
let stockUnderscore = [];
function drawCanvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
  }
//la function startGame commencera la partie en génerant un mot aléatoire et elle va aussi transformer les mots en underscrore et enfin générer des tableaux pour chacun d'entre eux.
function startGame() {
    count = 0;
    console.log(count);
    //lorsque l'on clic sur start on veut que l'affichage s'initialise
    ecran.textContent = "";
    //on efface le dessin
    drawCanvas();
    //on stock le mot random
    reponse = mots[Math.floor(Math.random() * mots.length)];

    console.log("Le mot random est "+reponse);
    //on transforme le mot en tableau
    stock = reponse.split('');
    console.log(stock);
    
    //on parcours chaque valeur du tableau
    for(let i = 0; i < stock.length; i++){
        //on transforme le mot en -
        ecran.textContent += "-";

    }
    //la variable stockUnderscore stock "-" qu'on transforme en tableau
    stockUnderscore = ecran.textContent.split('');
        console.log(stockUnderscore);
}
start.addEventListener("click", startGame);

//la function analyz va traiter les informations, remplacer les underscores par les lettres trouvés, générer le dessin du pendu et afficher si le jeux est gagné ou perdu.
function analyz(){
    //la variable trouve est sur true lorsqu'un mot complet est trouvé et reste sur false tant qu'il n'est pas trouvé.
    let trouve = false;
    console.log(trouve);
    for(i = 0; i < stock.length; i++){

        if(stock[i] == input.value){
            //si la valeur envoyé est egal à la valeur et la position du mot on ajoute la valeur à la position d'un underscore
            stockUnderscore[i] = stock[i];

            ecran.textContent = stockUnderscore.join("");
            trouve = true;
        }

    }
    //si le texte de la variable ecran est egal la variable reponse c'est gagner
    if(ecran.textContent == reponse){
        alert("Win!");
        
    }
    console.log(stockUnderscore)
    //si la variable trouve est false on incremente count
    if(!trouve){
        count++
        console.log(count)
    }
    //si count est egal à 1 on execute la premiere partie du canvas
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