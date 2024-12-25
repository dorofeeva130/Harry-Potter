const characters = [
    { 
        name: 'Гарри Поттер', 
        description: 'Главный герой, волшебник.',
        image: 'images/harry.jpg',
        link: 'single-character.html?name=Гарри Поттер' // Ссылка на страницу персонажа
    },
    { 
        name: 'Гермиона Грейнджер', 
        description: 'Умная волшебница, подруга Гарри.',
        image: 'images/hermione.jpg',
        link: 'single-character.html?name=Гермиона Грейнджер' 
    },
    { 
        name: 'Рон Уизли', 
        description: 'Лучший друг Гарри.',
        image: 'images/ron.jpg',
        link: 'single-character.html?name=Рон Уизли' 
    }
];

const characterList = document.getElementById('characterList');

// Функция для отображения всех персонажей
function displayCharacters() {
    characters.forEach(character => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${character.link}">${character.name}</a>`;
        characterList.appendChild(li);
    });
}

displayCharacters();