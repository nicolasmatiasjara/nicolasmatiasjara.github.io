document.addEventListener("DOMContentLoaded", function(){
  arrJuegos = JSON.parse(arrJuegos);
  var precio = 50 ;
  var seleccionTipo = document.getElementById("envio");
  var radioDigital = document.getElementById("digital");
  var radioFisico = document.getElementById("fisico");
  var sumatoriaPago = document.getElementById("calculo-pago");
  var seleccionPrecio = document.getElementById("precio-xu");
  var seleccionIva = document.getElementById("iva");
  var seleccionPreciofinal = document.getElementById("precio-final");
  var seleccionCantidad = document.getElementById("precio-cantidad");
  var campoCantidad = document.getElementById("cantidad");
  var envioComun = document.getElementById("bronce");
  var envioEspecial = document.getElementById("plata");
  var envioPremium = document.getElementById("oro");
  var campoEnvio = document.getElementById("precio-envio");
  var seleccionEnvio = document.getElementById("seleenvio");
  var envio = 0;
  var cantidad = 0;
  var seleccionPrecio = 0;


function calculcarCostos(){
  seleccionPrecio = precio;
  var precioxcantidad = precio * cantidad;
  var precioenvio = precioxcantidad * envio;
  var precioconenvio = precioenvio + precioxcantidad;
  var iva = precioconenvio * 0.22 ;
  var preciofinal = precioconenvio + iva ;
preciofinal = parseInt (preciofinal)



  seleccionCantidad.innerHTML = "US$" + precioxcantidad;
  campoEnvio.innerHTML = "US$" + precioenvio;
  seleccionIva.innerHTML = "US$" + iva;
  seleccionPreciofinal.innerHTML = "US$" + preciofinal;

}
  campoCantidad.addEventListener("click", function(){
    cantidad = campoCantidad.value;
    cantidad = parseInt(cantidad);
    calculcarCostos();

  });

  radioDigital.addEventListener("click", function(){
      seleccionTipo.style.display="none"
  });

  radioFisico.addEventListener("change", function(){
      seleccionTipo.style.display="block";
  });

  envioEspecial.addEventListener("click", function(){
      envio = 0.02;

      calculcarCostos();
  });

  envioComun.addEventListener("click", function(){
      envio = 0.005;

      calculcarCostos();
  });

  envioPremium.addEventListener("click", function(){
      envio = 0.05;

      calculcarCostos();
  });
});
