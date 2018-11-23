      var clic = 1;
      var cancelar = "CANCELAR";
      var compra = "COMPRAR";

      function divLogin(){   // funcion para mostrar y ocultar el cuadro comentario

        if(clic==1){

          document.getElementById("caja").style.height = "350px";
          document.getElementById("inp").style.display = "block";
          document.getElementById("inp2").style.display = "block";
          document.getElementById("inp3").style.display = "block";
          document.getElementById("inp4").style.display = "block";

        clic = clic + 1;

        } else{

          document.getElementById("caja").style.height = "0px";
          document.getElementById("inp").style.display = "none";
          document.getElementById("inp2").style.display = "none";
          document.getElementById("inp3").style.display = "none";
          document.getElementById("inp4").style.display = "none";

        clic = 1;

   }

}
      function vistaPago(){  // funcion para mostrar y ocultar la vista del pago y cambiar el texto del boton comprar

        if(clic==1){

          document.getElementById("caja2").style.display = "block";
          document.getElementById('cancelar').innerHTML = cancelar;

          clic = clic + 1;

        } else{

          document.getElementById("caja2").style.display = "none";
          document.getElementById('cancelar').innerHTML = compra;
          clic = 1;

        }

    }
