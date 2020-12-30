const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// port番号を指定
const port = process.env.PORT || 8080; 

// GETリクエスト用API
app.get("/", function(req, res){
  res.status(200);
  res.json({
    text: 'hello world'
  });
});

// POSTリクエスト用API
app.post("/", function(req, res) {

  // Content-Typeがapplication/json出ない場合はBadRequestError
  if (req.is('application/json')) {
    console.log(req.body);
    res.status(201);
    res.json(req.body);
  } else {
    console.log(req.body);
    res.status(400);
    res.json();
  }
});

app.listen(port);
console.log('listen on port ' + port);