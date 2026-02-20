// Esta función busca el archivo y lo pega en el div
    fetch('contacto-ingles.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contacto').innerHTML = data;
        });
    fetch('footer-ingles.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });