function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let book1 = new Book("James", "The wolf of wallstreet", 236, false);
let book2 = new Book("Sarah", "The walking Dead", 333, false);
let book3 = new Book("John", "Absolute Theater", 403, true);
const myLibrary = [book1, book2];


function addBookToLibrary(){};

console.log(myLibrary);



