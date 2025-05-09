


let panier = 0;
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function() {
      panier++;
      document.querySelector('.cart-count').textContent = panier;
      this.textContent = '✓ Ajouté';
      setTimeout(() => this.textContent = 'Ajouter au panier', 1500);
  });
});