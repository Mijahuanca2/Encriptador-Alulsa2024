
function encriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter")
                        .replace(/i/igm,"imes")
                        .replace(/a/igm,"ai")
                        .replace(/o/igm,"over")
                        .replace(/u/igm,"ufat");
    
    document.getElementById("muñeco").style.display= "none";
    document.getElementById("mensajed").style.display= "none";
    document.getElementById("txtarea").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";
    document.getElementById("txtarea").style.height="auto";
    inputText.value="";
}
function desencriptar() {
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtDesencriptado = texto.replace(/enter/igm,"e")
                                .replace(/over/igm,"o")
                                .replace(/imes/igm,"i")
                                .replace(/ai/igm,"a")
                                .replace(/ufat/igm,"u");
    
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("mensajed").style.display = "none";
    document.getElementById("txtarea").innerHTML = txtDesencriptado;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("txtarea").style.height="auto";
    inputText.value="";
}
function copy() {
  var contenido = document.querySelector("#txtarea");
  contenido.select();
  document.execCommand("copy");

  var mensaje = document.querySelector("#mensaje");
  var checkIcon = document.querySelector("#check-icon");

  mensaje.style.display = "block";
  checkIcon.style.display = "inline-block";

  setTimeout(function() {
    mensaje.style.display = "none";
    checkIcon.style.display = "none";
  }, 900);
}









