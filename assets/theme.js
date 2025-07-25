document.addEventListener('DOMContentLoaded', function() {
  // Ejemplo: Mostrar alerta al agregar producto al carrito
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      alert('Producto agregado al carrito!');
    });
  });
});