// src/app.js

const express = require('express');
const app = express();
const ordersRoutes = require('./routes/orders.routes.js'); // Pastikan .js ada

const PORT = 3000;

// Middleware
app.use(express.json()); // Agar bisa membaca body JSON dari request

// Route Resource Orders
// Semua route orders akan diakses melalui /api/orders
app.use('/api/orders', ordersRoutes); 

// Endpoint /api/info (Prinsip 7: Discoverability & Ketentuan Umum)
app.get('/api/info', (req, res) => { 
    // Status Code 200
    res.status(200).json({
        status: "success",
        serviceName: "Web Service Engineering UTS API",
        version: "1.0.0",
        resource: "Orders (NIM Akhir 8)",
        author: "230104040218",
        documentation: "Lihat README.md atau endpoint ini."
    });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access info at http://localhost:${PORT}/api/info`);
});