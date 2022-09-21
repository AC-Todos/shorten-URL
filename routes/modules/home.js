const express = require('express')
const router = express.Router()

// 定義首頁路由
router.get('/', (req, res) => {
  return res.render('index')
})
// 匯出路由模組
module.exports = router

