const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/ticket', ticketController.findBus);
//console.log("routed to the correct place {$ busController.searchBuses}")
module.exports = router;
