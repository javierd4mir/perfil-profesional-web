/*
Sistema de gestión de proyectos con persistencia en LocalStorage
*/

document.addEventListener("DOMContentLoaded", function() {

    console.log("Sistema cargado");

    // Ver qué hay en LocalStorage
    console.log(localStorage.getItem("proyectos"));

    mostrarProyectos();

    const boton = document.getElementById("btnAgregar");
    boton.addEventListener("click", agregarProyecto);

});


/*
Función para agregar un proyecto
*/
function agregarProyecto() {

    let nombre = document.getElementById("nombreProyecto").value;
    let descripcion = document.getElementById("descripcionProyecto").value;

    if(nombre === "" || descripcion === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    // Crear objeto proyecto
    let proyecto = {
        nombre: nombre,
        descripcion: descripcion
    };

    // Obtener proyectos existentes o iniciar arreglo vacío
    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    // Agregar nuevo proyecto
    proyectos.push(proyecto);

    // Guardar en LocalStorage
    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    // Limpiar campos
    document.getElementById("nombreProyecto").value = "";
    document.getElementById("descripcionProyecto").value = "";

    // Actualizar vista
    mostrarProyectos();

}

/*
Función para mostrar los proyectos en pantalla
*/
function mostrarProyectos() {

    let lista = document.getElementById("listaProyectos");

    // Limpiar contenido antes de volver a renderizar
    lista.innerHTML = "";

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    proyectos.forEach(function(proyecto) {

        let div = document.createElement("div");

        div.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
            <hr>
        `;

        lista.appendChild(div);

    });

}
