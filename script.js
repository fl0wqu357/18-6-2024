document.addEventListener('DOMContentLoaded', () => {
    const ul = document.createElement('ul');

    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Elemento ${i}`;
        ul.appendChild(li);
    }

    const listContainer = document.getElementById('list-container');
    listContainer.appendChild(ul);
});
