/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clicBoutton(){
    var titre = document.getElementById("titre");
    var menu = document.getElementsByClassName("menu");
    
    
    titre.innerHTML = "yo Man!!!!";
    
    for ( i=0; i<menu.length; i++){
        var tag = menu[i];
        tag.innerHTML = "Peace";
    }
}

function clicBoutton2(){
    var saisie = document.getElementById("texte").value;
    document.getElementById("titre").innerHTML = saisie.toUpperCase();
}