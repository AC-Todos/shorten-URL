const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
// 定義首頁路由


function generateRandomChar() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collections = (lowerCaseLetters + upperCaseLetters + numbers).split('')
  const selectionIndex = Math.floor(Math.random() * collections.length)
  return collections[selectionIndex]
}

function generateRandomString(length) {

  if (typeof length != 'number') {
    return NaN
  }
  let ret = ''
  for (let i = 0; i < length; i++) {
    ret += generateRandomChar()
  }
  return ret
}

function generateUniqueAssignedId() {
  let newAssignedId = generateRandomString(5)
  let record = Record.findOne({ assignedId: newAssignedId })
  let cnt = 0
  while (!record) {
    newAssignedId = generateRandomString(5)
    record = Record.findOne({ assignedId: newAssignedId })
    cnt++
    console.log(cnt)
  }
  return newAssignedId
}


function getExsitedOrCreateNewRecord(url) {
  //generate an unique assignedId

  return newRecord
}

router.post('/', (req, res) => {

  // console.log(generateUniqueAssignedId())
  // check if record exist
  const url = req.body.url
  if (!url){
    res.render('error')
  }
  return Record.findOne({ url: url })
    .lean()
    .then(record => {
      if (record) {
        return record
      }
      const newId = generateUniqueAssignedId()
      return Record.create({
        assignedId: newId,
        url: url
      })
    })
    .then(record => {
      shortenUrl = req.get('Host') + '/' + record.assignedId
      console.log(shortenUrl)
      res.render('success', { shortenUrl })
    })
    .catch(error => console.log(error))
})
// 匯出路由模組
module.exports = router

