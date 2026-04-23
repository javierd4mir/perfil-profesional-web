/*
Sistema de gestión de proyectos con LocalStorage
*/

document.addEventListener("DOMContentLoaded", function() {

    console.log("Sistema cargado");

    mostrarProyectos();

    const boton = document.getElementById("btnAgregar");
    boton.addEventListener("click", agregarProyecto);

});

/*
Agregar proyecto
*/
function agregarProyecto() {

    let nombre = document.getElementById("nombreProyecto").value;
    let descripcion = document.getElementById("descripcionProyecto").value;

    if(nombre === "" || descripcion === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    let proyecto = {
        nombre: nombre,
        descripcion: descripcion
    };

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    proyectos.push(proyecto);

    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    document.getElementById("nombreProyecto").value = "";
    document.getElementById("descripcionProyecto").value = "";

    mostrarProyectos();

}

/*
Mostrar proyectos
*/
function mostrarProyectos() {

    let lista = document.getElementById("listaProyectos");

    if(!lista) return;

    lista.innerHTML = "";

    let proyectosGuardados = localStorage.getItem("proyectos");

    if(!proyectosGuardados) return;

    let proyectos = JSON.parse(proyectosGuardados);

    proyectos.forEach(function(proyecto, index) {

        let div = document.createElement("div");

        div.innerHTML = `
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>
            <button onclick="eliminarProyecto(${index})">Eliminar</button>
            <hr>
        `;

        lista.appendChild(div);

    });

}

/*
Eliminar proyecto
*/
function eliminarProyecto(index) {

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    proyectos.splice(index, 1);

    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    mostrarProyectos();

}
