const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
// 定義首頁路由
router.post('/', (req, res) => {
  // Record.create(req.body)
  console.log(req.body)
  // check if record exist
  // if true
  // get the record
  // else create new one
  // redirect to sucess page
  // res.redirect(req.body.url)

})
// 匯出路由模組
module.exports = router

