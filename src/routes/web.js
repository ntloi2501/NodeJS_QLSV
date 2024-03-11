const express = require('express')
const router = express.Router()
const {getHomepage, getIT, postAdd, getCreate, getSearch, getUpdate, postUpdate, postDelete, postRemoveStudent } = require ('../controllers/homeController')


//khai báo route
router.get  ('/', getHomepage)
// router.get ('/it', getIT )

router.get('/create', getCreate)
router.post ('/api/grade', postAdd )
router.get('/search', getSearch ) 
router.get('/update/:id', getUpdate)

router.post ('/update', postUpdate)

router.post ('/delete-student/:id', postDelete)
router.post ('/delete-student', postRemoveStudent)


module.exports = router