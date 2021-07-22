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

router.post('/', (req, res) => {
  const newBooking = req.body;
  pool.query(
    `INSERT INTO booking SET ?`, [newBooking], (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(201).send({
          id: results.insertId,
          ...newBooking,
        });
      }
    }
  );
});

// =========================
// SUPPRIMER UNE RESERVATION
// =========================

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  pool.query(
    'DELETE FROM booking WHERE id = ?', id, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.sendStatus(204);
      }
    }
  );
});



module.exports = router;