const connection = require ('../config/db')

const getAllStudent = (req, res) => {
    connection.query (
        `SELECT * FROM  grades` ,
        function (err, results) {
            console.log(">>>check rows:", results)
            return res.render('home.ejs', {listStudent: results})
        }
    )
}
const getStudentById = (req, res) => {
    connection.query(
        `SELECT * FROM grades WHERE studentId = '${studentId}' AND courseId = '${courseId}'`,
        function(err, results) {
            console.log(results)
            let sv =  results && results.length > 0 ? results[0] : {}
            return sv
            
        }
    )
}
module.exports = {
    getAllStudent, getStudentById
}