


let panier = 0;
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', function() {
      panier++;
      document.querySelector('.cart-count').textContent = panier;
      this.textContent = '✓ Ajouté';
      setTimeout(() => this.textContent = 'Ajouter au panier', 1500);
  });
});


function load(){
  document.querySelector(".prealoder").classList.add("hidden");
}

function loader(){
  setInterval(load,2000);
}

window.onload=loader();