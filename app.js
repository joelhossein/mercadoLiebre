const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const path = require('path');

app.use(express.static(__dirname + '/public'));
app.use('/', mainRoutes);

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor levantado en el puerto 3000");
});