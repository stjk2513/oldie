const express = require('express');
const app     = express();
const port    = 3000;

app.use(express.static('public'));

const router  = express.Router();

router.get('/', function(req, res) {
	res.json({ message: "Hello, world!" });
});

app.use('/api', router);

app.listen(port, function() {
	console.log("Application listening on port:", port);
});
