//on associe une variable aux ID et aux class qui nous intéresse
let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
//ecran est la variable qui affichera le texte
let ecran = document.getElementById("ecran");
//stock est la variable qui stockera le mot afin de le transformer en tableau par exemple.
let stock = document.querySelector("ecran");
//input est la variable qui stockera la valeur du champ à saisir ex: input.value
let input = document.getElementById("input");
//submit est la variable qui enverra les informations dans la variable ecran et elle va aussi les traiter.
let submit = document.getElementById("submit");
//start est la variable qui commencera la partie en génerant un mot aléatoire et elle va aussi transformer les mots en underscrore et enfin générer des tableaux pour chacun d'entre eux.
let start = document.getElementById("start");
//on déclare une variable en dehors de toutes functions afin quelle soit accessible partout.
// réponse est la variable qui stockera le mot.
let reponse;
//mots est la variable qui contient des mots ans un tableau
let mots = ["adoption", "amitié", "cabane", "chapeaux","citrouille","corbeau","dictionnaire","figurine","indépendence","journal","lunettes","mercantile","pasteur","ruisseau","tableau","vélocipède"];
//count est la variable qui servira de compteur
let count = 0;
//stockUnderscore est la variable qui stockera les underscores dans un tableau
let stockUnderscore = [];

//la function drawCanvas initialise (effacement) le Canvas
function drawCanvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
  }
//la function 
function startGame() {
    //lorsque l'on clic sur start on veut que l'affichage s'initialise
    ecran.textContent = "";
    //on efface le dessin
    drawCanvas();
    //on stock dans la variable réponse le mot random
    reponse = mots[Math.floor(Math.random() * mots.length)];

    console.log("Le mot random est "+reponse);
    //on stock dans la variable stock le mot random qu'on transforme en tableau
    stock = reponse.split('');
    console.log(stock);
    
    //on parcours chaque valeur du tableau
    for(let i = 0; i < stock.length; i++){
        //on appel le contenu textuel de la variable ecran (comme la variable ecran cible un id html, le contenu s'affichera dans la balise html qui contient cet id html)
        //de plus, on ajoute dans la variable ecran.textContent "-". on ajoutera "-" jusqu'a la fin de la longueur de stock
        //variante de la ligne ci-dessous: ecran.textContent = ecran.textContent + "-"
        //imaginons que ecran.textContent = 0 après que ecran.textContent = ecran.textContent + "-" ecran.textContent est maintenant = "0-"
        ecran.textContent += "-";

    }
    //la variable stockUnderscore stock "-" qu'on transforme en tableau
    stockUnderscore = ecran.textContent.split('');
        console.log(stockUnderscore);
}
//on ajoute un évenement au click de la variable start en appelant la function startGame
start.addEventListener("click", startGame);

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
 