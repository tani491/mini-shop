// app.js

// --- VARIABLES GLOBALES ---
let currentDetailProduct = null;
let favorites = []; // Stocke les IDs des produits favoris

// --- 1. GESTION DU MENU ---
const btnCategorie = document.getElementById('btn-categorie');
const menuCategorie = document.getElementById('menu-categorie');

btnCategorie.addEventListener('click', (e) => {
    e.stopPropagation();
    menuCategorie.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!menuCategorie.contains(e.target)) {
        menuCategorie.classList.add('hidden');
    }
});

// --- 2. AFFICHAGE DANS LE MENU ---
function afficherProduits(categorie) {
    const zone = document.getElementById('zone-produits');
    const liste = products.filter(p => p.category === categorie);
    zone.innerHTML = '';

    if (liste.length > 0) {
        const titre = document.createElement('h3');
        titre.className = 'text-lg md:text-xl font-bold text-indigo-900 mb-4 border-b pb-2 uppercase tracking-wide';
        titre.textContent = categorie;
        zone.appendChild(titre);

        const grille = document.createElement('div');
        grille.className = 'grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4';

        liste.forEach(p => {
            const prixFormate = typeof p.price === 'number' ? p.price.toFixed(2) + ' €' : p.price;
            
            grille.innerHTML += `
                <div class="relative border rounded-lg p-2 md:p-3 bg-gray-50 hover:shadow-lg transition flex flex-col items-center group">
                    
                    <!-- Icône Voir -->
                    <button onclick="showDetails(${p.id})" class="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition z-10 hover:bg-indigo-100">
                        <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </button>

                    <div class="w-full h-24 md:h-32 bg-gray-200 rounded mb-2 overflow-hidden flex items-center justify-center">
                        <img src="${p.image}" class="w-full h-full object-cover" onerror="this.style.display='none'">
                    </div>
                    <div class="text-center w-full">
                        <h4 class="font-bold text-xs md:text-sm text-gray-800 truncate">${p.name}</h4>
                        <p class="text-indigo-600 font-bold text-sm md:text-lg mb-2">${prixFormate}</p>
                    </div>
                    <button onclick="addToCart(${p.id})" class="mt-auto w-full bg-indigo-600 text-white text-xs py-2 rounded hover:bg-indigo-700 transition">
                        + Panier
                    </button>
                </div>
            `;
        });
        zone.appendChild(grille);
    } else {
        zone.innerHTML = '<p class="text-gray-400 text-center pt-10">Aucun produit.</p>';
    }
}

// --- 3. AFFICHAGE PAGE PRINCIPALE ---
function remplirPagePrincipale() {
    const container = document.getElementById('products-container');
    if (!container || typeof products === 'undefined') return;

    products.forEach(p => {
        if (p.hidden) return;

        const carte = document.createElement('div');
        carte.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 relative group';
        
        const prixFormate = typeof p.price === 'number' ? p.price.toFixed(2) + ' FCFA' : p.price;

        carte.innerHTML = `
            <!-- Icône Voir -->
            <button onclick="showDetails(${p.id})" class="absolute top-2 right-2 bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition z-10 hover:bg-indigo-100">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </button>

            <div class="h-40 md:h-48 bg-gray-200 overflow-hidden">
                <img src="${p.image}" class="w-full h-full object-cover hover:scale-105 transition duration-300" onerror="this.style.display='none'">
            </div>
            <div class="p-3 md:p-4">
                <h3 class="font-bold text-base md:text-lg text-gray-800 mb-1 md:mb-2">${p.name}</h3>
                <p class="text-gray-500 text-xs md:text-sm mb-2 line-clamp-2">${p.description}</p>
                <p class="text-indigo-600 font-bold text-lg md:text-xl mb-2 md:mb-4">${prixFormate}</p>
                <button onclick="addToCart(${p.id})" class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition text-sm">
                    Ajouter au panier
                </button>
            </div>
        `;
        container.appendChild(carte);
    });
}

// --- 4. GESTION DES DETAILS PRODUIT ---

function showDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentDetailProduct = product;

    // Remplir les champs
    document.getElementById('details-img').src = product.image;
    document.getElementById('details-name').textContent = product.name;
    document.getElementById('details-price').textContent = typeof product.price === 'number' ? product.price.toFixed(2) + ' FCFA' : product.price;
    document.getElementById('details-desc').textContent = product.description;
    
    // Bouton Commander
    const addBtn = document.getElementById('details-add-btn');
    addBtn.onclick = () => {
        addToCart(product.id);
        closeDetailsModal();
    };

    // Vérifier si le produit est déjà favori pour colorer le cœur
    updateFavButtonUI(product.id);

    // Afficher la modale
    document.getElementById('details-modal').classList.remove('hidden');
}

function closeDetailsModal() {
    document.getElementById('details-modal').classList.add('hidden');
}

// --- 5. GESTION DES FAVORIS (NOUVEAU) ---

function toggleFavorite() {
    // Si aucun produit n'est affiché, on ne fait rien
    if (!currentDetailProduct) return;

    const productId = currentDetailProduct.id;
    const index = favorites.indexOf(productId);
    
    if (index === -1) {
        // Ajouter aux favoris
        favorites.push(productId);
    } else {
        // Retirer des favoris
        favorites.splice(index, 1);
    }

    // Mettre à jour l'icône (le cœur devient rouge ou blanc)
    updateFavButtonUI(productId);
    
    // Mettre à jour le compteur dans le header
    updateFavCounter();
}

function updateFavButtonUI(productId) {
    const btn = document.getElementById('fav-btn');
    const svg = btn.querySelector('svg');
    const isFav = favorites.includes(productId);

    if (isFav) {
        svg.setAttribute('fill', '#ef4444'); // Rouge
        svg.classList.remove('text-gray-400');
        svg.classList.add('text-red-500');
    } else {
        svg.setAttribute('fill', 'none');
        svg.classList.remove('text-red-500');
        svg.classList.add('text-gray-400');
    }
}

function updateFavCounter() {
    const countEl = document.getElementById('fav-count');
    const count = favorites.length;

    if (count > 0) {
        countEl.textContent = count;
        countEl.classList.remove('hidden');
    } else {
        countEl.classList.add('hidden');
    }
}

// Ouvrir la modale des favoris
document.getElementById('fav-header-btn').addEventListener('click', () => {
    renderFavoritesModal();
    document.getElementById('fav-modal').classList.remove('hidden');
});

function closeFavModal() {
    document.getElementById('fav-modal').classList.add('hidden');
}

function renderFavoritesModal() {
    const container = document.getElementById('fav-items');
    container.innerHTML = '';

    if (favorites.length === 0) {
        container.innerHTML = '<p class="text-gray-500 text-center">Vous n\'avez pas encore de favoris.</p>';
        return;
    }

    favorites.forEach(id => {
        const p = products.find(prod => prod.id === id);
        if (p) {
            const prixFormate = typeof p.price === 'number' ? p.price.toFixed(2) + ' FCFA' : p.price;
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between mb-4 pb-4 border-b';
            div.innerHTML = `
                <div class="flex items-center gap-4">
                    <img src="${p.image}" class="w-16 h-16 object-cover rounded">
                    <div>
                        <h4 class="font-bold text-gray-800">${p.name}</h4>
                        <p class="text-indigo-600 font-bold">${prixFormate}</p>
                    </div>
                </div>
                <div class="flex gap-2">
                    <button onclick="addToCart(${p.id}); closeFavModal();" class="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700">Panier</button>
                    <button onclick="removeFromFavorites(${p.id})" class="text-red-500 hover:text-red-700 text-xl">&times;</button>
                </div>
            `;
            container.appendChild(div);
        }
    });
}

function removeFromFavorites(productId) {
    favorites = favorites.filter(id => id !== productId);
    updateFavCounter();
    renderFavoritesModal(); // Rafraîchir la liste
    
    // Si la modale de détails est ouverte pour ce produit, mettre à jour le cœur
    if (currentDetailProduct && currentDetailProduct.id === productId) {
        updateFavButtonUI(productId);
    }
}

// Fermer les modales en cliquant à côté
document.getElementById('details-modal').addEventListener('click', (e) => {
    if (e.target.id === 'details-modal') closeDetailsModal();
});

document.getElementById('fav-modal').addEventListener('click', (e) => {
    if (e.target.id === 'fav-modal') closeFavModal();
});

// NOUVELLE FONCTION POUR LE BOUTON CTA
function ouvrirBoutique(e) {
    e.preventDefault(); // Empêche le lien de remonter la page

    // 1. Ouvrir le menu des catégories
    const menu = document.getElementById('menu-categorie');
    menu.classList.remove('hidden');

    // 2. Afficher les produits d'une catégorie par défaut (ici 'telephone')
    // Tu peux changer 'telephone' par 'ordinateur' ou autre si tu préfères.
    afficherProduits('telephone'); 

    // 3. Descendre la page vers la zone des produits
    document.getElementById('produits').scrollIntoView({ behavior: 'smooth' });
}
// Initialisation
remplirPagePrincipale();