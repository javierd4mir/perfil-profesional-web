/*
Sistema de gestión de proyectos
Versión mejorada con tecnologías y ordenamiento
*/

document.addEventListener("DOMContentLoaded", function() {

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
    let tecnologias = document.getElementById("tecnologiasProyecto").value;

    if(nombre === "" || descripcion === "" || tecnologias === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    let proyecto = {
        nombre: nombre,
        descripcion: descripcion,
        tecnologias: tecnologias,
        fecha: new Date().getTime()
    };

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    proyectos.push(proyecto);

    localStorage.setItem("proyectos", JSON.stringify(proyectos));

    document.getElementById("nombreProyecto").value = "";
    document.getElementById("descripcionProyecto").value = "";
    document.getElementById("tecnologiasProyecto").value = "";

    mostrarProyectos();

}

/*
Mostrar proyectos ordenados
*/
function mostrarProyectos() {

    let lista = document.getElementById("listaProyectos");

    if(!lista) return;

    lista.innerHTML = "";

    let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];

    /*
    Ordenar del más reciente al más antiguo
    */
    proyectos.sort((a, b) => b.fecha - a.fecha);

    proyectos.forEach(function(proyecto, index) {

        let div = document.createElement("div");

        let titulo = document.createElement("h3");
        titulo.textContent = proyecto.nombre;

        let descripcion = document.createElement("p");
        descripcion.textContent = proyecto.descripcion;

        let tecnologias = document.createElement("p");
        tecnologias.innerHTML = "<strong>Tecnologías:</strong> " + proyecto.tecnologias;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", function() {
            eliminarProyecto(index);
        });

        div.appendChild(titulo);
        div.appendChild(descripcion);
        div.appendChild(tecnologias);
        div.appendChild(botonEliminar);

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
