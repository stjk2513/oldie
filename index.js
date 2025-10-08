const express = require('express');
const app     = express();
const port    = 3000;

const router  = express.Router();

router.get('/', function(req, res) {
	res.json({ message: "Hello, world!" });
});

app.use('/api', router);

app.listen(port, function() {
	console.log("Application listening on port:", port);
});
