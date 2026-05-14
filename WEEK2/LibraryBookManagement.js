// Book class definition
class Book {
    // Class properties
    title;
    author;
    pages;
    isAvailable;
    // Constructor to initialize book details
    constructor(title, author, pages) {
        // Assign values to object properties
        this.title = title
        this.author = author
        this.pages = pages
        // By default every book is available
        this.isAvailable = true
    }}
    // Method to borrow a book
    borrow() {
        // Check if book is available
        if (this.isAvailable) {
            // Mark book as borrowed
            this.isAvailable = false
            // Display success message
            console.log(this.title + " has been borrowed.")
        } else {
            // If already borrowed
            console.log(this.title + " is already borrowed.")
        }
    }
    // Method to return a borrowed book
    returnBook() {
        // Mark book as available again
        this.isAvailable = true
        // Display return message
        console.log(this.title + " has been returned.")
    }
    // Method to get complete book information
    getInfo() {
        // Return formatted book details
        return `${this.title} by ${this.author} (${this.pages} pages)`
    }
    // Method to check whether book is long
    // A book with more than 300 pages is considered long
    isLongBook() {
        return this.pages > 300
    }
}
// Creating Book Objects
const b1 = new Book("Harry Potter","J.K. Rowling",350)
const b2 = new Book("1984","George Orwell",328)
const b3 = new Book("The Hobbit","J.R.R. Tolkien",31)
const b4 = new Book("The Alchemist","Paulo Coelho",208)
const b5 = new Book("Wings of Fire","A.P.J. Abdul Kalam",180)
// Store all books inside library array
const library = [b1, b2, b3, b4, b5]
// Display all books in library
console.log("All Books in Library:")
for (let i = 0; i < library.length; i++) {
    console.log(library[i].getInfo())
}
// Borrow two books
b1.borrow()
b3.borrow()
// Display availability after borrowing
console.log("After Borrowing 2 Books:")
console.log(b1.title + " Available: " + b1.isAvailable)
console.log(b3.title + " Available: " + b3.isAvailable)
// Return one borrowed book
b1.returnBook()
// Display availability after returning
console.log("After Returning 1 Book:")
console.log(b1.title + " Available: " + b1.isAvailable)
// Count number of long books
let longBookCount = 0

for (let i = 0; i < library.length; i++) {

    // Check whether current book is long
    if (library[i].isLongBook()) {

        longBookCount++
    }
}

// Display total long books
console.log("Number of Long Books:", longBookCount)
// Display only available books
console.log("Available Books:")

for (let i = 0; i < library.length; i++) {

    // Check availability status
    if (library[i].isAvailable) {

        console.log(library[i].getInfo())
    }
}
