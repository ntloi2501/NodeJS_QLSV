const express = require ('express') //commonjs
const path = require ('path')
const app = express() //app của express

const port = 3000 //khai báo port 

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//khai báo route
app.get  ('/', (req, res) => {
    // res.send("<h1>Hello World\n Lập Trình Backend Webserver</h1>")
    res.render('sample.ejs')
})
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

