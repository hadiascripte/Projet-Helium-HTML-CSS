// Pour commenter une seule ligne
// alert("salut Js");
/*Pour commenter plusieurs lignes*/

// ************ La syntaxe ************

// console.log("Coucou");
// let maSuperVariable = "Hello";

// ************ La variable ************ C'est un espace de stockage où l'on y met des données
// A ne pas utiliser
var unTexte = "Voici un texte";
// console.log(unTexte);

// ici la donnée CONST ne bougera pas. On ne peut pas changer le contenu de la variable. On devra obligatoirement aller le modifier dans la CONST d'origine.
const prenom = "justine";
// console.log(prenom);

// Ici LET permet de modifier le contenu de la variable en indiquant simplement le nouveau contenu avec le nom de la vaiable en question. Nous n'avons pas besoin d'aller modifier le contenu de la variable dans le LET initial
// Attention il faut que la console.log soit fait après la saisie de la variable pour que cette dernière soit affichée dans la console.
let unChiffre = 24;
unChiffre = 22;
// console.log(unChiffre);

let chaine = "Je suis l'une des chaines de caractères";

// ************ La concaténation ************

//Ajouter des variables avec des + (pour des petites concaténations.)
let nouvelleChaine =
    "Chaine précédente: " +
    chaine +
    ". J'ajoute encore un contenu. Que je dois toujours mettre entre guillemets sans oublier d'ajouter les points et les espaces.";
// console.log(nouvelleChaine);

// Ajouter des variables avec `` (en ouvertoure) et ${ qui contiendra le nom de la variable
let autreConcatenation = `Chaine précédente: ${chaine}. J'ajoute encore un contenu. Que je dois toujours mettre entre guillemets sans oublier d'ajouter les points et les espaces.`;

// console.log(nouvelleChaine);
// console.log(autreConcatenation);

//  *********** Les types de données ***********

// Chaine de caratcères: avec guillemets ""
let string = "Je suis une chaine de caractères";
// Nombres: sans guillemets
let number = 24;
// Booléans: sans guillemets
let boolean = true;
// Tableaux: avec crochets [] et les valeurs s'écrivent allignées
let array = ["je", "suis", 47, true];
// Objets: avec accolades {} et les valeurs s'écrivent en colonne avec une clé et une valeur.
let object = {
    prenom: "audrey",
    age: 33,
    ville: "Bordeaux",
};
// Lorsque l'on ne sait pas encore le contenu d'une variable on peut l'écrire comme cela pour la mettre dans la mmémoire.
let arbre;
// Puis plus tard on ajoute
// arbre = "sapin";
// console.log(arbre);

//  *********** Les opérateurs ***********
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// console.log(4 % 5);
// console.log(4 ** 5);

//  *********** Les opérateurs d'affectations ***********

let total = 0;
total = total + 1;
// Pour ajouter directement 1 ou soustraitre 1
// total++
// total--
// Pour faire des opérations simplifier:
total += 5;
total -= 2;
total *= 2;

// console.log(total);

//  *********** Les structures de contrôle (if/else) ***********
let x = 4;
let y = 2;

// La syntaxe est la suivante:
// if (x > y) {
//     alert("Yes x plus gros que y");
// }
// else {
//       alert("Y plus gros que X");
//}

// *********************************************
// else if (y > x) {
//     alert("Oui Y est plus gros que X");
// } else {
//     alert("Oui ils sont égaux");
// }

// Pour tester si une variable est "true"
if (x) {
    //     console.log("X existe bien !");
}

// Ceci ne calcule pas l'égalité
// if ((x = y)) {
//     console.log("Ils sont égaux");
// }

// *********************************************
// Pour tester l'égalité en type (string, number) et en valeur.
// if (x === y) {
//     console.log("Ils sont égaux !");
// }
// else {
//     console.log("Ils ne sont pas égaux !");
// }

// *********************************************
// Pour tester l'égalité de valeur uniquement, même si le type est différent car ce dernier ne sera pas prit en compte.
if (x == y) {
    //     console.log("Ils sont égaux !");
    // } else {
    //     console.log("Ils ne sont pas égaux !");
}

// *********************************************
// || : ou
// && : et
// Pour OU l'une des conditions doit être remplie
// if (x < y || x > 1) {
//     console.log("Oui");
// }
// Pour ET il faut que toutes les conditions soient réunies
// if (x > y && x > 2) {
//     console.log("Oui");
// }
// ************ La fonction ************ Elle exécute des algorythmes de chose à faire

//  *********** La fonction classique ***********

function faireQuelqueChose() {
    console.log("Je fais quelque chose");
    console.log(5 + 6);
    // Return sert a retourner une fonction ou à arrêter une éxécution
    //     return;
    alert("Calcul terminé !");
}
// Attention, il faut impérativement "appeler" la fonction pour qu'elle soit jouée.
// faireQuelqueChose()

//  *********** La fonction flêchée ***********
// Ici le paramètre est (a,b). La flêche (= et >) indique qu'il s'agit ici d'une fonction
const addition = (a, b) => {
    console.log(a + b);
};
// Ici on appelle la fonction en lui donnant les nombres voulus
addition(4, 3);

// ************ La portée des varaiables ************
function add2() {
//     Cette variable déclaré dans cette fonction, si on lui demande un console.log il ne sera pas lu dans la console parce qu'il n'existe que dans les frontières de sa fonction 
    let num = 4;
    console.log(num + 2);
}
// add2()
// console.log(num) (Il ne sera pas lu dans la console et sera noté en non défini)