// cart.js

let cart = [];

const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeModalBtn = document.getElementById('close-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

cartBtn.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden');
});

cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.add('hidden');
    }
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    if (product) {
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartUI();
        
        // Petit feedback visuel (optionnel)
        const countEl = document.getElementById('cart-count');
        countEl.classList.add('animate-ping');
        setTimeout(() => countEl.classList.remove('animate-ping'), 300);
    }
}
function updateCartUI() {
    // Sécurité : si 'cart' n'existe pas, on le récupère
    if (typeof cart === 'undefined') {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
    }

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center text-sm">Votre panier est vide.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const itemDiv = document.createElement('div');
            // Ajout de la classe article-panier
            itemDiv.className = 'article-panier flex justify-between items-center mb-3 pb-3 border-b text-sm md:text-base';
            
            // On ajoute onclick directement sur le bouton
            itemDiv.innerHTML = `
                <div>
                    <h4 class="font-bold text-gray-800">${item.name}</h4>
                    <p class="text-xs md:text-sm text-gray-500">${item.price} FCFA x ${item.quantity}</p>
                </div>
                <div class="flex items-center gap-3">
                    <span class="font-bold text-indigo-600">
                        ${itemTotal.toFixed(2)} FCFA
                    </span>
                    <!-- BOUTON AVEC ONCLICK DIRECT -->
                    <button onclick="supprimerArticle(${index})" class="text-red-500 hover:text-red-700 text-xl font-bold cursor-pointer">
                        &times;
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }

    cartTotal.textContent = totalPrice.toFixed(2) + ' FCFA';
}
   
// ---------------------------------------------------------
// LOGIQUE DE SUPPRESSION (À mettre dans app.js ou cart.js)
// ---------------------------------------------------------

// Fonction de suppression simple et directe
function supprimerArticle(index) {
    // 1. On supprime l'article du tableau 'cart' à la position 'index'
    cart.splice(index, 1);

    // 2. On met à jour le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // 3. On rafraîchit l'affichage du panier
    updateCartUI();
}