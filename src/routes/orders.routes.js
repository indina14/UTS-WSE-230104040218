// src/routes/orders.routes.js

const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller'); 

// Prinsip 1: Resource-Oriented URI (Menggunakan /api/orders)

router.route('/')
    .get(ordersController.getOrders)    // GET Semua
    .post(ordersController.createOrder); // POST Baru

router.route('/:id')
    .get(ordersController.getOrderById)  // GET by ID
    .put(ordersController.updateOrder)   // PUT Update
    .delete(ordersController.deleteOrder); // DELETE

module.exports = router; // Wajib: Ekspor router