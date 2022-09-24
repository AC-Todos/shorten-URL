const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
// 定義首頁路由


function generateRandomChar(){
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collections = (lowerCaseLetters + upperCaseLetters + numbers).split('')
  const selectionIndex = Math.floor(Math.random() * collections.length)
  return collections[selectionIndex]
}

function generateRandomString(length){
  
  if (typeof length != 'number'){
    return NaN
  }
  let ret = ''
  for (let i = 0; i < length ; i++){
    ret += generateRandomChar()
  }
  return ret
}

function generateUniqueAssignedId(){
  
}

function getAssignedId(url){
  const record = Record.findOne({url: req.body.url})
  if (record){
    return record.assignedId
  }else{
    //generate an unique assignedId
    //create a record
    //return assignedId
  }
}

router.post('/', (req, res) => {
  // Record.create(req.body)
  console.log(generateRandomString(5))
  // check if record exist
  
  // if true
  // get the record
  // else create new one
  // redirect to sucess page

})
// 匯出路由模組
module.exports = router

