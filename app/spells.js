// spells.js
const spells = [
    { name: 'Люмос', description: 'Создает свет на конце волшебной палочки.' },
    { name: 'Нокс', description: 'Гасит свет, созданный заклинанием Люмос.' },
    { name: 'Авада Кедавра', description: 'Заклинание, вызывающее мгновенную смерть.' },
    { name: 'Патронус', description: 'Вызывает защитного существа, отгоняющего дементоров.' },
    { name: 'Экспекто Патронум', description: 'Заклинание, использующееся для вызова Патронуса.' }
];

// Функция для отображения заклинаний
function displaySpells(spellArray) {
    const spellList = document.getElementById('spellList');
    spellList.innerHTML = ''; // Очистить список перед добавлением
    spellArray.forEach(spell => {
        const li = document.createElement('li');
        li.textContent = `${spell.name}: ${spell.description}`;
        spellList.appendChild(li);
    });
}

// Отображение всех заклинаний при загрузке страницы
displaySpells(spells);

// Фильтрация заклинаний
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredSpells = spells.filter(spell =>
        spell.name.toLowerCase().includes(searchTerm) || 
        spell.description.toLowerCase().includes(searchTerm)
    );
    displaySpells(filteredSpells);
});
