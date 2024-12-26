// characters.js
const characters = [
    { 
        name: 'Гарри Поттер', 
        description: 'Главный герой, волшебник.',
        image: 'images/harry.jpg' // Путь к изображению
    },
    { 
        name: 'Гермиона Грейнджер', 
        description: 'Умная волшебница, подруга Гарри.',
        image: 'images/hermione.jpg' 
    },
    { 
        name: 'Рон Уизли', 
        description: 'Лучший друг Гарри.',
        image: 'images/ron.jpg' 
    }
];

const characterList = document.getElementById('characterList');
const searchInput = document.getElementById('search');

// Функция для отображения персонажей
function displayCharacters(filter = "") {
    characterList.innerHTML = ""; // Очистка списка перед выводом

    const filteredCharacters = characters.filter(character => {
        return character.name.toLowerCase().includes(filter.toLowerCase());
    });

    filteredCharacters.forEach(character => {
        const li = document.createElement('li');
        li.className = 'character';

        li.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <strong>${character.name}</strong>: ${character.description}
        `;
        characterList.appendChild(li);
    });
}

// Инициализация отображения всех персонажей
displayCharacters();

// Обработчик события для фильтрации по имени
searchInput.addEventListener('input', function() {
    const searchText = this.value;
    displayCharacters(searchText);
});
