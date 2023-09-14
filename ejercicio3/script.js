$(document).ready(function () {
    $("#registroForm").submit(function (event) {
        event.preventDefault();
        let nombre = $("#name").val();
        let email = $("#email").val();
        let pais = $("#pais").val();
        
        if (email.includes("@") && email.includes(".")) {
            let mensaje="Bienvenid@ "+nombre;
            Swal.fire("Se registró correctamente", mensaje, "success");
        } else {
            Swal.fire("Ingrese bien su correo", "error");
        }
    });
  });