/*
Archivo de funcionalidad de la plataforma
Aquí se controla el comportamiento dinámico del sistema
*/

/*
Función que se ejecuta cuando el usuario presiona el botón
"Agregar proyecto".
Su objetivo es leer la información del formulario y mostrar
el proyecto dentro de la página.
*/

function agregarProyecto() {

    // Obtener el nombre del proyecto que escribió el usuario
    let nombre = document.getElementById("nombreProyecto").value;

    // Obtener la descripción del proyecto
    let descripcion = document.getElementById("descripcionProyecto").value;

    // Verificación sencilla para evitar proyectos vacíos
    if(nombre === "" || descripcion === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    /*
    Crear un nuevo contenedor para el proyecto
    */
    let proyecto = document.createElement("div");

    /*
    Construimos el contenido del proyecto utilizando HTML
    */
    proyecto.innerHTML = `
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <hr>
    `;

    /*
    Agregamos el proyecto dentro del área de lista de proyectos
    */
    document.getElementById("listaProyectos").appendChild(proyecto);

    /*
    Limpiamos los campos del formulario para permitir registrar otro proyecto
    */
    document.getElementById("nombreProyecto").value = "";
    document.getElementById("descripcionProyecto").value = "";

}
