//on associe une variable aux ID et aux class qui nous intéresse
let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");
//ecran est la variable qui affichera le texte
let ecran = document.getElementById("ecran");
//stock est la variable qui stockera le mot afin de le transformer en tableau par exemple.
let stock = document.querySelector("ecran");
//input est la variable qui stockera la valeur du champ à saisir ex: input.value
let input = document.getElementById("input");
//submit est la variable qui lancera la function analyz.
let submit = document.getElementById("submit");
//start est la variable qui lancera la function startGame
let start = document.getElementById("start");
//on déclare une variable en dehors de toutes functions afin quelle soit accessible partout.
// réponse est la variable qui stockera le mot.
let reponse;
//mots est la variable qui contient des mots ans un tableau
let mots = ["adoption", "amitie", "cabane", "chapeaux","citrouille","corbeau","dictionnaire","figurine","independence","journal","lunettes","mercantile","pasteur","ruisseau","tableau","velocipede"];
//count est la variable qui servira de compteur
let count = 0;
//stockUnderscore est la variable qui stockera les underscores dans un tableau
let stockUnderscore = [];

//la function drawCanvas initialise (effacement) le Canvas
function drawCanvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
  }
//la function startGame commencera la partie en génerant un mot aléatoire et elle va aussi transformer les mots en underscrore et enfin générer des tableaux pour chacun d'entre eux.
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
//on ajoute un évenement au click à la variable start en appelant la function startGame
start.addEventListener("click", startGame);

//la function analyz va traiter les informations, remplacer les underscores par les lettres trouvés, générer le dessin du pendu et afficher si le jeux est gagné ou perdu.
function analyz(){
    //la variable trouve est sur true lorsqu'un mot est trouvé et est sur false lorsque qu'aucune lettre est trouvé.
    let trouve = false;
    //on parcours chaque valeur du tableau
    for(i = 0; i < stock.length; i++){
        //Si une des lettres stocké est egal à la lettre envoyé
        if(stock[i] == input.value){
            //la valeur du tableau stockUnderscore est egal à la valeur du tableau stock(n'oublions pas qu'une valeur de tableau a aussi une position)
            //a présent l'une des valeurs de notre tableau stockUnderscore change lorsque une lettre est egal a celle envoyé, maintenant nous voulons l'afficher
            stockUnderscore[i] = stock[i];
            //le texte de la variable ecran est egal au tableau stockUnderscore on y ajoute la méthode join pour annuler les espaces du tableau ici les virgules
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
//on ajoute un évenement au click à la variable submit en appelant la function analyz