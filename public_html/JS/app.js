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

do {
    nbrtour++;
    nbrrentre = prompt("Tours " + nbrtour + "\nSaississez votre nombre :");
    if (nbrrentre > nbrchercher) {
        alert("c'est plus petit");
    } else if (nbrrentre < nbrchercher) {
        alert("c'est plus grand");
    }
} while (nbrrentre != nbrchercher)

alert("c'est gagné en " + nbrtour + " tour(s)");

