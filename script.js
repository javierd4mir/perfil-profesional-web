/*
Sistema de gestión de proyectos con LocalStorage
Versión estable y robusta (manipulación directa del DOM)
*/

document.addEventListener("DOMContentLoaded", function() {

    console.log("Sistema cargado correctamente");

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

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    proyectos.forEach(function(proyecto, index) {

        let div = document.createElement("div");

        let titulo = document.createElement("h3");
        titulo.textContent = proyecto.nombre;

        let descripcion = document.createElement("p");
        descripcion.textContent = proyecto.descripcion;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {
            eliminarProyecto(index);
        });

        let separador = document.createElement("hr");

        div.appendChild(titulo);
        div.appendChild(descripcion);
        div.appendChild(botonEliminar);
        div.appendChild(separador);

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
