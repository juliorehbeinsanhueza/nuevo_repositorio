
# Programa de Gestión de Amigos

Este programa permite gestionar una lista de amigos, agregar nuevos amigos, listar los amigos agregados y realizar un sorteo para seleccionar un amigo al azar.

## Funcionalidades

1. **Agregar Amigos**
2. **Listar Amigos**
3. **Verificar si el Array está Vacío**
4. **Sortear un Amigo**

## Descripción de las Funciones

### 1. Agregar Amigos

- **Función:** `agregarAmigo()`
- **Descripción:** Esta función permite agregar un nuevo amigo a la lista. Primero, valida que el nombre no esté vacío y que no contenga caracteres especiales. Luego, verifica si el amigo ya existe en la lista. Si no existe, lo agrega y actualiza la lista visualmente.
- **Pasos:**
  1. Obtiene el valor del input con id `amigo`.
  2. Valida el nombre usando la función `validarAmigo()`.
  3. Verifica si el nombre ya existe en el array `amigos`.
  4. Si no existe, agrega el nombre al array y llama a `listarAmigos()` para actualizar la lista visual.
  5. Limpia el input después de agregar el nombre.

### 2. Validar Amigo

- **Función:** `validarAmigo()`
- **Descripción:** Esta función valida que el nombre del amigo no esté vacío y que no contenga caracteres especiales.
- **Pasos:**
  1. Obtiene el valor del input con id `amigo`.
  2. Verifica que el valor no esté vacío.
  3. Verifica que el valor no contenga caracteres especiales usando una expresión regular.
  4. Retorna `false` si alguna de las validaciones falla.

### 3. Listar Amigos

- **Función:** `listarAmigos(amigo)`
- **Descripción:** Esta función actualiza la lista visual de amigos en el documento HTML.
- **Pasos:**
  1. Obtiene el elemento `ul` con id `listaAmigos`.
  2. Crea un nuevo elemento `li`.
  3. Agrega el nuevo elemento `li` al `ul`.
  4. Establece el contenido del `li` con el nombre del amigo.

### 4. Verificar si el Array está Vacío

- **Función:** `arrayVacio()`
- **Descripción:** Esta función verifica si el array `amigos` está vacío y muestra una alerta si es así.
- **Pasos:**
  1. Verifica si el array `amigos` está vacío.
  2. Muestra un mensaje en la consola y una alerta si el array está vacío.

### 5. Sortear un Amigo

- **Función:** `sortearAmigo()`
- **Descripción:** Esta función selecciona un amigo al azar de la lista y muestra el resultado en el documento HTML.
- **Pasos:**
  1. Llama a la función `arrayVacio()` para verificar si el array está vacío.
  2. Si el array no está vacío, selecciona un índice aleatorio.
  3. Obtiene el nombre del amigo en el índice aleatorio.
  4. Muestra el nombre del amigo sorteado en un elemento `h4` del documento HTML.

## Uso

1. **Agregar un Amigo:**
   - Escribe el nombre del amigo en el input con id `amigo`.
   - Haz clic en el botón para agregar el amigo.

2. **Listar Amigos:**
   - Los amigos agregados se listarán automáticamente en el elemento `ul` con id `listaAmigos`.

3. **Sortear un Amigo:**
   - Haz clic en el botón para realizar el sorteo.
   - El nombre del amigo sorteado se mostrará en un elemento `h4`.

## Requisitos

- Un archivo HTML con los elementos necesarios (`input`, `ul`, `h4`, etc.).
- Un archivo JavaScript (`app.js`) con las funciones descritas.

## Ejemplo de HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Amigos</title>
    <script src="app.js" defer></script>
</head>
<body>
    <input type="text" id="amigo" placeholder="Nombre del amigo">
    <button onclick="agregarAmigo()">Agregar Amigo</button>
    <ul id="listaAmigos"></ul>
    <button class="button-draw" onclick="sortearAmigo()">Sortear Amigo</button>
    <h4></h4>
</body>
</html># amigo_secreto
# amigo_secreto
# amigo_secreto
# amigo_secreto
# nuevo_repositorio
