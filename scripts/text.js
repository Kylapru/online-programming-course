document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.text');

    const specialElement = document.querySelector('.special');
    if (specialElement) {
        specialElement.style.color = 'red';
    }

    textElements.forEach((p, index) => {
        if ((index + 1) % 3 === 0) {
            p.style.backgroundColor = 'lightgreen';
        }
    });

    const container = document.getElementById('container');
    if (container) {
        container.style.border = '2px solid black';
        container.style.padding = '10px';
    }
});