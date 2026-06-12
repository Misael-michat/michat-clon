// 1. Buscamos los elementos de la barra blanca de texto, el botón de enviar y el historial
const inputBox = document.querySelector('.input-box');
const sendBtn = document.querySelector('.send-btn');
const messageHistory = document.querySelector('.message-history');

// 2. Función mágica para capturar el texto y meterlo al chat
function enviarMensaje() {
    const texto = inputBox.value.trim(); // Guardamos lo escrito sin espacios vacíos

    // Si la barra está vacía, no hace nada
    if (texto === "") return;

    // 3. Creamos el nuevo bloque del mensaje simulando tu Nick de Dueño
    const nuevoMsg = document.createElement('div');
    nuevoMsg.classList.add('msg');
    nuevoMsg.innerHTML = `
        <span class="username-container">👑 &lt;ADMIN_DUEÑO&gt;:</span> 
        <span>${texto}</span>
    `;

    // 4. Lo metemos al fondo del historial
    messageHistory.appendChild(nuevoMsg);

    // 5. Limpiamos la barra blanca de inmediato para el siguiente mensaje
    inputBox.value = "";

    // 6. Forzamos a la ventana gris a bajar sola (Scroll automático)
    messageHistory.scrollTop = messageHistory.scrollHeight;
}

// 3. Activamos el botón para que funcione al hacer CLIC en ENVIAR
sendBtn.addEventListener('click', enviarMensaje);

// 4. Activamos la barra para que funcione también al presionar ENTER en el teclado
inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        enviarMensaje();
    }
});