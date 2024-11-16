// Script para o menu móvel
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active'); // Alterna a visibilidade do menu
});

// Validação simples de formulário
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    if (!name || !email || !phone || !message) {
        event.preventDefault(); // Impede o envio do formulário
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Formulário enviado com sucesso!");
    }
});