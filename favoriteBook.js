function addFavoriteBook(bookName){
    if (!bookName.includes("Great")){
        favoriteBooks.push(bookName)
    };
}

function printFavoriteBooks(){
    console.log(`Favorite books: ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks){
        console.log(bookName);
    }
}



var favoriteBooks = [];


addFavoriteBook("The Great Gatsby")
addFavoriteBook("The Lord of the Rings")
addFavoriteBook("Dreams of Joy")
addFavoriteBook("Great Expectations")
addFavoriteBook("Object Oriented Design")

printFavoriteBooks()