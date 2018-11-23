document.addEventListener("DOMContentLoaded", function(){


  arrComentario = JSON.parse(arrComentario);


  var formComentario = document.getElementById("comentario");

  for (var i = 0; i < arrComentario.length; i++) {
    formComentario.innerHTML = formComentario.innerHTML + "<h3>" + arrJuegos[i].nombre +"</h3>" +
    "<section>" + "<img src='" + arrJuegos[i].foto + "'>" + "</section>"+
     "<b>" + arrJuegos[i].descripcion + "</b>" +
     "<h2>" + arrJuegos[i].precio + "</h2>" +
     "<h5>" + arrJuegos[i].categoria + "</h5>" +
     "<h6>" + arrJuegos[i].calificacion + "</h6>" +
     "<div>" + "<"+"img src='" + arrJuegos[i].min1 + "'>" + "<br>" +
     "<"+"img src='" + arrJuegos[i].min2 + "'>" + "<br>" +
     "<"+"img src='" + arrJuegos[i].min3 + "'>" + "<br>" +
     "<"+"img src='" + arrJuegos[i].min4 + "'>" + "</div>" +
     "<button class='" + arrJuegos[i].class + "'>" + arrJuegos[i].btn + "</button>";
  }
});






// <form class="form-comentario" action="index.html" method="post">
//   <p class="dato1">
//     <label for="name">
//       <span>NOMBRE: </span>
//       <strong><abbr title="required">*</abbr></strong>
//     </label>
//     <input type="text" id="name" name="username" maxlength="30" required>
//   </p>
//   <p class="dato2">
//     <label for="mail">
//       <span>E-MAIL: </span>
//       <strong><abbr title="required">*</abbr></strong>
//     </label>
//     <input type="email" id="mail" name="usermail" required>
//   </p>
//   <p class="dato3">
//     <label for="comentario">
//       <span>COMENTARIO: </span>
//       <strong><abbr title="required">*</abbr></strong>
//     </label>
//     <input type="text" id="comentario" name="comentario" maxlength="500" required>
//   </p>
//   <button type="submit" name="ENVIAR" value="ENVIAR" class="button">ENVIAR</button>
// </form>
