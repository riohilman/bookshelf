let books = [];

const bookForm = document.getElementById("bookForm");
const bookTable = document.getElementById("bookTable");
const feedback = document.getElementById("feedback");

const totalBooksEl = document.getElementById("totalBooks");
const finishedBooksEl = document.getElementById("finishedBooks");
const readingBooksEl = document.getElementById("readingBooks");

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = Number(document.getElementById("pages").value);
  const genre = document.getElementById("genre").value;
  const statusInput = document.querySelector("input[name='status']:checked");

  // Validasi sederhana
  if (!title || !author || !genre || !statusInput || pages < 1) {
    feedback.textContent = "Semua field wajib diisi dan jumlah halaman minimal 1.";
    feedback.style.color = "red";
    return;
  }

  const status = statusInput.value;

  const newBook = {
    id: Date.now(),
    title,
    author,
    pages,
    genre,
    status
  };

  books.push(newBook);

  feedback.textContent = "Buku berhasil ditambahkan!";
  feedback.style.color = "green";

  // nanti setelah ada renderTable & updateSummary kita panggil di sini
  renderTable();
  updateSummary();

  bookForm.reset();
});

function renderTable() {
}

function updateSummary() {
}
