### Installation

1. 請先安裝 nodejs 、 npm 與 Mysql
2. 更改 database/DatabaseUtility.js 檔案裡第8行的密碼，更改為自己的 mysql root 密碼 
3. 刷新資料庫 ， 請執行database資料夾裡的InitialDatabase.js

```javascript=
node InitialDatabase.js
```

### 開啟server

```shell=
node server.js
```

### Dependent

1. express
2. express-session
3. mysql
4. body-parser 
5. passport
6. passport-local
7. cookie-parser
