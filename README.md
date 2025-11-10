# UTS-WSE-230104040218
**Web Service Engineering - Ujian Tengah Semester Ganjil 20251**

---

## 1. Identitas Proyek

| Keterangan | Detail |
| :--- | :--- |
| **Nama Proyek Acuan** | [cite_start]UTS-WSE-230104040218 [cite: 28] |
| **NIM** | **[230104040218]** ⬅️  |
| **Resource** | [cite_start]**orders** (Ditentukan oleh Digit Akhir NIM 8) [cite: 61] |
| [cite_start]**Field Utama Resource** | product, quantity, price [cite: 61] |
| **Dosen Pengampu** | [cite_start]Muhayat, M.IT [cite: 13] |

---

## 2. Deskripsi API

[cite_start]API ini adalah implementasi RESTful API berbasis **Express.js** untuk mengelola *resource* **`orders`** (Data Pesanan), yang diwajibkan sebagai bagian dari UTS[cite: 31].

[cite_start]API ini mengimplementasikan operasi **CRUD lengkap** dan menerapkan **7 Prinsip RESTful API**[cite: 29]. [cite_start]Semua data menggunakan *data dummy* yang disimpan di memori (tidak menggunakan database)[cite: 43]. [cite_start]Semua respons dikembalikan dalam format JSON yang konsisten[cite: 32].

---

## 3. Cara Menjalankan Proyek

Pastikan Anda memiliki Node.js (v18+) dan npm terinstal.

1.  **Kloning/Siapkan Proyek.**
2.  **Instal Dependensi:**
    ```bash
    npm install
    ```
3.  **Jalankan Server:**
    ```bash
    npm run dev
    ```
4.  **Verifikasi Layanan:**
    [cite_start]Server akan berjalan di port default **3000**[cite: 55]. Anda dapat memverifikasi layanan di *endpoint* informasi: `http://localhost:3000/api/info`.

---

## 4. Spesifikasi Endpoint (Prinsip 1, 2, 4, 7)

[cite_start]Berikut adalah daftar lengkap *endpoint* untuk *resource* `/api/orders` yang tersedia dan Status Code yang digunakan, sesuai standar RESTful[cite: 62, 63]:

| Method | Endpoint | Deskripsi | Status Code Sukses | Status Code Gagal |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/api/orders` | Ambil semua data pesanan | [cite_start]`200 (OK)` [cite: 63] | - |
| **GET** | `/api/orders/:id` | Ambil data berdasarkan ID | [cite_start]`200 (OK)` [cite: 63] | [cite_start]`404 (Not Found)` [cite: 63] |
| **POST** | `/api/orders` | Tambah data baru | [cite_start]`201 (Created)` [cite: 63] | [cite_start]`400 (Bad Request)` [cite: 63] (Validasi Input) |
| **PUT** | `/api/orders/:id` | Update data | [cite_start]`200 (OK)` [cite: 63] | [cite_start]`400 / 404` [cite: 63] |
| **DELETE** | `/api/orders/:id` | Hapus data | [cite_start]`204 (No Content)` [cite: 63] | [cite_start]`404 (Not Found)` [cite: 63] |
| **GET** | `/api/info` | Informasi service | [cite_start]`200 (OK)` [cite: 63] | - |

---

## 5. Penerapan 7 Prinsip RESTful API

[cite_start]Penerapan 7 Prinsip RESTful API [cite: 59] dalam proyek ini adalah sebagai berikut:

1.  [cite_start]**Resource-Oriented URI (Prinsip 1):** Menggunakan kata benda jamak (`orders`) pada URI, contoh `/api/orders`[cite: 59].
2.  [cite_start]**Proper HTTP Methods (Prinsip 2):** Menggunakan metode HTTP yang sesuai untuk setiap operasi CRUD (GET, POST, PUT, DELETE)[cite: 59].
3.  [cite_start]**Stateless Communication (Prinsip 3):** Server tidak menyimpan *session* atau *state* klien di antara *request*[cite: 59].
4.  [cite_start]**Consistent Status Codes (Prinsip 4):** Menggunakan status code standar seperti `200`, `201`, `204`, `400`, dan `404` secara konsisten[cite: 59].
5.  [cite_start]**JSON Representation (Prinsip 5):** Semua respons API dikembalikan dalam format JSON yang rapi[cite: 59, 54].
6.  **Validation & Error Handling (Prinsip 6):** Setiap permintaan `POST` dan `PUT` memverifikasi *field* wajib (`product`, `quantity`, `price`). [cite_start]Jika validasi gagal, sistem mengembalikan error **`400 Bad Request`**[cite: 59].
7.  [cite_start]**Discoverability (Prinsip 7):** Menyediakan *endpoint* metadata `/api/info` sebagai identitas layanan[cite: 59, 56].

---