// Almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value; // Obtener el nombre del input
    
    if (amigo === '') { // Verificar si el campo está vacío
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo); // Agregar el nombre a la lista
        mostrarLista(); // Mostrar la lista actualizada
    }
    
    
    document.getElementById('amigo').value = ''; // Limpiar el input
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // 1. Verificar si hay amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return; // Salir de la función si no hay amigos
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "El amigo sorteado es: " + amigoSorteado;
}

