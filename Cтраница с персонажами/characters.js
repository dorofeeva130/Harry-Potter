// characters.js
const characters = [
    { name: 'Гарри Поттер', description: 'Главный герой, волшебник.' },
    { name: 'Гермиона Грейнджер', description: 'Умная волшебница, подруга Гарри.' },
    { name: 'Рон Уизли', description: 'Лучший друг Гарри.' }
];

const characterList = document.getElementById('characterList');

characters.forEach(character => {
    const li = document.createElement('li');
    li.textContent = `${character.name}: ${character.description}`;
    characterList.appendChild(li);
});