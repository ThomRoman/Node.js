const app = require('./app'),
    createError = require('http-errors'),
    log = console.log

app.listen(app.get('port'),()=>{
    log(`Iniciando Express en el puerto ${app.get('port')}`)
})
// corriendo el servidor con npm start server
// morgan es como un logger que me permite monitoriar las peticiones de mi aplicación