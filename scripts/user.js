document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('h1');
    header.textContent = "Список пользователей"; 
    document.body.appendChild(header); 

    const list = document.createElement('ul');
    list.id = "userList"; 

    const users = ["Анна", "Борис", "Виктор"]; 
    users.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        list.appendChild(li); 
    });
    document.body.appendChild(list);

    const btn = document.createElement('button');
    btn.textContent = "Добавить пользователя"; 
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = "Новый пользователь"; 
        list.appendChild(newLi);
    });
});