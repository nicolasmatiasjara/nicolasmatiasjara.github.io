document.addEventListener("DOMContentLoaded", function(){

  var precio = 50 ;
  var envio = 0;
  var cantidad = 0;
  var seleccionPrecio = 0;
  var tipoEnvio = document.getElementById("t-envio");
  var formatoDigital = document.getElementById("f-digital");
  var formatoFisico = document.getElementById("f-fisico");
  var bronce = document.getElementById("bronce");
  var plata = document.getElementById("plata");
  var oro = document.getElementById("oro");
  var campoEnvio = document.getElementById("envio");
  var seleccionEnvio = document.getElementById("seleenvio");
  var campoCantidad = document.getElementById("cantidad");
  var calculoPago = document.getElementById("calculo-pago");
  var seleccionxCantidad = document.getElementById("precioxcantidad");
  var seleccionPrecio = document.getElementById("precio");
  var seleccionIva = document.getElementById("iva");
  var seleccionPreciofinal = document.getElementById("precio-final");


 function desplegarCampo(){
                                        // desplega campo envio


}
function calculcarCostos(){
  seleccionPrecio = precio;
  var precioxcantidad = precio * cantidad;
  var precioenvio = precioxcantidad * envio;
  var precioconenvio = precioenvio + precioxcantidad;
  var iva = precioconenvio * 0.22 ;
  var preciofinal = precioconenvio + iva ;
preciofinal = parseInt (preciofinal)



  seleccionxCantidad.innerHTML = "US$" + precioxcantidad;
  campoEnvio.innerHTML = "US$" + precioenvio;
  seleccionIva.innerHTML = "US$" + iva;
  seleccionPreciofinal.innerHTML = "US$" + preciofinal;

}
  campoCantidad.addEventListener("click", function(){
    cantidad = campoCantidad.value;
    cantidad = parseInt(cantidad);
    calculcarCostos();

  });

  formatoDigital.addEventListener("click", function(){
      tipoEnvio.style.display="none"
  });

  formatoFisico.addEventListener("click", function(){
      tipoEnvio.style.display="block";
  });

  plata.addEventListener("click", function(){
      envio = 0.02;

      calculcarCostos();
  });

  bronce.addEventListener("click", function(){
      envio = 0.005;

      calculcarCostos();
  });

  oro.addEventListener("click", function(){
      envio = 0.05;

      calculcarCostos();
  });
});
