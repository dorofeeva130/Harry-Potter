const spells = [
    { name: 'Люмос', description: 'Создает свет на конце волшебной палочки.' },
    { name: 'Нокс', description: 'Гасит свет, созданный заклинанием Люмос.' },
    { name: 'Авада Кедавра', description: 'Заклинание, вызывающее мгновенную смерть.' },
    { name: 'Патронус', description: 'Вызывает защитного существа, отгоняющего дементоров.' },
    { name: 'Экспекто Патронум', description: 'Заклинание, использующееся для вызова Патронуса.' }
];

const spellList = document.getElementById('spellList');

spells.forEach(spell => {
    const li = document.createElement('li');
    li.textContent = `${spell.name}: ${spell.description}`;
    spellList.appendChild(li);
});
