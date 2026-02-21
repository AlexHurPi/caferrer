/* =========================================
   DATOS
   ========================================= */
        const productos = [];
        const titulos = ['Bourbon Rosado', 'Geisha', 'Caturra Chiroso', 'Caturra', 'Colombia', 'Bourbon Amarillo', 'Bourbon Ají'];
        const msj1 = 'Especiado, aromático, floral, mandarina, miel, acidez brillante jugoso.';
        const msj2 = 'Almíbar, miel, floral, jazmín, cítrico, jugoso, mandarina, cuerpo cremoso, pottez jugosa.';
        const msj3 = 'Arrarático, notas florales delicatee, frutos amarillos, durazno, lima-limón, acidez jugosa.';
        const msj4 = 'Miel, frutos amarillos, durazno, panela, caramelo, mandarina, cítrica, curpo, acidez.';
        const msj5 = 'Cerezas, notas vinosas a frutos rojos, delicate, chocolate, frutos amarillos, acidez media, sillez.';
        const msj6 = 'Almíbar, notas florales delicadas, durazno maduro, frutal jugoso, cítrico mandarina, cuerpo cremoso, residual prolongado.';
        const msj7 = 'Acidez media, cuerpo delicado y jugoso, dulzor medio, frutos amarillos, naranja, miel, floral, especiadas, residual limpio y jugoso.';
        const texto = 'Puntaje Catador: ';
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

   






