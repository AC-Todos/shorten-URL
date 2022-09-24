const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// 定義首頁路由
router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/:assigned_id', (req, res) => {
  const id = req.params.assigned_id
  Record.findOne({ assigned_id: id })
    .lean()
    .then(record => {
      if (record) {
        console.log(record)
      } else {
        res.status(404)
        res.send('NotFound')
      }
    })
})
module.exports = router

