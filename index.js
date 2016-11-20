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
      let arabic= req.query.arabic || 0;
      let english= req.query.english || 0;
      let farsi= req.query.farsi || 0;
      let french= req.query.french || 0;
      let greek= req.query.greek || 0;
      let urdu= req.query.urdu || 0;
      let turkish= req.query.turkish || 0;
      let timezone= req.query.timezone;
      let email= req.query.email;
      let name = req.query.name;
      email = email.replace('@','__');
      res.render('fb-button', { title: 'Tarjimly-landing', formParam: 'n:'+name+'_a:'+arabic+'_e:'+english+'_fa:'+farsi+'_fr:'+french+'_g:'+greek+'_u:'+urdu+'_t:'+turkish+'_tz:'+timezone+'_m:'+email});
});

app.get('/landing', function (req, res) {
        res.render('landing', { title: 'Tarjimly-landing', message: 'Atif Can you see this?'});
});

app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
});
