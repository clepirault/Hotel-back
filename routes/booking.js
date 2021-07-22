const express = require('express');
const router = express.Router();
const pool = require('../config/db-config');

// ================================
// AFFICHER TOUTES LES RESERVATIONS
// ================================

router.get('/', (req, res) => {
  pool.query('SELECT * FROM booking', (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).send(results);
    }
  });
});

// ==============================
// CREER UNE NOUVELLE RESERVATION
// ==============================



module.exports = router;