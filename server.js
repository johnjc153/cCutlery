const express = require('express')
const app = express()
const fs = require('fs')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/main', function(req, res) {
    fs.readFile('items.json', function(error){
        if (error){
            res.status(500).end()
        } else {
            res.render('index.ejs', {
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000)