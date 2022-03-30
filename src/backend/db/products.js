import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Ikigai",
    author: "Hector Garcia",
    price: "150",
    categoryName: "Self Help & Personal Development",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/ikigai.jpg"
  },
  {
    _id: uuid(),
    title: "Architecture",
    author: "Hector Garcia",
    price: "5000",
    categoryName: "Architecture",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/architecture.jpg"    
  },
  {
    _id: uuid(),
    title: "Art of Photo",
    author: "Hector Garcia",
    price: "1800",
    categoryName: "Arts & Photography",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/artphoto.jpg"
  },
  {
    _id: uuid(),
    title: "Digital Art",
    author: "Hector Garcia",
    price: "2500",
    categoryName: "Arts & Photographyt",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/digitphototwo.jpg"
  },
  {
    _id: uuid(),
    title: "Photo Art",
    author: "Hector Garcia",
    price: "1200",
    categoryName: "Arts & Photography",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/digitphototwo.jpg"
  },
  {
    _id: uuid(),
    title: "Genesis",
    author: "Salgado",
    price: "1000",
    categoryName: "Arts & Photography",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/genesis.jpg"
  },
  {
    _id: uuid(),
    title: "The Landscape",
    author: "Scott Kelby",
    price: "2200",
    categoryName: "Arts & Photography",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/landscape.jpg"
  },
  {
    _id: uuid(),
    title: " Photography Art",
    author: "Bruce Barnbaum",
    price: "3000",
    categoryName: "Arts & Photography",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/photography.jpg"
  },
  {
    _id: uuid(),
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: "1000",
    categoryName: "Non-fiction",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/sapien.jpg"
  },
  {
    _id: uuid(),
    title: "Yogi",
    author: "Paramahansa Yogananda",
    price: "2000",
    categoryName: "Biographies & Memoirs",
    discount : 20,
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/yogi.jpg"
  },
  {
    _id: uuid(),
    title: "21 Lesson",
    author: "Yuval Noah Harari",
    price: "1500",
    categoryName: "Self Help & Personal Development",
    discount : "",
    image : "https://raw.githubusercontent.com/anupkgurung/thebooklet-ecom/development/image/book/21l.jpg"
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "500",
    categoryName: "Non-fiction",
    discount : 20,
    image: "https://images-na.ssl-images-amazon.com/images/I/41y2KJ+kDLL._SY344_BO1,204,203,200_.jpg"
  },
  {
    _id: uuid(),
    title: "Think Grow Rich",
    author: "Shiv Khera",
    price: "100",
    categoryName: "Fiction",
    discount : 20,
    image : "https://books.google.co.in/books/publisher/content?id=NZTPDAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3ZOt2_457bXf88ulhn3fVo0-SvrQ&w=1280"
  },
];
