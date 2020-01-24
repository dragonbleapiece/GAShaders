var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

const shadersFolder = path.join(__dirname, '..', 'public', 'Shaders');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(fs.readdirSync(shadersFolder));
});

router.get('/:folder/:file', function(req, res, next) {
  const fileName = path.join(req.params.folder, req.params.file);
  res.sendFile(fileName, function(err) {
    if(err) {
      next(err);
    }
  });
});

module.exports = router;
