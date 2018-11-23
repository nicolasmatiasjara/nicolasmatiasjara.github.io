document.addEventListener("DOMContentLoaded", function(){


  arrJuegos = JSON.parse(arrJuegos);


  var vistaJuego = document.getElementById("vista-juego");

  for (var i = 0; i < arrJuegos.length; i++) {
    vistaJuego.innerHTML = vistaJuego.innerHTML + "<h3>" + arrJuegos[i].nombre +"</h3>" +
    "<section>" + "<img src='" + arrJuegos[i].foto + "'>" + "</section>"+
     "<b>" + arrJuegos[i].descripcion + "</b>" +
     "<h2>" + arrJuegos[i].precio + "</h2>" +
     "<h5>" + arrJuegos[i].categoria + "</h5>" +
     "<h6>" + arrJuegos[i].calificacion + "</h6>" +
     "<div>" + "<"+"img src='" + arrJuegos[i].min1 + "'>" + "<br>" +
     "<"+"img src='" + arrJuegos[i].min2 + "'>" + "<br>" +
     "<"+"img src='" + arrJuegos[i].min3 + "'>" + "<br>" +
     "<"+"img src='" + arrJuegos[i].min4 + "'>" + "</div>";
  }
});
