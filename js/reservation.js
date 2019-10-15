 $(document).ready(function(){
console.log("chargement Réservation");


// //vériication supporte local storage ou session storage
// // variable de stockage de données
if (window.sessionStorage) {
  console.log("Browser supports sessionStorage");
//   // Good to go
 } else {
  console.log("No sessionStorage support");
}

var Réservation = {
    
    nom : null, 
    prenom : null, 
    détails: null, 
   
  
   
    
    
    
    Miseencache : function(){
   document.getElementById('submit_canvas').addEventListener('click',function () {

let infosreservation= {
   nom:document.getElementById('lastname').value,
  prenom:document.getElementById('firstname').value,
}

let objLinea = JSON.stringify(infosreservation);

sessionStorage.setItem("obj",objLinea);

objLinea = sessionStorage.getItem("obj");

 infosreservation = JSON.parse(objLinea);



document.getElementById('infor').innerHTML = "Réservation " + "pour" + document.getElementById('lastname').value + " " + " "+ document.getElementById('firstname').value;
        
        });
    },
};

$(document).ready(function(){
    Réservation.Miseencache();
});




});

