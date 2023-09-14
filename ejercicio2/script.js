$("#cargar").on("click", function(){
    $.getJSON("personas.json", function(datos){
        $.each(datos.personas, function(i, p){
            var nf = "<tr><td>" + p.nombre + "</td><td>" + p.edad + "</td><td>" + p.Ciudad + "</td></tr>";
            $("#tabla tbody").append(nf);
        });
    });
    Swal.fire(
        'Correcto!',
        'Se han cargado los datos correctamente',
        'success'
      )
});
