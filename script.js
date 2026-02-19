// Esta función busca el archivo y lo pega en el div
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
    fetch('contacto.html')
        .then(response => response.text())
        .then(data2 => {
            document.getElementById('contacto').innerHTML = data2;
        });