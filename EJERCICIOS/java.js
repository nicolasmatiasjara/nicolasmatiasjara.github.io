document.addEventListener("DOMContentLoaded", function function(){
  var elementoLink = document.getElementById("link3");

  elementoLink.addEventListener("mouseenter", function(){
    var listaElementoLink = document.getElementById("link3list");
    listaElementoLink.style.display ="block";
  });
  elementoLink.addEventListener("mouseleave", function(){
    var listaElementoLink = document.getElementById("link3list");
    listaElementoLink.style.display ="none";
  });
});
