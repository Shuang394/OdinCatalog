# OdinCatalog
Advanced javascript practice for the odin project, learning how objects and prototyping works

# Lessons learnt:

1. You can dynamically create new objects during runtime!

```javascript
uploadButton.addEventListener('click', function() {
    const x = author.value;
    const y = title.value;
    const z = pages.value;
    console.log(x + y + z);
    myLibrary[id] = new Book(x, y, z, false);
    id++;
    console.log(myLibrary);
}
```

2. In a javascript function, reference to a document object (div, p etc.) is completely local! AKA, if you create a div element called "div1", and you have a event listener inside this function to delete div1, the event listener is specific to that div!

```javascript
    let div = document.createElement("div");
    //Delete button
    let button = document.createElement("button");
    button.style.cssText = "background-color: red; color: white: font-size: 1rem; width: 50%";
    button.innerText = "Delete Book";
    div.appendChild(button);

    button.addEventListener('click', function(){
        let deleteId = book.id;
        myLibrary.splice(deleteId, 1);
        catalog.removeChild(div);
    })
```
