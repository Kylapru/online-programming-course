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
            showError(fullname, 'Введите фамилию и имя'); 
            isValid = false;
        }

        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            showError(email, 'Введите корректный email'); 
            isValid = false;
        }

        if (isValid) {
            const formData = {
                fullname: fullnameValue,
                email: emailValue,
                topic: document.getElementById('topic').value,
                message: document.getElementById('message').value.trim() || '(не заполнено)' 
            };

            const event = new CustomEvent('formValid', { detail: formData }); 
            document.dispatchEvent(event);

            alert('Форма отправлена! Данные в консоли.'); 
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