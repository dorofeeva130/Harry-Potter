// api.js
const express = require('express');
const router = express.Router();

const characters = [
    { name: 'Гарри Поттер', description: 'Главный герой, волшебник.' },
    { name: 'Гермиона Грейнджер', description: 'Умная волшебница, подруга Гарри.' },
    { name: 'Рон Уизли', description: 'Лучший друг Гарри.' }
];

// API для получения всех персонажей
router.get('/characters', (req, res) => {
    res.json(characters);
});

module.exports = router;