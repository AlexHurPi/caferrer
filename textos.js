/*Este script es para guardar los mensajes e inyectarlos donde se necesiten dentro del HTML */
const mensaje1 = `
<p>En Caferrer comercializamos café 100% colombiano de la
variedad Castillo, disponible tostado en grano y molido,
cuidadosamente seleccionado para ofrecer una
experiencia superior en cada taza.
Estandarizamos nuestros procesos de producción para
garantizar consistencia, trazabilidad y excelencia
sensorial. Nuestro café es lavado, cultivado bajo un
microclima privilegiado que aporta características únicas
en aroma, acidez y cuerpo. Gracias a la aplicación de
Buenas Prácticas Agrícolas (BPA), aseguramos un
producto sostenible, responsable y de alta calidad.
En Caferrer cumplimos con los estándares más exigentes
de calidad y cuidado del medio ambiente, lo que nos
permite ofrecer un café de especialidad con perfil
exportable, ideal para mercados internacionales que
valoran autenticidad, origen y excelencia
</p>
`;
const mensaje2 = `<p>Caferrer es una marca de café colombiano de especialidad que honra las raíces, la tierra y las manos que lo cultivan. Su propósito va más allá del sabor: busca preservar la tradición cafetera, dignificar al productor y ofrecer una experiencia que conecte con la esencia del país.
        Cada taza refleja la autenticidad del origen y la excelencia del proceso artesanal, invitando al consumidor a redescubrir lo que significa tomar un café verdaderamente colombiano.
    </p>`;

const mensaje3 = `<p>
    • Comunicación directa con el caficultor, lo que garantiza una relación transparente y cercana con el origen del café.
    • Trazabilidad del proceso, desde la finca hasta la taza, asegurando control, calidad y conocimiento real del producto que consumes.
    </p>`;
const mensaje4 = `<p>
        El café es una bebida reconocida por su contenido natural de compuestos bioactivos, entre ellos la cafeína y antioxidantes, que forman parte de una alimentación equilibrada cuando se consume con moderación.
    </p>`;
const mensaje5 = `<p>
        Contiene vitaminas del complejo B en
        pequeñas cantidades, las cuales
        participan en funciones metabólicas
        normales del organismo.
    </p>`;
const mensaje6 = `<p>
        Aporta antioxidantes naturales,
        compuestos que ayudan a proteger
        las células frente al estrés oxidativo.
    </p>`; 
const mensaje7 = `<p>
        La cafeína contribuye a una mayor
        sensación de alerta y concentración.
    </p>`;     
document.getElementById('mensaje1').innerHTML = mensaje1;
document.getElementById('mensaje2').innerHTML = mensaje2;
document.getElementById('mensaje3').innerHTML = mensaje3;
document.getElementById('mensaje4').innerHTML = mensaje4;
document.getElementById('mensaje5').innerHTML = mensaje5;
document.getElementById('mensaje6').innerHTML = mensaje6;
document.getElementById('mensaje7').innerHTML = mensaje7;