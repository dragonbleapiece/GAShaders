var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();


const root = path.resolve(__dirname, '../public');
const shadersFolder = path.join(root, 'Shaders');
const modelsFolder = path.join(root, 'Models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(fs.readdirSync(shadersFolder));
});

/*router.get('/:folder/:file', function(req, res, next) {
  const fileName = path.join(req.params.folder, req.params.file);
  res.sendFile(fileName, function(err) {
    if(err) {
      next(err);
    }
  });
});*/

router.get('/:folder/fragment', function(req, res, next) {
  const options = {
    root: shadersFolder
  };
  const fileName = path.join(req.params.folder, 'shader.fs.glsl');
  res.sendFile(fileName, options, function(err) {
    if(err) {
      next(err);
    }
  });
});

router.get('/:folder/view', function(req, res, next) {
  const options = {
    root: shadersFolder
  };
  const fileName = path.join(req.params.folder, 'view.png');
  res.sendFile(fileName, options, function(err) {
    if(err) {
      next(err);
    }
  });
});

router.get('/:folder/description', function(req, res, next) {
  const options = {
    root: shadersFolder
  };
  const fileName = path.join(req.params.folder, 'description.txt');
  res.sendFile(fileName, options, function(err) {
    if(err) {
      next(err);
    }
  });
});

router.get('/:folder/vertex', function(req, res, next) {
  const options = {
    root: shadersFolder
  };
  const fileName = path.join(req.params.folder, 'shader.vs.glsl');
  res.sendFile(fileName, options, function(err) {
    if(err) {
      next(err);
    }
  });
});

router.get('/models/:folder/:file', function(req, res, next) {
  const options = {
    root: path.join(modelsFolder, req.params.folder)
  };
  const fileName = req.params.file;
  res.sendFile(fileName, options, function(err) {
    if(err) {
      next(err);
    }
  });
});

module.exports = router;
