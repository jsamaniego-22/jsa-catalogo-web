
# Catálogo Web de Productos - Confecciones Raqui

![Captura del sitio web](img/sitiofinal-corriendo.png)

Este proyecto es un catálogo web moderno y responsive para Confecciones Raqui, una empresa que ofrece prendas tradicionales panameñas. El sitio permite mostrar productos organizados por categorías con funcionalidades avanzadas como filtros, contacto directo por WhatsApp y un diseño optimizado para dispositivos móviles.

## Características principales

- 🛍️ **Catálogo de productos** organizado por categorías
- 🔍 **Sistema de filtrado** avanzado con botones interactivos
- 📱 **Diseño completamente responsive** para móviles, tablets y escritorio
- 💬 **Integración con WhatsApp** para contacto directo
- 🌐 **Soporte multiidioma** con Google Translate
- ⏱️ **Popup promocional** que aparece después de 5 segundos
- ⬆️ **Botón "Ir arriba"** para mejor navegación
- 🖼️ **Galería de imágenes** con modal para vista ampliada

## Tecnologías utilizadas

- **Frontend:**
  - HTML5 semántico
  - CSS3 con variables personalizadas
  - JavaScript moderno (ES6+)
  - [Font Awesome](https://fontawesome.com/) para iconos
- **Herramientas:**
  - Google Translate API para soporte multiidioma
  - LocalStorage para preferencias de usuario
- **Hosting:**
  - Compatible con cualquier servicio estático (Netlify, Vercel, GitHub Pages, etc.)

## Estructura del proyecto

```
confecciones-raqui/
├── data/
│   └── products.json       # Base de datos de productos
├── img/                    # Carpeta de imágenes
│   ├── logo.jpg            # Logo principal
│   └── productos/          # Imágenes de productos
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── script.js           # Funcionalidad JavaScript
├── index.html              # Página principal
├── favicon.ico             # Favicon del sitio
└── README.md               # Este archivo
```

## Configuración e instalación

1. Clona el repositorio:
```bash
git clone https://github.com/jsamaniego-22/jsa-catalogo-web.git
```

2. Edita los archivos de configuración:
- `data/products.json` - Agrega tus productos
- `index.html` - Modifica textos y metadatos
- `styles.css` - Personaliza colores y estilos

3. Personaliza las imágenes:
- Reemplaza `img/logo.jpg` con tu logo
- Agrega imágenes de productos en `img/productos/`

4. Configura el enlace de WhatsApp:
```javascript
// En script.js busca y reemplaza:
href="https://wa.me/507XXXXXXXX"
```

## Personalización

### Modificar colores principales
En `styles.css` actualiza las variables CSS:
```css
:root {
    --primary-color: #8a1538; /* Color principal */
    --secondary-color: #d32f2f; /* Color secundario */
    --accent-color: #25D366; /* Color de WhatsApp */
    --light-bg: #f5f7fa; /* Fondo claro */
    --dark-bg: #222; /* Fondo oscuro */
}
```

### Agregar nuevas categorías
1. En `index.html` añade un nuevo botón de filtro:
```html
<button class="filter-btn" data-filter="nueva-categoria">
    <i class="fas fa-icono"></i> Nueva Categoría
</button>
```

2. En `script.js` actualiza la función `setupFilters`

3. En `data/products.json` añade productos con la nueva categoría

### Configurar el popup de WhatsApp
En `script.js` modifica:
```javascript
// Tiempo antes de mostrar el popup (milisegundos)
setTimeout(function() {
    // ...
}, 5000); // 5 segundos

// Mensaje del popup
popupContent.innerHTML = `
    <p>¿Buscas algo especial? Escríbenos.</p>
    <a href="https://wa.me/507XXXXXXX" class="whatsapp-btn">
        <i class="fab fa-whatsapp"></i> Enviar mensaje
    </a>
`;
```

## Despliegue

El sitio es completamente estático y puede ser desplegado en:

1. **GitHub Pages:**
   - Ve a la configuración de tu repositorio
   - En la sección "GitHub Pages", selecciona la rama main

2. **Netlify:**
   - Arrastra tu carpeta a la zona de deploy de Netlify
   - O conecta tu repositorio GitHub

3. **Servidor tradicional:**
   - Sube todos los archivos a tu servidor via FTP

## Contribución

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`)
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva feature'`)
4. Haz push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE). Eres libre de usarlo, modificarlo y distribuirlo según los términos de esta licencia.

## Créditos

- Diseño y desarrollo: Jesús A. Samaniego M.
- Productos: Confecciones Raqui
- Patrocinado por: [JasmDarkTech](https://jasm-darktech.net)

---

**Confecciones Raqui** - Preservando y compartiendo la rica tradición folklórica panameña a través de nuestras prendas artesanales.