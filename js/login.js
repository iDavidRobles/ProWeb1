$(document).ready(function($){
  $("#formlogin").submit(function(e){
    var usuarioreg = "usuario1";
    var clavereg = "contraseña1";
    var usuario;
    var clave;
    usuario = $("#usuario").val();
    clave = $("#clave").val();
    if(usuario ==  usuarioreg){
      if(clave ==  clavereg){
        e.preventDefault();
        window.location.href = "index.php";
      }else{
        alert("contraseña incorrecta");
      }
    }else{
      alert("usuario incorrecto");
    }
    e.preventDefault();
  });
});
