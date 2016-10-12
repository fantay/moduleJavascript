/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var obj = {
    titre : "Kung fu panda",
    anneeProd : 2000,
    nbLiens : 20,
    realisateurs : [{nom:'disney'},{nom:'pixar'}],
    affiche : function(){
        return alert(this.titre + " " + this.anneeProd + " " + this.nbLiens + " " + this.realisateurs[0].nom + " " + this.realisateurs[1].nom);
    }
};

obj.affiche();