// show dbs - list all the dbs
// use dbName -  create and switch to dbName
// db -  current db

db.books.insertMany([
  {
    id: "001",
    name: "Charlotte's web  Charlotte's ",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/PU2r9tDwZ1M",
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    id: "002",
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    trailer: "https://www.youtube.com/embed/gqviJoSkf6U",
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    id: "003",
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/san61qTwWsU",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
  },
  {
    id: "004",
    name: "Discover Your Destiny",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    rating: 6,
    trailer: "https://www.youtube.com/embed/o8wUR2JAeUw",
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
  },
  {
    id: "005",
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 6.9,
    trailer: "https://www.youtube.com/embed/Kxvp3eOYphY",
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    id: "006",
    name: "The power is within you",
    poster:
      "https://play-lh.googleusercontent.com/1aghoDaz52K3bbZA3EJGHvEpgaru4uMC3Ud2ik_EAW7SjNLwK7nXxOp_Uad-3L6Ovvg4C2-_d1kqVg=w480-h690-rw",
    rating: 9,
    summary:
      'Louise expands on her philosophy of "loving the self" and shows you how to overcome emotional barriers through learning to listen to your inner voice, loving the child within, letting your true feelings out, and much more!',
    trailer: "https://www.youtube.com/embed/4UzY6ksC6gU",
  },
  {
    name: "elon musk: tesla, spacex, and the quest for a fantastic future",
    poster:
      "https://rukminim1.flixcart.com/image/832/832/kplisnk0/book/l/l/t/elon-musk-original-imag3shevuu2d9qq.jpeg?q=70",
    rating: 7,
    summary: "elon musk: tesla, spacex, and the quest for a fantastic future",
    trailer: "elon musk: tesla, spacex, and the quest for a fantastic future",
    id: "007",
  },
  {
    name: "Harry potter",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/91bsMwU7IzL._RI_.jpg",
    rating: 8,
    summary:
      "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    trailer: "https://www.youtube.com/embed/fFGS4zZWGoA",
    id: "008",
  },
]);

db.books.find({}).pretty();

//rating > 8
db.books.find({ rating: { $gt: 8 } }).pretty();

//rating <= 7
db.books.find({ rating: { $lte: 7 } }).pretty();

//projection
//inclusion - 1
db.books.find({}, { name: 1, rating: 1 }).pretty();

//exclusion - 0
db.books.find({}, { name: 0, rating: 0 }).pretty();

//Sorting
//asc => 1
db.books.find({}).sort({ rating: 1 }).pretty();

//desc => -1
db.books.find({}).sort({ rating: -1 }).pretty();

//limit
//first highest rated books
db.books.find({}).sort({ rating: -1 }).limit(3).pretty();

//skip
db.books.find({}).sort({ rating: -1 }).skip(2).pretty();

//exclude _id, include-name, rating + sort -desc
db.books.find({}, { _id: 0, name: 1, rating: 1 }).sort({ rating: -1 }).pretty();

//rating > 8 + exclude _id, include-name, rating + sort -desc
db.books
  .find({ rating: { $gt: 8 } }, { _id: 0, name: 1, rating: 1 })
  .sort({ rating: -1 })
  .pretty();

//sorting - name -asc
db.books
  .find({}, { _id: 0, name: 1, rating: 1 })
  .sort({ rating: -1, name: 1 })
  .pretty();

//Select sum(quantity) from orders where status="urgent"
//group by ProductName

db.orders.insertMany([
  { _id: 0, productName: "Steel Beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel Beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel Beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron Rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron Rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron Rod", status: "urgent", quantity: 10 },
]);

db.orders.find({}).pretty();

//Stage 1
// $match, $group, $sum - aggregate operators

db.orders.aggregate({ $match: { status: "urgent" } }).pretty();

//Stage 2
db.orders.aggregate(
  { $match: { status: "urgent" } },
  {
    $group: { _id: "$productName", totalUrgentQuantity: { $sum: "$quantity" } },
  }
);

// Task
// 1. update the language for all document -Default English

db.books.updateMany({}, { $set: { language: "English" } });

db.books.find({}).pretty();

//2. update rating for "The Secret" from 8.8 to 10
// 3. update language=Tamil for "The Secret"
db.books.updateOne(
  { name: "The Secret" },
  { $set: { rating: 10, language: "Tamil" } }
);

db.books.findOne({ name: "The Secret" });

// 4. update language="Hindi" for "The power is within you"
db.books.updateOne(
  { name: "The power is within you" },
  { $set: { language: "Hindi" } }
);

// 5. Delete all books with rating below 7

db.books.find({ rating: { $lte: 7 } }, { name: 1, rating: 1 }).pretty();

db.books.deleteOne({ rating: { $lte: 7 } });

db.books.deleteMany({ rating: { $lte: 7 } });

db.books.find().count();

db.location.insertMany([
  {
    name: "Everest",
    height: 8848,
    location: ["Nepal", "China"],
    ascents: {
      first: {
        year: 1953,
      },
      first_winter: {
        year: 1980,
      },
      total: 5656,
    },
  },
  {
    name: "K2",
    height: 8611,
    location: ["Pakistan", "China"],
    ascents: {
      first: {
        year: 1954,
      },
      first_winter: {
        year: 1921,
      },
      total: 306,
    },
  },
  {
    name: "Kangchenjunga",
    height: 8586,
    location: ["Nepal", "India"],
    ascents: {
      first: {
        year: 1955,
      },
      first_winter: {
        year: 1986,
      },
      total: 283,
    },
  },
  {
    name: "Lhotse",
    height: 8516,
    location: ["Nepal", "China"],
    ascents: {
      first: {
        year: 1956,
      },
      first_winter: {
        year: 1988,
      },
      total: 461,
    },
  },
  {
    name: "Makalu",
    height: 8485,
    location: ["China", "Nepal"],
    ascents: {
      first: {
        year: 1955,
      },
      first_winter: {
        year: 2009,
      },
      total: 361,
    },
  },
]);
db.location.find({}).pretty();

db.location.find({ name: { $ne: "Everest" } }).pretty();

//match either Everest or K2
db.location.find({ name: { $in: ["Everest", "K2", "Jammu"] } }).pretty();

db.location.find({ location: { $in: ["China", "Nepal"] } }).pretty();

//ascents total where total > 1000

db.location.find({ "ascents.total": { $gt: 1000 } }).pretty();

//get only name
db.location.find({}, { name: 1 }).pretty();

db.books.insertMany([
  {
    id: "001",
    name: "Charlotte's web  Charlotte's ",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/PU2r9tDwZ1M",
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    id: "002",
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    trailer: "https://www.youtube.com/embed/gqviJoSkf6U",
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    id: "003",
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/san61qTwWsU",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
  },
  {
    id: "004",
    name: "Discover Your Destiny",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    rating: 6,
    trailer: "https://www.youtube.com/embed/o8wUR2JAeUw",
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
  },
  {
    id: "005",
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 6.9,
    trailer: "https://www.youtube.com/embed/Kxvp3eOYphY",
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    id: "006",
    name: "The power is within you",
    poster:
      "https://play-lh.googleusercontent.com/1aghoDaz52K3bbZA3EJGHvEpgaru4uMC3Ud2ik_EAW7SjNLwK7nXxOp_Uad-3L6Ovvg4C2-_d1kqVg=w480-h690-rw",
    rating: 9,
    summary:
      'Louise expands on her philosophy of "loving the self" and shows you how to overcome emotional barriers through learning to listen to your inner voice, loving the child within, letting your true feelings out, and much more!',
    trailer: "https://www.youtube.com/embed/4UzY6ksC6gU",
  },
  {
    name: "elon musk: tesla, spacex, and the quest for a fantastic future",
    poster:
      "https://rukminim1.flixcart.com/image/832/832/kplisnk0/book/l/l/t/elon-musk-original-imag3shevuu2d9qq.jpeg?q=70",
    rating: 7,
    summary: "elon musk: tesla, spacex, and the quest for a fantastic future",
    trailer: "elon musk: tesla, spacex, and the quest for a fantastic future",
    id: "007",
  },
  {
    name: "Harry potter",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/91bsMwU7IzL._RI_.jpg",
    rating: 8,
    summary:
      "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own.",
    trailer: "https://www.youtube.com/embed/fFGS4zZWGoA",
    id: "008",
  },
]);

db.books.updateMany({}, { $set: { language: "English" } });
db.books.find({}).pretty();

db.books.updateOne(
  { name: "The Secret" },
  { $set: { rating: "10", language: "Tamil" } }
);
db.books.findOne({ name: "The Secret" });

db.books.updateOne(
  { name: "The power is within you" },
  { $set: { language: "Hindi" } }
);

db.books.deleteMany({ rating: { $lte: 7 } });

db.books.find({}).pretty();

db.books.find({ rating: { $lt: 9 } }, { name: 1, rating: 1 }).pretty();

db.books.deleteOne({ rating: { $lt: 9 } });

db.books.find({}).pretty();

db.books.find().count();
db.books.deleteMany({ rating: { $lte: 8.1 } });

db.location.insertMany([
  {
    name: "Everest",
    height: 8848,
    location: ["Nepal", "China"],
    ascents: {
      first: {
        year: 1953,
      },
      first_winter: {
        year: 1980,
      },
      total: 5656,
    },
  },
  {
    name: "K2",
    height: 8611,
    location: ["Pakistan", "China"],
    ascents: {
      first: {
        year: 1954,
      },
      first_winter: {
        year: 1921,
      },
      total: 306,
    },
  },
  {
    name: "Kangchenjunga",
    height: 8586,
    location: ["Nepal", "India"],
    ascents: {
      first: {
        year: 1955,
      },
      first_winter: {
        year: 1986,
      },
      total: 283,
    },
  },
  {
    name: "Lhotse",
    height: 8516,
    location: ["Nepal", "China"],
    ascents: {
      first: {
        year: 1956,
      },
      first_winter: {
        year: 1988,
      },
      total: 461,
    },
  },
  {
    name: "Makalu",
    height: 8485,
    location: ["China", "Nepal"],
    ascents: {
      first: {
        year: 1955,
      },
      first_winter: {
        year: 2009,
      },
      total: 361,
    },
  },
]);

db.books.findOneAndUpdate(
  { name: "The power is within you" },
  { $set: { rating: "10", language: "Japanese" } }
);

db.location.find({ location: ["Nepal", "China"] }).pretty();

db.location.find({ "ascents.total": { $gt: 1000 } }).pretty();

db.location.find({}, { name: 1, _id: 0 }).pretty();

db.location.find().forEach((element) => {
  print("mountain: ", element.name);
});

db.location.find({ name: "Everest" }).forEach(function (doc) {
  var updatedName = "Mount Everest";
  db.location.updateOne({ _id: doc._id }, { $set: { name: updatedName } })
})
