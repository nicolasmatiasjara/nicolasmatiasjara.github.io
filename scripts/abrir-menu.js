var clic = 1;

function menuDesplegable(){   // ocultar menu

  if(clic==1){
    document.getElementById("des-m").style.display = "block";
    document.getElementById("nav-ul").style.height = "200";

  clic = clic + 1;

  } else{

      document.getElementById("des-m").style.display = "block";

  clic = 1;

  }
}
