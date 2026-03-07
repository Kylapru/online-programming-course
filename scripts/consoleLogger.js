document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail; 
        console.clear(); 
        console.log('--- Получены новые данные формы ---');
        console.log('ФИО:', formData.fullname); 
        console.log('Email:', formData.email); 
        console.log('Тема:', formData.topic);
        console.log('Сообщение:', formData.message); 
        console.log('Время отправки:', new Date().toLocaleString()); 
    });
});