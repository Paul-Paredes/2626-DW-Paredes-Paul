// Selección de elementos del HTML
const formularioRegistro = document.getElementById("formularioRegistro");
const nombreRegistro = document.getElementById("nombreRegistro");
const descripcionRegistro = document.getElementById("descripcionRegistro");
const categoriaRegistro = document.getElementById("categoriaRegistro");
const mensajeValidacion = document.getElementById("mensajeValidacion");
const listaRegistros = document.getElementById("listaRegistros");
const totalRegistros = document.getElementById("totalRegistros");
const mensajeVacio = document.getElementById("mensajeVacio");

// Variable para contar los registros creados
let contadorRegistros = 0;

// Evento submit del formulario
formularioRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = nombreRegistro.value.trim();
    const descripcion = descripcionRegistro.value.trim();
    const categoria = categoriaRegistro.value.trim();

    // Validación de campos vacíos
    if (nombre === "" || descripcion === "" || categoria === "") {
        mensajeValidacion.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Por favor, complete todos los campos antes de registrar el producto.
            </div>
        `;
        return;
    }

    // Ocultar mensaje de lista vacía
    mensajeVacio.style.display = "none";

    // Crear columna contenedora
    const columna = document.createElement("div");
    columna.className = "col-md-6 mb-3";

    // Crear tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.className = "card h-100 shadow-sm";

    // Crear cuerpo de la tarjeta
    const cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.className = "card-body";

    // Crear título
    const titulo = document.createElement("h4");
    titulo.className = "card-title";
    titulo.textContent = nombre;

    // Crear descripción
    const textoDescripcion = document.createElement("p");
    textoDescripcion.className = "card-text";
    textoDescripcion.textContent = descripcion;

    // Crear categoría
    const textoCategoria = document.createElement("p");
    textoCategoria.className = "badge bg-primary";
    textoCategoria.textContent = categoria;

    // Crear botón eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-danger btn-sm d-block mt-3";
    botonEliminar.textContent = "Eliminar";

    // Evento click para eliminar registro
    botonEliminar.addEventListener("click", function() {
        listaRegistros.removeChild(columna);
        contadorRegistros--;
        actualizarTotal();

        mensajeValidacion.innerHTML = `
            <div class="alert alert-warning" role="alert">
                El producto fue eliminado correctamente.
            </div>
        `;

        if (contadorRegistros === 0) {
            mensajeVacio.style.display = "block";
        }
    });

    // Agregar elementos a la tarjeta
    cuerpoTarjeta.appendChild(titulo);
    cuerpoTarjeta.appendChild(textoDescripcion);
    cuerpoTarjeta.appendChild(textoCategoria);
    cuerpoTarjeta.appendChild(botonEliminar);

    tarjeta.appendChild(cuerpoTarjeta);
    columna.appendChild(tarjeta);

    // Agregar tarjeta a la lista
    listaRegistros.appendChild(columna);

    // Aumentar contador
    contadorRegistros++;
    actualizarTotal();

    // Mensaje de éxito
    mensajeValidacion.innerHTML = `
        <div class="alert alert-success" role="alert">
            Producto registrado correctamente.
        </div>
    `;

    // Limpiar formulario
    formularioRegistro.reset();
});

// Función para actualizar el total de registros
function actualizarTotal() {
    totalRegistros.textContent = contadorRegistros;
}
