 // Aquí tu código
 const boton = document.getElementById("agregar");
 const lista = document.getElementById("lista");
 
 boton.addEventListener("click", function() {
   const nuevoElemento = prompt("Introduce un nuevo elemento:");
   if (nuevoElemento) {
     const li = document.createElement('li'); 
     li.textContent = nuevoElemento;
     lista.appendChild(li);
   }
 });