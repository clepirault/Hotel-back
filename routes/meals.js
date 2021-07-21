var express = require('express');
var router = express.Router();
const pool = require('../config/db-config');

// ====================================
// AFFICHER TOUTES LES OPTIONS DE REPAS
// ====================================

router.get('/', (req, res) => {
  pool.query('SELECT * FROM meal', (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;