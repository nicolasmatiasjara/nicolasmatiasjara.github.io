var clic = 1;

function divLogin(){

   if(clic==1){

   document.getElementsByClassName('pago-juego').style.display = "run-in";

   clic = clic + 1;

   } else{

       document.getElementsByClassName('pago-juego').style.display = "none";

    clic = 1;

   }

}
