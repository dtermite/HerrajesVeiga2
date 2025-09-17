// Script para cargar el mapa interactivo de Google Maps solo al hacer clic en el botón

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.static-map').forEach(function (container, idx) {
        var button = container.querySelector('.load-map-btn');
        if (!button) return;
        button.addEventListener('click', function () {
            // Definir el src del iframe según el orden (primero Casa Central, segundo Lomas)
            var mapSrc = idx === 0
                ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.678595249498!2d-58.37336468476984!3d-34.61229398045727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33ad3a3b4a9c1%3A0x8b5b7b0d7b1f4e8d!2sAv.%20Independencia%20327%2C%20C1099AAG%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2ses!4v1630512054123!5m2!1ses-419!2ses'
                : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.228589394137!2d-58.4017389847658!3d-34.7248789804285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd286b0953a4d%3A0x8a7a1a3e9e8d0a3!2sLoria%20485%2C%20B1832%20Lomas%20de%20Zamora%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2ses!4v1630512123456!5m2!1ses-419!2ses';
            var iframe = document.createElement('iframe');
            iframe.src = mapSrc;
            iframe.width = '100%';
            iframe.height = '300';
            iframe.style.border = '0';
            iframe.allowFullscreen = true;
            iframe.loading = 'lazy';
            iframe.title = idx === 0 ? 'Mapa de ubicación de Herrajes Veiga - Casa Central en CABA' : 'Mapa de ubicación de Herrajes Veiga - Sucursal Lomas de Zamora';
            container.innerHTML = '';
            container.appendChild(iframe);
        });
    });
});
