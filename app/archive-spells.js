// archive-spells.js
const spells = [
    { 
        name: 'Люмос', 
        description: 'Создает свет на конце волшебной палочки.', 
        image: 'images/lumos.jpg', 
        link: 'single-spell.html?name=Люмос' 
    },
    { 
        name: 'Нокс', 
        description: 'Гасит свет, созданный заклинанием Люмос.', 
        image: 'images/nox.jpg', 
        link: 'single-spell.html?name=Нокс' 
    },
    { 
        name: 'Авада Кедавра', 
        description: 'Заклинание, вызывающее мгновенную смерть.', 
        image: 'images/avada_kedavra.jpg', 
        link: 'single-spell.html?name=Авада Кедавра' 
    },
    { 
        name: 'Патронус', 
        description: 'Вызывает защитного существа, отгоняющего дементоров.', 
        image: 'images/patronus.jpg', 
        link: 'single-spell.html?name=Патронус' 
    },
    { 
        name: 'Экспекто Патронум', 
        description: 'Заклинание, использующееся для вызова Патронуса.', 
        image: 'images/xpecto_patronum.jpg', 
        link: 'single-spell.html?name=Экспекто Патронум' 
    }
];

const spellList = document.getElementById('spellList');

// Функция для отображения всех заклинаний
function displaySpells() {
    spells.forEach(spell => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${spell.link}">${spell.name}</a>: ${spell.description}`;
        spellList.appendChild(li);
    });
}

displaySpells();
