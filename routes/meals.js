const express = require('express');
const router = express.Router();
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

// ====================================================
// AFFICHER LES REPAS SELECTIONNES POUR UNE RESERVATION
// ====================================================

router.get('/:id', (req, res) => {
  const {id} = req.params;
  pool.query('SELECT meal.type FROM meal JOIN booking ON booking.meal_id = meal.id WHERE booking.id = ?', id, (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;