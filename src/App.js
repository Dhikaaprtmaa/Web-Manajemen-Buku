import React, { useState } from 'react';
import './App.css'; 

// Komponen Utama Aplikasi
function App() {
  // State untuk menyimpan daftar buku
  const [daftarBuku, setDaftarBuku] = useState([]);

  // State untuk menyimpan input formulir
  const [inputJudul, setInputJudul] = useState('');
  const [inputPenulis, setInputPenulis] = useState('');

  // FUNGSI TAMBAH DATA (CREATE)
  const tambahBuku = (e) => {
    e.preventDefault(); 

    if (!inputJudul.trim() || !inputPenulis.trim()) {
      alert('Judul dan Penulis tidak boleh kosong!');
      return;
    }

    const bukuBaru = {
      id: Date.now(), // ID unik sederhana
      judul: inputJudul,
      penulis: inputPenulis,
    };

    // Menambahkan buku baru ke daftar
    setDaftarBuku([...daftarBuku, bukuBaru]);

    // Mengosongkan input
    setInputJudul('');
    setInputPenulis('');
  };

  // FUNGSI HAPUS DATA (DELETE)
  const hapusBuku = (idBuku) => {
    // Memfilter daftar, hanya menyisakan buku yang ID-nya tidak sama dengan idBuku yang akan dihapus
    const daftarBukuTerbaru = daftarBuku.filter(buku => buku.id !== idBuku);
    setDaftarBuku(daftarBukuTerbaru);
  };

  return (
    <div className="App">
      <h1>Sistem Manajemen Data Buku</h1>

      {/* Bagian Tambah Data */}
      <div className="form-container">
        <h2>Tambah Buku Baru</h2>
        <form onSubmit={tambahBuku}>
          <div>
            <label>Judul:</label>
            <input
              type="text"
              value={inputJudul}
              onChange={(e) => setInputJudul(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Penulis:</label>
            <input
              type="text"
              value={inputPenulis}
              onChange={(e) => setInputPenulis(e.target.value)}
              required
            />
          </div>
          <button type="submit">Tambah Buku</button>
        </form>
      </div>

      <hr />

      {/* Bagian Tampilkan Data */}
      <div className="data-container">
        <h2>Daftar Buku ({daftarBuku.length} total)</h2>

        {daftarBuku.length === 0 ? (
          <p>Belum ada data buku yang ditambahkan.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Judul</th>
                <th>Penulis</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* TAMPILKAN DATA (READ) - Menggunakan map() */}
              {daftarBuku.map((buku) => (
                <tr key={buku.id}>
                  <td>{buku.id}</td>
                  <td>{buku.judul}</td>
                  <td>{buku.penulis}</td>
                  <td>
                    <button 
                      className="delete-button"
                      onClick={() => hapusBuku(buku.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;