const Book = require("../models/Book");

// Get all books
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Get a single book
exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const data = req.body; // Expecting either a single object or an array

    if (Array.isArray(data)) {
      // Handle batch insert
      const books = await Book.insertMany(data);
      return res.status(201).json({ message: "Books added successfully", books });
    }

    // Handle single book insert
    const book = new Book(data);
    await book.save();
    res.status(201).json(book);

  } catch (error) {
    res.status(400).json({ message: "Validation Error", errors: error.errors });
  }
};


// Update a book
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

// Delete a book
exports.deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json({ message: "Book deleted" });
};
