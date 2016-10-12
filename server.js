var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article={
	'article-one': {
		title:`article-one  Aman Tiwari`,
		heading:`article-one`,
		date: `13 October`,
		content:`In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on. Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular. `
	},

	'article-two':{
		title:`article-two  Aman Tiwari`,
		heading:`article-two`,
		date: `13 October`,
		content:`This Is Second Page`
	},

	'article-three':{
		title:`article-three  Aman Tiwari`,
		heading:`article-three`,
		date: `13 October`,
		content:`This Is Third Page`
	}

}
function createTemplate(data){
	var heading=data.heading;
	var title = data.title;
	var content= data.content;
	var date=data.date;

	var htmlTemplate=
		`
		<html>
	    <head>
	        <link href="/ui/style.css" rel="stylesheet" />
	        <meta name="viewport" content="width-device-width, initial-scale-1">
	    </head>
	    <body>
	        <br>
	        <div class="container">
	            <h1>${heading}</h1>
	            <h4>${date}</h4>
	        	<p>${content}</p>
	        </div>
	        <script type="text/javascript" src="/ui/main.js">
	        </script>
	    </body>
	</html>
	`;
	return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function(req, res) {
	var articlename=req.params.articlename;
   res.send(createTemplate(article[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8081; // Use 8080 for local development because you might already have apache running on 80
app.listen(8081, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
