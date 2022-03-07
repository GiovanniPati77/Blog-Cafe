let mensaje = document.querySelector("#mensaje");
let boton = document.querySelector("#boton");

boton.addEventListener("click", (event) => {
    event.preventDefault()
  var expRegCorreo = /^\w+@(\w+\.)+\w{2,4}$/;

  const formulario = document.querySelector("#formulario");
  const nombreUsuario = document.querySelector("#nombre");
  const emailUsuario = document.querySelector("#e-mail");
  if (nombreUsuario.value === "") {
    alert("Nombre es requerido");
    nombreUsuario.focus();
    return false;
  }
 if (emailUsuario.value === ""){
    alert("El campo correo es requerido")
    emailUsuario.focus()
    return false
 }
 if(!expRegCorreo.exec(emailUsuario.value)){
     emailUsuario.focus()
     alert("Correo invalido")
     console.log(expRegCorreo)
     return false
 }
 location.reload(true)
 return true
});
