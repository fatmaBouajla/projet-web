document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('show');
  this.classList.toggle('open');
});

// Header qui change au scroll
window.addEventListener('scroll', function() {
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
});

// Compteur de panier
let panier = 0;
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function() {
      panier++;
      document.querySelector('.cart-count').textContent = panier;
      this.textContent = '✓ Ajouté';
      setTimeout(() => this.textContent = 'Ajouter au panier', 1500);
  });
});