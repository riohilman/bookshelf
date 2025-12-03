// Array untuk menyimpan data buku
let books = [];

// Ambil elemen DOM yang akan dipakai
const bookForm = document.getElementById("bookForm");
const bookTable = document.getElementById("bookTable");
const feedback = document.getElementById("feedback");

const totalBooksEl = document.getElementById("totalBooks");
const finishedBooksEl = document.getElementById("finishedBooks");
const readingBooksEl = document.getElementById("readingBooks");

// Listener submit (sementara cuma mencegah reload dulu)
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form disubmit (belum ada logika)");
});

function renderTable() {}
function updateSummary() {}
