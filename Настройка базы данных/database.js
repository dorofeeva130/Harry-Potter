// database.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/harryPotterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Подключение к базе данных установлено"))
.catch(err => console.error("Ошибка подключения к базе данных", err));