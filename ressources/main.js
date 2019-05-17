var input = document.getElementById("champ-input");
var compareLetter = [];

document.getElementsByTagName("body").onload = loadDoc();

// Onclick launch loadDoc, get what's inside the doc

function loadDoc() {
  var xhttp = new XMLHttpRequest();  
  xhttp.onreadystatechange = function() {    
    if (this.readyState == 4 && this.status == 200) {

      var arrayLetters = [];
      var listeVille = this.responseText;  
      var arrayVille = listeVille.split("\r\n");


      //Récupération de l'input 

      input.onkeyup = function() {
        arrayLetters = this.value;

        // Si la valeur de l'input est suppérieurs a 1, on peut lancer la recherche

        if (arrayLetters.length > 1) {
          var arraySorted = [];
          //console.log(spliceArraySorted);
          for (var i = 0; i < arrayVille.length ; i++) { 

            // Si l'input vaut "X" a l'index 0 de chaque chaîne de caractère, l'isoler dans un tableau.
            
            if (arrayVille[i].slice(0, arrayLetters.length) == arrayLetters) {
                arraySorted.push(arrayVille[i]);
                if (arraySorted.length == arrayVille.length) {
                  $('#ten-results').text("");
                } else {                  
                  $('#ten-results').html("<a href=\"#\"><p>"+arraySorted.slice(0,10).join("</p></a><a href=\"#\"><p>")+"</p></a>");                      
                }                                 
            }                        
          } 

        } else {
          $('#ten-results').text("");
        }   
      }      
    }
  };
  xhttp.open("GET", "ressources/liste.txt", true);
  xhttp.overrideMimeType("text/plain");
  xhttp.send();
}






