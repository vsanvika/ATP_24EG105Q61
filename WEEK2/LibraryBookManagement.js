class Book{
title;
author;
pages;
isAvailable;
constructor(title,author,pages){
    this.title=title
    this.author=author
    this.pages=pages
    this.isAvailable=true

}
 borrow(){
    if(this.isAvailable){
        this.isAvailable=false
        console.log(this.title+" has been borrowed.")
    }else{
        console.log(this.title + "is already borrowed.")
    }

 }
 returnBook(){

    this.isAvailable = true
    console.log(this.title + "has been returned.")

 }
 getInfo(){
  return  `${this.title} by ${this.name} (${this.pages} pages)`
 } 
 isLongBook(pages){
    return this.pages>300
 }
}
const b1=new Book("Harry potter","J.K.rowling",350)
const b2=new Book("1984","george orwell",328)
const b3=new Book("the hobbit","J.R.R.tolkien",310)
const b4=new Book("The Alchemist","paulo Coelho",208)
const b5=new Book("wings of fire","A.P.J.Abdul kalam",180)

/*console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())*/
const library = [b1, b2, b3, b4, b5]
console.log("All Books in Library:")
for (let i = 0; i < library.length; i++) {
    console.log(library[i].getInfo())
}
b1.borrow()
b3.borrow()
console.log("After Borrowing 2 Books:")
console.log(b1.title + " Available: " + b1.isAvailable)
console.log(b3.title + " Available: " + b3.isAvailable)
b1.returnBook();
console.log("After Returning 1 Book:");
console.log(b1.title + " Available: " + b1.isAvailable)
let longBookCount = 0
for (let i = 0; i < library.length; i++) {
    if (library[i].isLongBook()) {
        longBookCount++
    }
}
console.log("Number of Long Books:", longBookCount)
console.log("Available Books:");
for (let i = 0; i < library.length; i++) {
    if (library[i].isAvailable) {
        console.log(library[i].getInfo())
    }
}