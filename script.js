// Variables globales
let allProducts = [];
let currentFilter = 'all';

// Función para cargar productos desde JSON
async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error cargando productos:', error);
        // Mostrar mensaje de error en la interfaz
        const productsGrid = document.getElementById('products-grid');
        productsGrid.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-circle"></i>
                <p>Error cargando los productos</p>
                <p>${error.message}</p>
            </div>
        `;
        return [];
    }
}

// Función para renderizar productos
function renderProducts(productsArray) {
    const productsGrid = document.getElementById('products-grid');
    
    // Limpiar el contenedor
    productsGrid.innerHTML = '';
    
    // Verificar si hay productos
    if (!productsArray || productsArray.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-exclamation-triangle"></i>
                <p>No se encontraron productos</p>
            </div>
        `;
        return;
    }
    
    // Renderizar cada producto
    productsArray.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <span class="product-category">${product.categoryLabel}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <a href="${product.whatsappLink}" class="whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
                </a>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });

    // Agregar evento de clic a las imágenes para abrir el modal
    document.querySelectorAll('.product-image').forEach(img => {
        img.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });
}

// Función para configurar los filtros
function setupFilters(products) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase 'active' al botón clickeado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Filtrar productos
            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === filter);
                renderProducts(filteredProducts);
            }

            // En móvil, ocultar los filtros después de seleccionar uno
            if (window.innerWidth <= 768) {
                document.getElementById('filtersContainer').classList.remove('show');
            }
        });
    });

    // Botón de filtro móvil
    const mobileFilterBtn = document.getElementById('mobileFilterBtn');
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', function() {
            const filtersContainer = document.getElementById('filtersContainer');
            filtersContainer.classList.toggle('show');
        });
    }
}

// Agregar al final de la función DOMContentLoaded

// Botón ir arriba
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Popup de WhatsApp
const whatsappPopup = document.getElementById('whatsappPopup');
const closePopup = document.querySelector('.close-popup');

// Mostrar popup después de 5 segundos
setTimeout(function() {
    // Solo mostrar si el usuario no ha cerrado antes
    if (!localStorage.getItem('whatsappPopupClosed')) {
        whatsappPopup.classList.add('show');
    }
}, 5000);

// Cerrar popup
closePopup.addEventListener('click', function() {
    whatsappPopup.classList.remove('show');
    // Guardar preferencia para no mostrar de nuevo
    localStorage.setItem('whatsappPopupClosed', 'true');
});

// Cerrar al hacer clic fuera del popup
window.addEventListener('click', function(event) {
    if (event.target === whatsappPopup) {
        whatsappPopup.classList.remove('show');
        localStorage.setItem('whatsappPopupClosed', 'true');
    }
});

// Cerrar modal
function setupModal() {
    const modal = document.getElementById('imageModal');
    const closeModal = document.getElementById('closeModal');

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', async function() {
    // Año actual en el footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Mostrar estado de carga
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = `
        <div class="loading">
            <i class="fas fa-spinner fa-spin"></i> Cargando productos...
        </div>
    `;
    
    try {
        // Cargar productos desde JSON
        const products = await loadProducts();
        allProducts = products;
        
        // Renderizar todos los productos
        renderProducts(products);
        
        // Configurar los filtros
        setupFilters(products);
        
        // Configurar modal de imagen
        setupModal();
    } catch (error) {
        console.error('Error inicializando:', error);
        productsGrid.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-circle"></i>
                <p>Error cargando los productos</p>
                <p>${error.message}</p>
            </div>
        `;
    }
});