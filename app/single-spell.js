// single-spell.js

const spells = [
    { 
        name: 'Люмос', 
        description: 'Создает свет на конце волшебной палочки.', 
        image: 'images/lumos.jpg' 
    },
    { 
        name: 'Нокс', 
        description: 'Гасит свет, созданный заклинанием Люмос.', 
        image: 'images/nox.jpg' 
    },
    { 
        name: 'Авада Кедавра', 
        description: 'Заклинание, вызывающее мгновенную смерть.', 
        image: 'images/avada_kedavra.jpg' 
    },
    { 
        name: 'Патронус', 
        description: 'Вызывает защитного существа, отгоняющего дементоров.', 
        image: 'images/patronus.jpg' 
    },
    { 
        name: 'Экспекто Патронум', 
        description: 'Заклинание, использующееся для вызова Патронуса.', 
        image: 'images/xpecto_patronum.jpg' 
    }
];

// Функция для получения параметров из URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get('name');
}

// Функция для отображения информации о заклинании
function displaySpell() {
    const spellName = getQueryParams();
    const spell = spells.find(s => s.name === spellName);

    if (spell) {
        document.getElementById('spellName').textContent = spell.name;
        document.getElementById('spellDescription').textContent = spell.description;
        document.getElementById('spellImage').src = spell.image;
    } else {
        document.getElementById('spellName').textContent = 'Заклинание не найдено';
        document.getElementById('spellDescription').textContent = '';
    }
}

displaySpell();
