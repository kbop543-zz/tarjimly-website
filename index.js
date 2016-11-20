var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'pug')



app.get('/', function (req, res) {
      res.send('Hello World!');
});


app.get('/raw', function (req, res) {
      res.sendFile('views/raw.html', {root: __dirname });
});

app.get('/fb-button', function (req, res) {
      let arabic= req.query.a;
      let english= req.query.e;
      let email= req.query.email;
      email = email.replace('@','_');
      res.render('fb-button', { title: 'Tarjimly-landing', formParam: 'a:'+arabic+'-e:'+english+'-m:'+email});
});

app.get('/landing', function (req, res) {
        res.render('landing', { title: 'Tarjimly-landing', message: 'Atif Can you see this?'});
});

app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
});
