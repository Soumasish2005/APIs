# libraryAPI

This is a simple library API built using RESTful principles. It allows users to manage a collection of books, including creating, reading, updating, and deleting book records.

## Project Story

This REST API was built as part of MLH GHW: Cloud. The goal was to create a robust and scalable API for managing a library of books. The project uses Node.js, Express, and MongoDB to provide a seamless experience for managing book data.

## API Documentation

### Base URL

```
http://localhost:5000/api/v1
```

### Endpoints

#### Get All Books

```
GET /books
```

- **Description**: Retrieve a list of all books.
- **Response**: 
  - `200 OK`: Returns an array of book objects.

#### Get a Single Book

```
GET /books/:id
```

- **Description**: Retrieve a single book by its ID.
- **Parameters**:
  - `id` (string, required): The ID of the book to retrieve.
- **Response**: 
  - `200 OK`: Returns the book object.
  - `404 Not Found`: Book not found.

#### Create a New Book

```
POST /books
```

- **Description**: Create a new book.
- **Request Body**: 
  - Single book object or an array of book objects.
- **Response**: 
  - `201 Created`: Returns the created book object(s).
  - `400 Bad Request`: Validation error.

#### Update a Book

```
PUT /books/:id
```

- **Description**: Update an existing book by its ID.
- **Parameters**:
  - `id` (string, required): The ID of the book to update.
- **Request Body**: 
  - Book object with updated fields.
- **Response**: 
  - `200 OK`: Returns the updated book object.
  - `404 Not Found`: Book not found.

#### Delete a Book

```
DELETE /books/:id
```

- **Description**: Delete a book by its ID.
- **Parameters**:
  - `id` (string, required): The ID of the book to delete.
- **Response**: 
  - `200 OK`: Returns a message indicating the book was deleted.
  - `404 Not Found`: Book not found.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd libraryAPI
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB URI and port:
   ```
   MONGO_URI=<your-mongodb-uri>
   PORT=5000
   ```
5. Start the server:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.

