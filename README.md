# Shorten URL
### 功能

- 產生一個縮短版的網址

## 開始使用

1. 安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```
4. 設定 Mongo DB 路徑，樣式如下
   ```bash
   export MONGODB_URI="mongodb+srv://<your_account>:<your_password>@cluster0.j9qlz5q.mongodb.net/record2?retryWrites=true&w=majority"
   ```
5. 安裝完畢後，輸入：

   ```bash
   npm run start
   ```
   或是
   ```bash
   npm run dev
   ```
6. 打開瀏覽器進入到以下網址

   ```text
    http://localhost:3000
   ```