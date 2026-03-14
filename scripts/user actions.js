document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('clickBtn');
    const doubleClickBtn = document.getElementById('doubleClickBtn');
    const msg = document.getElementById('clickMessage');

    clickBtn.addEventListener('click', () => {
        msg.textContent = "Кнопка нажата один раз!";
        msg.style.color = "blue";
    });

    doubleClickBtn.addEventListener('dblclick', () => {
        msg.textContent = "Ого! Двойной клик!";
        msg.style.color = "orange";
    });

    const hoverBox = document.getElementById('hoverBox');

    hoverBox.addEventListener('mouseenter', () => {
        hoverBox.classList.replace('is-info', 'is-danger');
        hoverBox.textContent = "Уйди с меня!";
    });

    hoverBox.addEventListener('mouseleave', () => {
        hoverBox.classList.replace('is-danger', 'is-info');
        hoverBox.textContent = "Наведи на меня курсор!";
    });

    const inputField = document.getElementById('inputField');
    const inputDisplay = document.getElementById('inputDisplay');

    inputField.addEventListener('focus', () => {
        inputField.style.borderColor = "purple";
    });

    inputField.addEventListener('blur', () => {
        inputField.style.borderColor = "";
    });

    inputField.addEventListener('input', (event) => {
        inputDisplay.textContent = `Вы печатаете: ${event.target.value}`;
    });
});