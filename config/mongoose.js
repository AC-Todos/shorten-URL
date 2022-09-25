const mongoose = require('mongoose'); // 載入 mongoose
MONGODB_URI = "mongodb+srv://Richard0325:0000@cluster0.j9qlz5q.mongodb.net/record2?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, { useUnifiedTopology: true }) // 設定連線到 mongoDB

const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})
