document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById('target');

    const items = ['First item', 'Second item', 'Third item'];

    items.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        target.appendChild(li);
    });
});
