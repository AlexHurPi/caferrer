/* =========================================
   DATOS
   ========================================= */
       const productos = [];
        const titulos = ['Pink Bourbon', 'Geisha', 'Chiroso Caturra', 'Caturra', 'Colombia', 'Yellow Bourbon', 'Spicy Bourbon'];
        const msj1 = 'Spicy, aromatic, floral, mandarin, honey, bright acidity, juicy.';
        const msj2 = 'Syrup, honey, floral, jasmine, citrus, juicy, mandarin, creamy body, juicy finish.';
        const msj3 = 'Aromatic, delicate floral notes, yellow fruits, peach, lime-lemon, juicy acidity.';
        const msj4 = 'Honey, yellow fruits, peach, panela, caramel, mandarin, citrus, body, acidity.';
        const msj5 = 'Cherry, winey red fruit notes, delicate, chocolate, yellow fruits, medium acidity, smoothness.';
        const msj6 = 'Syrup, delicate floral notes, ripe peach, juicy fruit, mandarin citrus, creamy body, lingering aftertaste.';
        const msj7 = 'Medium acidity, delicate juicy body, medium sweetness, yellow fruits, orange, honey, floral, spicy, clean juicy finish.';
        const texto = 'Cupping Score: ';

        const mensajes1 = [`${texto} 86,5`, `${texto} 87`, `${texto} 85,25`, `${texto} 86,50`, `${texto} 87,00`, `${texto} 87`, `${texto} 87,5`];
        const mensajes2 = [msj1, msj2, msj3, msj4, msj5, msj6, msj7];


        for (let i = 1; i <= 7; i++) {
            // Usamos % 2 para ciclar: producto1, producto2, producto1, producto2...
                const imgIndex = ((i - 1) % 2) + 1;  // 1, 2, 1, 2, 1, 2, 1
            productos.push({
                img: `images/Productos/producto${imgIndex}.jpg`,
                titulo: titulos[i - 1],
                desc: mensajes1[i - 1] || '',
                desc2: mensajes2[i - 1] || '', 
                precio: ''       
            });
        }

/* =========================================
   FUNCIÓN DE PINTADO INTELIGENTE
   ========================================= */
        function pintarHTML(lista, contenedorProductos) {
            const contenedor = document.getElementById(contenedorProductos);

            // Si no encuentra el contenedor, sale para no dar error
            if (!contenedor) {
                console.error("No se encontró el contenedor: " + contenedorProductos);
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

        pintarHTML(productos, 'contenedorProductos');

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
                window.iniciarGaleria('contenedorProductos');
               
            });
        }
    }
    activarLibreria();

   






