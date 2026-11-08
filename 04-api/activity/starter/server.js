// A tiny REST API for a bookshelf.
//
// Class: implement POST /books, PUT /books/:id, DELETE /books/:id
// Homework is a separate OpenAI wrapper in 04-api/hw/
//
// Run:  npm run dev  ->  http://localhost:3001

const express = require("express");

const app = express();
const PORT = 3001;

// Lets Express read JSON bodies from Insomnia (POST / PUT).
// Without this, req.body is undefined.
app.use(express.json());

// In-memory "database". Restarting the server resets to these two books.
let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "Hunt & Thomas", read: true },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", read: false },
];
let nextId = 3;

// ---------------------------------------------------------------------------
// DONE — use these as your template
// ---------------------------------------------------------------------------

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

// ---------------------------------------------------------------------------
// CLASS — POST, PUT, DELETE (see activity/BOOKS_API.md)
// ---------------------------------------------------------------------------

app.post("/books", (req, res) => {
  // TODO: title/author from req.body; 400 if missing; push; 201
  const { title, author } = req.body;

  if (!author || !title) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const book = { id: nextId++, title, author, read: false};
  books.push(book);
  res.status(201).json(book);
  
});

app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book){
    return res.status(404).json({ error: "Book not found"});
  }
  if (req.body.title !== undefined) {
    book.title = req.body.title;
  }
  if (req.body.author !== undefined) {
    book.author = req.body.author;
  }
  if (req.body.read !== undefined) {
    book.read = req.body.read;
  }
  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === Number(req.params.id))
  if (index === -1 ){
    return res.status(404).json({ error: "Book not found" })
  }
  const [deleted] = books.splice(index, 1);
  res.json(deleted);
});

app.listen(PORT, () => {
  console.log(`Books API listening on http://localhost:${PORT}`);
});
