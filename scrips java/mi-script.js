document.addEventListener("DOMContentLoaded", function(){
  var juego1= {'nombre':'Fifa 2019', 'descripcion':'Aca va el texto descriptivo', 'valoracion':'8'}


  var elemenHTMLNombre = document.getElementById("nombre-juego");
  elemenHTMLNombre.innerHTML = juego1.nombre;

  var elemenHTMLDescripcion = document.getElementById("desc-juego");
  elemenHTMLDescripcion.innerHTML = juego1.descripcion;

  var elemenHTMLValoracion = document.getElementById("valoracion-juego");
  elemenHTMLValoracion.innerHTML = juego1.valoracion;

  var campoCosto = document.getElementById("costo-juego");
  var campoCostoFinal = document.getElementById("costo-final-juego");

  campoCostoFinal.addEventListener("click", function(){
    var valorActual = campoCosto.value;
    alert(valorActual);

    //para asignar un valor a un campo: campoCostoFinal.value =
    //obtener el campo id costo-final-juego, y que su valor sea el valor actual *1.22 iva incluido
  });
});
