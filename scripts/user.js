document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('task1-container');
    if (!mainContainer) return;

    const header = document.createElement('h1');
    header.className = "title is-2";
    header.textContent = "Список пользователей";
    mainContainer.appendChild(header);

    const list = document.createElement('ul');
    list.id = "userList";
    list.style.marginBottom = "20px";
    
    const users = ["Анна", "Борис", "Виктор"];
    users.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        li.style.listStyleType = "disc";
        li.style.marginLeft = "20px";
        list.appendChild(li);
    });
    mainContainer.appendChild(list);

    const btn = document.createElement('button');
    btn.textContent = "Добавить пользователя";
    btn.className = "button is-primary";
    mainContainer.appendChild(btn);

    btn.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = "Новый пользователь";
        newLi.style.listStyleType = "disc";
        newLi.style.marginLeft = "20px";
        list.appendChild(newLi);
    });
});