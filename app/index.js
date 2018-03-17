// const root = 'https://jsonplaceholder.typicode.com/posts/1';
const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0133103633';

fetch(root, { method: "GET" })
  // .then(response => console.log(response));
  .then(response => response.json())
  .then(json => console.log(json));