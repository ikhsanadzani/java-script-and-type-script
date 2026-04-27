const express = require('express');
const path = require('path');
const app = express();

// 1. Pastikan express.static mengarah ke folder 'public' dengan benar
// Gunakan path.join agar tidak ada masalah pemisah folder (/ atau \)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Rute untuk file statis pendukung (jika ada file di folder utama selain index.html)
app.use(express.static(__dirname));

// 3. Rute Wildcard untuk SPA
app.get('/*path', (req, res) => { 
    // Menggunakan path.join(__dirname, 'index.html') karena filenya satu folder dengan server.js
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if (err) {
            // Jika tetap error, ini akan memunculkan pesan spesifik di terminal
            console.error("Error: File index.html tidak ditemukan di:", path.join(__dirname, 'index.html'));
            res.status(500).send("File index.html tidak ditemukan!");
        }
    });
});

app.listen(3000, function () {
    console.log("Server berjalan di http://localhost:3000");
});
