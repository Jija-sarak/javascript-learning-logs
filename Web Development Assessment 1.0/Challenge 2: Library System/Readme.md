# Challenge 2: Library System
We want to create a class that represents a library book with its details and methods to interact with it.

Each book will be created as an object of this class by passing the required data into the constructor.

## The class will have methods to:
- Borrow a book (reducing the available copies if possible).
- Return a book (increasing the available copies).
- Show information about the book.

## Your Task:

### Define a class "Book" with:
**A constructor that takes:**
- title - a string storing the book title.
- author - a string storing the author name.
- copies - a number storing how many copies are available.

**A method "borrowBook()" that:**
- Decreases the number of "copies" by 1 if available.
- Logs "Borrowed successfully!" if borrowing was successful, otherwise logs "No copies left!".

**A method "returnBook()" that:**
- Increases the number of "copies" by 1.
- Logs "Book returned successfully!".

**A method "info()" that logs:**
- ```"<title>" by <author> - Copies available: <copies>```

### Create at least two book objects using the "Book" class, each with its own title, author, and copies.
**Demonstrate:**
- Borrowing a book multiple times until no copies remain.
- Returning a book.
- Displaying book information with ".info()".

