document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Dom totalmente carregado e analisado');
    
    
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Formulário enviado!');
        });
    }
});