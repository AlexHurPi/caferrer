/* =========================================
   DATOS
   ========================================= */
const productos = [];
const titulosKits = ['Kit Singler 1oz', 'Kit Trinity 1oz', 'Kit Cartier 1oz', 'Kit Bala 1oz', 'Kit Maletin emprendimiento 1oz', 'KIT MALETINES $230.000', 'Insumos','Kit preparacion 20 perfumes 1oz', 'Kit preparacion 40 perfumes 1oz', 'Kit preparacion 100 perfumes 1oz'];
const msj1 = '· 6 unidades $48.000 <br>' + '· 12 unidades $90.000 <br>' + '· 20 unidades $140.000 <br>' + '· 50 unidades $ 340.000 <br>' + '· 100 unidades $680.000';
const msj2 = '· 6 unidades $45.000 <br>' + '· 12 unidades $80.000 <br>' + '· 20 unidades $130.000 <br>';
const msj3 = '· 6 unidades $50.000 <br>' + '· 12 unidades $95.000 <br>' + '· 20 unidades $150.000 <br>';
const msj4 = 'Incluye: maletín, 20 perfumes en presentación singler, 20 fundas o cajas de presentacion';
const msj5 = '20 frascos singler + cartier, bala o Trinity + 1oz de feromonas + 10 referencias de fragancias por 30gr c/u + 20 fundas + 500gr Diluyente y stickers x $140.000.';
const msj6 = '40 frascos singler + cartier, bala o Trinity + 1oz de feromonas + 20 referencias de fragancias por 30gr c/u + 40 fundas + 1 litro de Diluyente y stickers x $270.000.';
const msj7 = '100 frascos singler + cartier, bala o Trinity + 1oz de feromonas + 25 referencias de fragancias por 60gr c/u + 100 fundas + 2lit Diluyente x $600.000.';
const msj8 = '· Kit Maletín Emprendedor  (20 perfumes singler, 20 fundas o cajas de presentación y maletín para transportar los perfumes)';
const msj9 = '· Kit 24 probadores (24 probadores de 7ml y Maletín para transportar los probadores)'
const msjA = 'Se obsequian feromonas y fundas o cajas de presentación.';
const msjB = 'Se obsequian feromonas y fundas de presentación.';
const msjC = '';
const msjD = 'La gramera tiene un valor adicional de $30.000.';
const mensajesKits = [msj1, msj2, msj3, msj3, msj4, msj8, msjC, msj5, msj6, msj7 ];
const mensajesKits2 = [msjC, msjC, msjC, msjC, msjC, msj9, msjC, msjC, msjC, msjC ];
const obsequios = [msjA, msjB, msjB, msjB, msjC, msjC];
for (let i = 1; i <= 10; i++) {
    productos.push({
        img: `images/Productos/producto${i}.jpeg`,
        titulo: titulosKits[i - 1],
        desc: mensajesKits[i - 1] || '',
        desc2: mensajesKits2[i - 1] || '',
        precio: obsequios[i - 1] || '' ,
        
    });
}

/* =========================================
   FUNCIÓN DE PINTADO INTELIGENTE
   ========================================= */
function pintarHTML(lista, contenedorID) {
    const contenedor = document.getElementById(contenedorID);
    
    // Si no encuentra el contenedor, sale para no dar error
    if (!contenedor) {
        console.error("No se encontró el contenedor: " + contenedorID);
        return; 
    }

    lista.forEach(item => {
        const articulo = document.createElement('article');
        articulo.className = 'gallery-item';

        // Preparamos el texto del título (Alt)
        const altTexto = `${item.titulo} ${item.precio ? '- ' + item.precio : ''}`;
        
        // Creamos el HTML interno
        articulo.innerHTML = `
            <a href="${item.img}" 
               data-pswp-width="800" 
               data-pswp-height="800" 
               class="pswp-link">
                <img src="${item.img}" alt="${item.titulo} ${item.precio ? ' - ' + item.precio : ''}" class="img-zoomable">
            </a>
            <h3>${item.titulo}</h3>
            <p><strong>${item.desc || ''}</strong></p>
            <p><strong>${item.desc2 || ''}</strong></p>
            <span class="price">${item.precio}</span>`;
        
        contenedor.appendChild(articulo);

        // --- TRUCO DE PRE-CARGA (Solución al salto) ---
        // Creamos una imagen virtual para leer el tamaño real en segundo plano
        const imgVirtual = new Image();
        imgVirtual.src = item.img;
        
        imgVirtual.onload = () => {
            // Cuando cargue, actualizamos los datos del enlace <a>
            const enlace = articulo.querySelector('a.pswp-link');
            if(enlace) {
                enlace.setAttribute('data-pswp-width', imgVirtual.width);
                enlace.setAttribute('data-pswp-height', imgVirtual.height);
            }
        };
    });
}

// 1. Pintamos el HTML inmediatamente
// Asegúrate de que estos IDs existan en tu index.html
pintarHTML(productos, 'contenedor-monturas');

/* =========================================
   CARRUSEL DE IMÁGENES (BANNER PRINCIPAL)
   ========================================= */
    document.addEventListener('DOMContentLoaded', function() {
        // Configuraciones
        const tiempoEspera = 3000; // 3000ms = 3 segundos
        const imagenes = document.querySelectorAll('.banner-img');
        let indiceActual = 0;

        // Mostrar la primera imagen al cargar
        if(imagenes.length > 0) {
            imagenes[0].classList.add('active');
        }

        // Función para cambiar imagen
        function siguienteImagen() {
            // Quitar clase activa de la imagen actual
            imagenes[indiceActual].classList.remove('active');

            // Calcular el siguiente índice (vuelve a 0 si llega al final)
            indiceActual = (indiceActual + 1) % imagenes.length;

            // Poner clase activa a la nueva imagen
            imagenes[indiceActual].classList.add('active');
        }

        // Iniciar el ciclo automático
        setInterval(siguienteImagen, tiempoEspera);
    });


    /* =========================================
   INICIALIZACIÓN SEGURA DE PHOTOSWIPE
   ========================================= */
    function activarLibreria() {
        // Si la función ya existe (porque el módulo cargó rápido), la usamos
        if (window.iniciarGaleria) {
            window.iniciarGaleria('contenedor-monturas');
            
        } else {
            // Si no, esperamos a que el módulo avise que está listo
            window.addEventListener('PhotoSwipeReady', () => {
                window.iniciarGaleria('contenedor-monturas');
               
            });
        }
    }
    activarLibreria();






