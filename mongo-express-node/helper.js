import { client } from "./index.js";

export async function getBookById(id) {
  return await client.db("b44-wd").collection("books").findOne({ id: id });
}
export async function addBook(newBooks) {
  return await client.db("b44-wd").collection("books").insertMany(newBooks);
}
export async function deleteBookById(id) {
  return await client.db("b44-wd").collection("books").deleteOne({ id: id });
}
export async function getAllBooks(req) {
  return await client
    .db("b44-wd")
    .collection("books")
    .find(req.query)
    .toArray();
}

export async function updateBookById(id, updatedBook) {
  return await client
    .db("b44-wd")
    .collection("books")
    .updateOne({ id: id }, { $set: updatedBook });
}
