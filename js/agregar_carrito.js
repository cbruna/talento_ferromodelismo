document.addEventListener("DOMContentLoaded", () => {
    // guardo en una constante, un array de etiquetas 
    // es un nodeList del tipo element, adentro guarda todas las anclas que encuentra que tengan la clase enlace-agregar
    const enlacesAgregar = document.querySelectorAll(".enlace-agregar");
    console.log(enlacesAgregar);
    
    // recorrer la lista de nodos (array)
    // y para cada (ancla):
    enlacesAgregar.forEach(ancla => {
        // quedate escuchando si alguien hace click en esa ancla
        ancla.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = ancla.getAttribute("data-nombre");
            const precio = ancla.getAttribute("data-precio");
            console.log(nombre);
            console.log(precio);

            // Obtener el carrito actual de localStorage
            // dame el item carrito de la memoria local del navegador y sino dame un array vacio
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            console.log(carrito);
            
            // Agregar el producto al carrito
            carrito.push({ nombre, precio });

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${nombre} se agregó al carrito.`);
        });
    });
});
