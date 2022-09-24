const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

// 定義首頁路由
router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/:assigned_id', (req, res) => {
  const id = req.params.assigned_id
  console.log(id)
  Record.findOne({ assignedId: id })
    .lean()
    .then(record => {
      console.log(record.url)
      if (record) {
        // console.log(record)
        res.redirect(record.url)
      } else {
        res.status(404)
        res.send('NotFound')
      }
    })
})
module.exports = router

