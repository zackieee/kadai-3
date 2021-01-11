# kadai3
リクエストをパースするWEBサーバ  

## 実行方法
1. ローカルにクローン
2. クローンフォルダに移動
3. npm install
4. 下記コマンド実行
```
$ node app.js
```
5. 下記のcurlコマンドで実行確認が可能

### GETリクエスト
```
$ curl -i localhost:8080 -H "Content-Type: application/json"

-実行結果-
Type: application/json"
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 22
ETag: W/"16-435FIvxQfToiwp4vhTlfISUoHuQ"
Date: Wed, 30 Dec 2020 01:56:31 GMT
Connection: keep-alive

{"text":"hello world"}
```

### POSTリクエスト
application/jsonの場合
```
$ curl -i localhost:8080 -d '{"name": "hoge"}' -H "Content-Type: application/json"

-実行結果-
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 15
ETag: W/"f-uWuyLkxupAphkHebyeBoF3gPT3I"
Date: Wed, 30 Dec 2020 01:56:58 GMT
Connection: keep-alive

{"name":"hoge"}

```

上記以外の場合
```
$ curl -i localhost:8080 -d '{"name": "hoge"}'

-実行結果-
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Date: Wed, 30 Dec 2020 01:57:15 GMT
Connection: keep-alive
Content-Length: 0
```
