const express = require('express') //Importo express
const router = express.Router() // instancio router de express

var app = express () //instacio  modulo express

app.use(express.json()) //defino un doy parser de JSON
app.use(express.urlencoded({extended: false})) //parser de url
app.use(router) //defino que router hara veces de .use
app.use('/', express.static('src'))

app.listen(3000) //defino el puerto por el qu escucho peticiones


router.post('/post', function(req, res) {
  console.log(req.body);
  res.send('HOLA')
})

console.log('La aplicación está escuchando en htttp://localhots:3000')
