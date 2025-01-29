// Crea un Array de amigos vacío.
let amigos = [];
console.log(amigos);

// crea una funcion que evalue que amigos no sea espacios vacios ni caracteres especiales
function validarAmigo() {
  let amigo = document.getElementById("amigo");
  const pattern = new RegExp("^[a-zA-Zñ ]+$");
  if (amigo.value.trim().length == 0) {
    return false;
  }
  if (!pattern.test(amigo.value)) {
    alert("No se permiten caracteres especiales; Por favor, inserte un nombre.");
    return false;
  }
}

// Crea una función llamada agregarAmigo que reciba un nombre como argumento y lo agregue al Array de amigo
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value.toUpperCase();
  if (validarAmigo() == "") {
    alert("No se permiten espacios vacios; Por favor, inserte un nombre.");
    console.log("no agregó nada al array");
    return;
  }
  if (amigos.includes(amigo.toUpperCase())) {
    console.log("El amigo ya existe");
    alert("El amigo ya existe");
    console.log(amigos);
  } else {
    amigos.push(amigo.toUpperCase());
    console.log(amigos);
    listarAmigos(amigo);
  }

  // Limpiar el input después de agregar el nombre
  document.getElementById("amigo").value = '';
}

function listarAmigos(amigo) {
  let elementoUL = document.getElementById("listaAmigos");
  let listaLi = document.createElement("li");
  elementoUL.appendChild(listaLi);
  listaLi.innerHTML = amigo;
}

function arrayVacio() {
  let sorteo = document.getElementById("sorteo");
  if (amigos.length == 0) {
    console.log("El array esta vacio");
    alert("El array esta vacio");
  }
}

function sortearAmigo() {
  arrayVacio();
  let sorteo = document.getElementsByClassName("button-draw");
  if (amigos.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    console.log("Amigo sorteado: " + amigoSorteado);
    let amigoSecreto = document.querySelector("h4");
    amigoSecreto.innerHTML = `El amigo secreto ${amigoSorteado} 🎁`;
    return;
  }
}
