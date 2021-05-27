const express = require('express');
const router = express.Router();

// Controllers
const typeController = require('../controllers/type.service');
const genreController = require('../controllers/genre.service');
const subGenreController = require('../controllers/subgenre.service');
const contentController = require('../controllers/content.service');
const clientController = require('../controllers/client.service');

// types
router.get('/type', typeController.getAllTypes);
router.get('/type/:id', typeController.getSingleType);
router.post('/type', typeController.createType);
router.put('/type/:id', typeController.updateType);
router.delete('/type/:id', typeController.deleteType);

// genre
router.get('/genre', genreController.getAllGenre);
router.get('/genre/:id', genreController.getSingleGenre);
router.post('/genre', genreController.createGenre);
router.put('/genre/:id', genreController.updateGenre);
router.delete('/genre/:id', genreController.deleteGenre);

// subgenre
router.get('/subgenre', subGenreController.getAllSubGenre);
router.get('/subgenre/:id', subGenreController.getSingleSubGenre);
router.post('/subgenre', subGenreController.createSubGenre);
router.put('/subgenre/:id', subGenreController.updateSubGenre);
router.delete('/subgenre/:id', subGenreController.deleteSubGenre);

// content
router.get('/content', contentController.getAllContent);
router.get('/content/:id', contentController.getSingleContent);
router.post('/content', contentController.createContent);
router.put('/content/:id', contentController.updateContent);
router.delete('/content/:id', contentController.deleteContent);

// client
router.get('/client', clientController.getAllClient);
router.get('/client/:id', clientController.getSingleClient);
router.post('/client', clientController.createClient);
router.put('/client/:id', clientController.updateClient);
router.delete('/client/:id', clientController.deleteClient);
router.post('/login', clientController.login);
router.post('/register', clientController.register);

module.exports = router;