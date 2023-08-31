import express from "express";
import {
  getAllBooks,
  getBookById,
  deleteBookById,
  addBook,
  updateBookById,
} from "../helper.js";

const router = express.Router();

//get all books / query

router.get("/", async (req, res) => {
  const { language, rating } = req.query;
  console.log(req.query, language);
  // let filteredBook = books;
  // if (language) {
  //   filteredBook = books.filter((bk) => bk.language === language);
  // }
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  const book = await getAllBooks(req);
  res.send(book);
});

//get book by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const book = await getBookById(id);
  //  const book = books.find((bk) => bk.id === id);
  book ? res.send(book) : res.status(404).send({ message: "No Books Found" });
});

//delete book by id

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  const book = await deleteBookById(id);
  //  const book = books.find((bk) => bk.id === id);
  res.send(book);
});

//add book

router.post("/", async (req, res) => {
  const newBooks = req.body;
  console.log(req.body);
  const result = await addBook(newBooks);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body;
  const result = await updateBookById(id, updatedBook);
  res.send(result);
});

export const routeBooks = router;
