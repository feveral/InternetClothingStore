### Installation Step

1. 請先安裝 nodejs 、 npm 與 Mysql
2. 更改 database/DatabaseUtility.js 檔案裡第8行的密碼，更改為自己的 mysql root 密碼 
3. 刷新資料庫 ， 請執行database資料夾裡的InitialDatabase.js
```javascript=
node InitialDatabase.js
```
4. 將IP更改為自己電腦的IP，修改檔案public/js/Ajax.js 第3行的IP為自己的IP ，否則只有自己電腦能連上
5. 完成之後即可開啟server 
```javascript= 
node server.js
```
若為Linux，則必須加sudo

```shell=
sudo node server.js
```

### node dependent

1. express
2. express-session
3. mysql
4. body-parser 
5. passport
6. passport-local
7. cookie-parser
8. async

### Github Link

https://github.com/feveral/InternetClothingStore
