var express = require('express'),
	router = express.Router(),
	fs = require('fs');
function _guid() {
    var guidHolder = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    var hex = '0123456789abcdef';
    var r = 0;
    var guidResponse = "";
    for (var i = 0; i < 36; i++) {
        if (guidHolder[i] !== '-' && guidHolder[i] !== '4') {
            // each x and y needs to be random
            r = Math.random() * 16 | 0;
        }

        if (guidHolder[i] === 'x') {
            guidResponse += hex[r];
        } else if (guidHolder[i] === 'y') {
            // clock-seq-and-reserved first hex is filtered and remaining hex values are random
            r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
            r |= 0x8; // set pos 3 to 1 as 1???
            guidResponse += hex[r];
        } else {
            guidResponse += guidHolder[i];
        }
    }

    return guidResponse;
};
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('cms/login', { title: 'AACA Login' });
});
router.get('/cms/overview', function(req, res, next) {
  res.render('cms/index', { title: 'AACA Publicaciones actuales / Status' });
});
router.get('/cms/create', function(req, res, next) {
  res.render('cms/new', { title: 'Nueva Publicacion' });
});
router.get('/cms/edit', function(req, res, next) {
  res.render('cms/edit', { title: 'Editar Publicacion' });
});
router.get('/cms/gallery', function(req, res, next) {
  res.render('cms/gallery', { title: 'Galeria' });
});
router.get('/cms/social', function(req, res, next) {
  res.render('cms/social', { title: 'Configuracion de Redes Sociales' });
});
router.get('/cms/newsstand', function(req, res, next) {
  res.render('cms/newsstand', { title: 'Configuracion de Quiosco' });
});
router.get('/cms/chat', function(req, res, next) {
  res.render('cms/chat', { title: 'Opciones del chat' });
});
router.get('/cms/config', function(req, res, next) {
  res.render('cms/config', { title: 'Configuracion' });
});
router.get('/cms/users/list', function(req, res, next) {
  res.render('cms/users/list', { title: 'Listado de usuarios' });
});
router.get('/cms/users/create', function(req, res, next) {
  res.render('cms/users/new', { title: 'Crear usuario' });
});
router.get('/cms/users/edit', function(req, res, next) {
  res.render('cms/users/edit', { title: 'Editar usuario' });
});
router.get('/cms/users/delete', function(req, res, next) {
  res.render('cms/users/del', { title: 'Eliminar usuarios' });
});
router.get('/cms/users/manage', function(req, res, next) {
  res.render('cms/users/manage', { title: 'Manejo de grupos / miembros' });
});

//CMS CRUD
//Create
router.post('/cms/new', function (req, res) {
	fs.writeFileSync("/cms/content/" + _guid(), req.content, function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 
  // res.send('POST request to the homepage');
});

module.exports = router;
