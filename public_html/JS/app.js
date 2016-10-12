/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var obj = {
//    titre : "Kung fu panda",
//    anneeProd : 2000,
//    nbLiens : 20,
//    realisateurs : [{nom:'disney'},{nom:'pixar'}],
//    affiche : function(){
//        return this.titre + " " + this.anneeProd + " " + this.nbLiens + " " + this.realisateurs[0].nom + " " + this.realisateurs[1].nom;
//    }
//};
//alert(obj.affiche());


var calnbr = Math.random() * 100 + 1;
var nbrchercher = Math.floor(calnbr);
var nbrtour = 0;
var nbrrentre;
var message = "Tours " + nbrtour + "\nSaississez votre nombre :";


do {
    nbrtour++;
    nbrrentre = prompt(message);
    if (nbrrentre > nbrchercher) {
        alert("c'est plus petit");
    } else if (nbrrentre < nbrchercher) {
        alert("c'est plus grand");
    }
} while (nbrrentre != nbrchercher)

switch (nbrtour) {
    case 1:
        alert("GENIAL\nc'est gagné en " + nbrtour + " tour(s)");
        break;
    case 2:
        alert("EXELLENT\nc'est gagné en " + nbrtour + " tour(s)");
        break;
    case 3:
        alert("MAGNIFIQUE\nc'est gagné en " + nbrtour + " tour(s)");
        break;
    case 4:
        alert("FORMIDABLE\nc'est gagné en " + nbrtour + " tour(s)");
        break;
    case 5:
        alert("SUPER\nc'est gagné en " + nbrtour + " tour(s)");
        break;
    case 6:
        alert("BRAVO\nc'est gagné en " + nbrtour + " tour(s)");
        break;
    default :
        alert("c'est gagné en " + nbrtour + " tour(s)\n Tu peux faire mieux");
        break;
}


