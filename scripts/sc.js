document.addEventListener("DOMContentLoaded", function(){

  arrJuegos = JSON.parse(arrJuegos);
  var listaJuegos = document.getElementById("listado-juegos");

  for(var i = 0; i < arrJuegos.length; i++){
    listaJuegos.innerHTML = listaJuegos.innerHTML + "<li class='" + arrJuegos[i].class1 + "'><a href='" + arrJuegos[i].link1 + "'><img src='" + arrJuegos[i].foto + "'><p class='" + arrJuegos[i].class2 + "'>" + arrJuegos[i].nombre + "</p><p class='" + arrJuegos[i].class3 + "'>" + arrJuegos[i].costo +"</p><p class='" + arrJuegos[i].class4 + "'>" + arrJuegos[i].puntuacion +"</p><p>" + arrJuegos[i].categoria + "</p></a></li>";
  }



  //       <button class="button">COMPRAR</button>

});
