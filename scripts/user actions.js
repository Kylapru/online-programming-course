document.addEventListener('DOMContentLoaded', () => {
    
    const counterBtn = document.getElementById('counterBtn');
    const counterDisplay = document.getElementById('counterDisplay');
    let count = 0;

    counterBtn.addEventListener('click', () => {
        count++;
        counterDisplay.textContent = count;
    });

    const greetBtn = document.getElementById('greetBtn');
    const nameInput = document.getElementById('nameInput');
    const greetMessage = document.getElementById('greetMessage');

    greetBtn.addEventListener('click', () => {
        const name = nameInput.value;
        const result = `Привет, ${name}!`;
        console.log(result); 
        greetMessage.textContent = result; 
    });

    const themeBtn = document.getElementById('themeBtn');
    themeBtn.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'rgb(51, 51, 51)') {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        } else {
            document.body.style.backgroundColor = '#333'; 
            document.body.style.color = '#fff'; 
        }
    });

    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', () => {
        const text = todoInput.value;
        if (text.trim() !== "") {
            const li = document.createElement('li'); 
            li.textContent = text;
            todoList.appendChild(li); 
            todoInput.value = ""; 
        }
    });

    const square = document.getElementById('square');
    const plusBtn = document.getElementById('plusBtn');
    const minusBtn = document.getElementById('minusBtn');
    
    let size = 100;

    plusBtn.addEventListener('click', () => {
        size += 10;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    });

    minusBtn.addEventListener('click', () => {
        if (size > 10) { 
            size -= 10;
            square.style.width = size + 'px';
            square.style.height = size + 'px';
        }
    });
});