document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const data = event.detail;

        console.clear();
        console.log('Пользователь:', data.fullname);
        console.log('Почта:', data.email);
        console.log('Тема:', data.topic);
        console.log('Сообщение:', data.message);
        console.log('Статус: Проверка пройдена');
        console.log('Время:', new Date().toLocaleString());
        console.groupEnd();
    });
});