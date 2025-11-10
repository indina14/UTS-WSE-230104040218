// src/controllers/orders.controller.js

// Gunakan 'let' agar data bisa diubah (simulasi CRUD tanpa DB)
let orders = require('../data/orders.data'); 

// Helper: Validasi Input (Prinsip 6: Validation & Error Handling)
const validateOrder = (product, quantity, price) => {
    // Periksa field wajib: product, quantity, price
    if (!product || quantity === undefined || price === undefined) { 
        return { 
            valid: false, 
            message: "Field 'product', 'quantity', dan 'price' wajib diisi" 
        };
    }
    // Periksa format data: quantity dan price harus angka positif
    const numQuantity = parseInt(quantity);
    const numPrice = parseInt(price);

    if (isNaN(numQuantity) || isNaN(numPrice) || numQuantity <= 0 || numPrice <= 0) {
        return { 
            valid: false, 
            message: "Field 'quantity' dan 'price' harus berupa angka positif yang valid" 
        };
    }
    return { valid: true };
};


// 1. GET /api/orders (Ambil Semua Data)
exports.getOrders = (req, res) => {
    // Status Code 200 (OK)
    res.status(200).json({ // Prinsip 5: JSON Representation
        status: "success",
        data: orders
    });
};

// 2. GET /api/orders/:id (Ambil Data Berdasarkan ID)
exports.getOrderById = (req, res) => {
    const id = parseInt(req.params.id);
    const order = orders.find(o => o.id === id);

    if (order) {
        res.status(200).json({ status: "success", data: order });
    } else {
        // Status Code 404 (Not Found)
        res.status(404).json({ status: "fail", message: "Data pesanan tidak ditemukan" });
    }
};

// 3. POST /api/orders (Tambah Data Baru)
exports.createOrder = (req, res) => {
    const { product, quantity, price } = req.body;
    
    // Validasi (Prinsip 6)
    const validation = validateOrder(product, quantity, price);
    if (!validation.valid) {
        // Status Code 400 (Bad Request)
        return res.status(400).json({ status: "fail", message: validation.message });
    }

    // Buat data baru dan ID unik
    const newId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    const newOrder = {
        id: newId,
        product,
        quantity: parseInt(quantity),
        price: parseInt(price)
    };
    
    orders.push(newOrder); 

    // Status Code 201 (Created)
    res.status(201).json({
        status: "success",
        message: "Data pesanan berhasil dibuat",
        data: newOrder
    });
};

// 4. PUT /api/orders/:id (Update Data)
exports.updateOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const { product, quantity, price } = req.body;
    const index = orders.findIndex(o => o.id === id);

    // 1. Cek apakah ID ditemukan (Status 404)
    if (index === -1) {
        return res.status(404).json({ status: "fail", message: "Data pesanan tidak ditemukan" });
    }

    // 2. Validasi input (Status 400)
    const validation = validateOrder(product, quantity, price);
    if (!validation.valid) {
        return res.status(400).json({ status: "fail", message: validation.message });
    }

    // Update data
    orders[index] = {
        id: id,
        product,
        quantity: parseInt(quantity),
        price: parseInt(price)
    };

    // Status Code 200 (OK)
    res.status(200).json({
        status: "success",
        message: "Data pesanan berhasil diperbarui",
        data: orders[index]
    });
};

// 5. DELETE /api/orders/:id (Hapus Data)
exports.deleteOrder = (req, res) => {
    const id = parseInt(req.params.id);
    const index = orders.findIndex(o => o.id === id);

    if (index === -1) {
        // Status Code 404 (Not Found)
        return res.status(404).json({ status: "fail", message: "Data pesanan tidak ditemukan" });
    }

    orders.splice(index, 1);

    // Status Code 204 (No Content)
    res.status(204).send(); 
};