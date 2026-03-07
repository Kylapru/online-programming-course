document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        document.querySelectorAll('.input.is-danger, .textarea.is-danger').forEach(el => {
            el.classList.remove('is-danger');
        });
        document.querySelectorAll('.help.is-danger').forEach(el => el.remove());

        let isValid = true;

        const fullname = document.getElementById('fullname');
        const fullnameValue = fullname.value.trim();
        const words = fullnameValue.split(' ').filter(word => word.length > 0);

        if (words.length < 2) {
            showError(fullname, 'Введите фамилию и имя (минимум 2 слова)');
            isValid = false;
        }
        
        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            showError(email, 'Введите корректный адрес почты');
            isValid = false;
        }

        
        if (isValid) {
            const formData = {
                fullname: fullnameValue,
                email: emailValue,
                topic: document.getElementById('topic').value,
                message: document.getElementById('message').value.trim() || '(пусто)'
            };

            
            const eventValid = new CustomEvent('formValid', { detail: formData });
            document.dispatchEvent(eventValid);

            alert('Форма успешно заполнена!');
            form.reset();
        }
    });

    function showError(input, message) {
        input.classList.add('is-danger');
        const help = document.createElement('p');
        help.classList.add('help', 'is-danger');
        help.textContent = message;
        input.closest('.control').appendChild(help);
    }
});