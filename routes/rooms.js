var express = require('express');
var router = express.Router();
const pool = require('../config/db-config');

// ============================
// AFFICHER TOUTES LES CHAMBRES
// ============================

router.get('/', (req, res) => {
  pool.query('SELECT * FROM room', (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).send(results);
    }
  });
});

// ====================================
// AFFICHER LES CHAMBRES SELON LEUR NOM
// ====================================

router.get('/:name', (req, res) => {
  const { name } = req.params;
  pool.query(
    'SELECT * FROM room WHERE room.name = ?',
    name,
    (error, results) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).send(results);
      }
    }
  );
});

// =================================
// AFFICHER LES CHAMBRES DISPONIBLES
// =================================

/* router.get('/availabilities/:stock', (req, res) => {
  const { stock } = req.params;
  pool.query(
    'SELECT name FROM room WHERE stock >= ?',
    stock,
    (error, results) => {
      if (error) {
        res.status(500).json(error);
      } else {
        if (results.length){
          res.status(200).send(results);
        }else{
          res.status(404).send('not available');
        }   
      }
    }
  );
}); */

module.exports = router;
