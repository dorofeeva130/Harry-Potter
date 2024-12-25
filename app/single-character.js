const characters = [
    { 
        name: 'Гарри Поттер', 
        description: 'Главный герой, волшебник.',
        image: 'images/harry.jpg'
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

// Функция для получения имени персонажа из URL-параметров
function getCharacterName() {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
}

// Отображение данных о персонаже
function displayCharacter() {
    const characterName = getCharacterName();
    const character = characters.find(c => c.name === characterName);

    if (character) {
        document.getElementById('characterName').textContent = character.name;
        document.getElementById('characterDescription').textContent = character.description;
        document.getElementById('characterImage').src = character.image;
    } else {
        document.getElementById('characterDescription').textContent = 'Персонаж не найден.';
    }
}

displayCharacter();
