/*
Control principal del sistema
Se asegura que todo el HTML esté cargado antes de ejecutar código
*/

document.addEventListener("DOMContentLoaded", function() {

    // Referencia al botón
    const boton = document.getElementById("btnAgregar");

    // Evento cuando el usuario hace clic
    boton.addEventListener("click", agregarProyecto);

});

/*
Función que registra un proyecto y lo muestra en pantalla
*/
function agregarProyecto() {

    let nombre = document.getElementById("nombreProyecto").value;
    let descripcion = document.getElementById("descripcionProyecto").value;

    if(nombre === "" || descripcion === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    let proyecto = document.createElement("div");

    proyecto.innerHTML = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <hr>
    `;

    document.getElementById("listaProyectos").appendChild(proyecto);

    // Limpiar campos
    document.getElementById("nombreProyecto").value = "";
    document.getElementById("descripcionProyecto").value = "";

}
