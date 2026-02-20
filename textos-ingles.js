/*Este script es para guardar los mensajes e inyectarlos donde se necesiten dentro del HTML */
const mensaje1 = `
<p>At Caferrer, we market 100% Colombian coffee, available as roasted whole bean, ground, and green coffee,
 carefully selected to offer a superior experience in every cup.
 We standardize our production processes to guarantee consistency, 
 traceability, and sensory excellence. Our coffee is washed and cultivated under a privileged microclimate
   that contributes unique characteristics in aroma, acidity, and body. Thanks to the
    application of Good Agricultural Practices (GAP), we ensure a sustainable, 
    responsible, and high-quality product. At Caferrer, we comply with the most demanding standards of 
    quality and environmental care, allowing us to offer a specialty coffee with an
      export profile, ideal for international markets that value authenticity, origin, and
      excellence.
</p>
`;
const mensaje2 = `<p>Caferrer is a Colombian specialty coffee brand that honors the roots, the land, and the hands that cultivate it. Its purpose goes beyond flavor: it seeks to preserve the coffee tradition, dignify the producer, and offer an experience that connects with the essence of the country.
        Each cup reflects the authenticity of the origin and the excellence of the artisanal process, inviting the consumer to rediscover what it means to drink truly Colombian coffee.
    </p>`;


const mensaje3 = `<p>
    • Direct communication with the coffee grower, guaranteeing a transparent and close relationship with the coffee's origin.
    • Traceability of the process, from farm to cup, ensuring control, quality, and real knowledge of the product you consume.
    </p>`;
const mensaje4 = `<p>
        Coffee is a beverage recognized for its natural content of bioactive compounds, including caffeine and antioxidants, which are part of a balanced diet when consumed in moderation.
    </p>`;
const mensaje5 = `<p>
        It contains B-complex vitamins in
        small amounts, which
        participate in the body's normal
        metabolic functions.
    </p>`;
const mensaje6 = `<p>
        It provides natural antioxidants,
        compounds that help protect
        cells against oxidative stress.
    </p>`; 
const mensaje7 = `<p>
        Caffeine contributes to a greater
        sense of alertness and concentration.
    </p>`;     
   
document.getElementById('mensaje1').innerHTML = mensaje1;
document.getElementById('mensaje2').innerHTML = mensaje2;
document.getElementById('mensaje3').innerHTML = mensaje3;
document.getElementById('mensaje4').innerHTML = mensaje4;
document.getElementById('mensaje5').innerHTML = mensaje5;
document.getElementById('mensaje6').innerHTML = mensaje6;
document.getElementById('mensaje7').innerHTML = mensaje7;

