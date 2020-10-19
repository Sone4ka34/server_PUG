const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.set('views', './src/views')
app.get('/', (req,res) => {
res.render("index.pug")
})
app.listen(3001, () => console.log(`Listening on port 3001`))
// hh