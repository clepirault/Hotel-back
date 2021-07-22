const express = require('express');
const router = express.Router();
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

// =====================================================
// AFFICHER LA CHAMBRE SELECTIONNEE POUR UNE RESERVATION
// =====================================================

router.get('/booking/:id', (req, res) => {
  const {id} = req.params;
  pool.query('SELECT room.name FROM room JOIN booking ON booking.room_id = room.id WHERE booking.id = ?', id, (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
