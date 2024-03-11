require('dotenv').config();
const express = require ('express') //commonjs
const path = require ('path')
const app = express() //app của express
const hostname = process.env.HOST_NAME
const port = process.env.PORT  || 50000 //khai báo port 
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const connection = require('./config/db')

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
//config template 
configViewEngine(app)

//
//https://expressjs.com/en/starter/static-files.html-->link static file
//phục vụ các tệp tin tĩnh như hình ảnh, CSS, JavaScript, bạn có thể sử dụng một middleware như express.static
//khai báo route
app.use('/', webRoutes)

app.listen(port, hostname, () => {
    console.log(`app listening on port ${port}`)
})

