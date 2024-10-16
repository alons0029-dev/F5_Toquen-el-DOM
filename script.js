/* Change Page Menu */
function pageNav() {
    let selectedPage = document.getElementById("SelectInstrument").value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
};

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir la redirección

        // Añadir una clase temporal para reducir ligeramente el tamaño del botón
        link.classList.add('clicked');
        
        // Cambiar el cursor a "loading"
        document.body.style.cursor = 'wait';

        // Después de un breve tiempo, restaurar el tamaño y el cursor
        setTimeout(function() {
            link.classList.remove('clicked');
            document.body.style.cursor = 'default'; // Restaurar el cursor
        }, 1000); // 1 segundo de "pensando"
    });
});