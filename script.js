function Book(author, title, pages, read, id){
    this.author = author;a
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addToCatalog(book){
    let div = document.createElement("div");
    div.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-content: center";

    let img = document.createElement("img");
    img.src = "Images/pexels-mccutcheon-1148399.jpg";
    img.style.width = "auto";
    img.style.height = "200px";

    div.appendChild(img);

    let div2 = document.createElement("div");
    div2.style.cssText = "display: flex; flex-direction: column";

    let author = document.createElement("p");
    author.textContent = "Name of the author: " + book.author;

    let title = document.createElement("p");
    title.textContent = "Title of the book: " + book.title;

    let pages = document.createElement("p");
    pages.textContent = "Number of pages: " + book.pages;

    div2.appendChild(author);
    div2.appendChild(title);
    div2.appendChild(pages);
    
    div.appendChild(div2);
    catalog.appendChild(div);
}

let book1 = new Book("James", "The wolf of wallstreet", 236, false, 0);
let book2 = new Book("Sarah", "The walking Dead", 333, false, 1);
let book3 = new Book("John", "Absolute Theater", 403, true, 2);
const myLibrary = [book1, book2, book3];
const catalog = document.querySelector(".catalog");

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
    myLibrary[id] = new Book(x, y, z, false, id);
    id++;
    
}
)

for (i in myLibrary){
    addToCatalog(myLibrary[i]);
}
