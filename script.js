const input = document.getElementById('mensaje-input');
const btn = document.getElementById('enviar-btn');
const mensajes = document.getElementById('mensajes');

btn.onclick = function() {
    if(input.value) {
        const div = document.createElement('div');
        div.textContent = "ADMIN: " + input.value;
        mensajes.appendChild(div);
        input.value = "";
    }
};