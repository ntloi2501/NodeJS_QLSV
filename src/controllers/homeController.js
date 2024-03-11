const connection = require('../config/db')
const {getAllStudent, getStudentById} = require('../services/CRUDService')
//
const getIT = (req, res) => {
    res.render('sample.ejs')
}

//get all student
const getHomepage =  (req, res) => {
    connection.query (
        `SELECT * FROM  grades` ,
        function (err, results) {
            console.log(">>>check rows:", results)
            return res.render('home.ejs', {listStudent: results})
            // return res.status(200).json({results})//--> dung cho postman
        }
    )
    }
//phương thức GET, đọc dữ liệu
const getSearch = (req, res) => {
    const studentId = req.query.studentId;
    const courseId = req.query.courseId;
    const grade = req.params.grade
    connection.query(
        `SELECT * FROM grades WHERE studentId = '${studentId}' AND courseId = '${courseId}'`,
        function(err, results) {
            console.log(results)
        let sv = results && results.length > 0 ? results[0] : {}
     return res.render('search.ejs', {svEdit: sv})
        }
    )
}

//Phuongw thuc POST thêm dữ liệu
const postAdd = (req, res) => {
    
    let studentId = req.body.studentId
    let courseId = req.body.courseId
    let grade = req.body.grade

    console.log(">>>studentId =  ", studentId, "courseId =", courseId, "grade =", grade)
//ngắn gọn
// let {studentId, courseId, grade} = req.body
    connection.query(
        `INSERT INTO grades (studentId, courseId, grade) VALUES ('${studentId}','${courseId}',${grade})`,
        function (err, results) {
            console.log(results);
            const homepageLink = '<a href="/">Back to Homepage</a>';
                res.send(`Add new Successful ! ${homepageLink}`);         
        }
    )
}    
//getUpdate
const getUpdate = (req, res) => {
    const svId = req.params.id
    connection.query(
        `SELECT * FROM grades WHERE id = '${svId}'`,
        function(err, results) {
            console.log(">>> req.params:: ", req.params, svId) //trả về yêu cầu đã khai báo kiểu params
            let sv = results && results.length > 0 ? results[0] : {}
            res.render('update.ejs', {svEdit: sv})
        }
    )
           
         
        
    }


//PHUONG THUC POST
const postUpdate = (req, res) => {  
    let grade = req.body.grade
    let svId = req.body.svId

    console.log(">>>check update", "grade =", grade, "svId =", svId)
//ngắn gọn
// let {studentId, courseId, grade} = req.body
    connection.query(
        `UPDATE grades SET grade=  ${grade} WHERE id = ${svId}`,
        function (err, results) {
            const homepageLink = '<a href="/">Back to Homepage</a>';
                res.send(`Update Successful ! ${homepageLink}`);         
        }
    )
}    
//getDelete --> DOC, RENDER RA GIAO DIEN HMTL, KH XU LY DC CHUC NANG DELETE
const postDelete = (req, res) => {
    const svId = req.params.id
    connection.query(
        `SELECT * FROM grades WHERE id = ${svId}`,
        function(err, results) {
            console.log(">>> req.params:: ", req.params, svId) //trả về yêu cầu đã khai báo kiểu params
            let sv = results && results.length > 0 ? results[0] : {}
            res.render('delete.ejs', {svEdit: sv})
        }
    )
           
    
}
const getCreate = (req, res) => {
    res.render('create.ejs')
}

//DELETE 
const postRemoveStudent = (req, res) => {
    const id = req.body.studentId
    connection.query(
        `DELETE FROM grades WHERE id = ${id}`,
        function(err, results) {
            const homepageLink = '<a href="/">Back to Homepage</a>';
                res.send(`Delete Successful ! ${homepageLink}`);   
        }
    )
   
}
module.exports = {
    getHomepage,
    getIT, postAdd, getCreate, getSearch, getUpdate, getAllStudent
    , postUpdate, getStudentById, postDelete, postRemoveStudent
}