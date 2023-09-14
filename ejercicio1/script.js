let usuarios = document.getElementById("usuarios");

    $.getJSON("usuarios.json", function(u){
        $.each(u.usuarios, function(i, item){
            let usuario = document.createElement("div");
        usuario.innerHTML =
          "<ul class='list-group list-group-flush'>" +
          "<li class='list-group-item'> <h3>" +
          item.nombre +
          "</h3></li>" +
          "<li class='list-group-item'>Correo: " +
          item.correo +
          "</li>" +
          "<li class='list-group-item'>País: " +
          item.pais +
          "</li>"+
          "</ul>"+"<br/>";
        usuarios.appendChild(usuario);
      });
        });