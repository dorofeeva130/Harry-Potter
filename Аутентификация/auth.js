// auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Модель пользователя
const router = express.Router();

// Регистрация пользователя
router.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        username: req.body.username,
        password: hashedPassword
    });
    await user.save();
    res.status(201).send("Пользователь создан");
});

// Вход пользователя
router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        res.send("Успешный вход");
    } else {
        res.status(400).send("Неверные учетные данные");
    }
});

module.exports = router;