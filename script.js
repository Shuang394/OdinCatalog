function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let book1 = new Book("James", "The wolf of wallstreet", 236, false);
let book2 = new Book("Sarah", "The walking Dead", 333, false);
let book3 = new Book("John", "Absolute Theater", 403, true);
const myLibrary = [book1, book2, book3];


function addBookToLibrary(){};

console.log(myLibrary);

const uploadButton = document.querySelector(".uploadButton");
let title = document.querySelector("#Title");
let author = document.querySelector("#Author");
let pages = document.querySelector("#Pages");
let id = 3;

uploadButton.addEventListener('click', function() {
    const x = author.value;
    const y = title.value;
    const z = pages.value;
    console.log(x + y + z);
    myLibrary[id] = new Book(x, y, z, false);
    id++;
    console.log(myLibrary);
}
)



