# 📚 libraryAPI

This is a simple library API built using RESTful principles. It allows users to manage a collection of books, including creating, reading, updating, and deleting book records.

## 📖 Project Story

This REST API was built as part of MLH GHW: Cloud. The goal was to create a robust and scalable API for managing a library of books. The project uses Node.js, Express, and MongoDB to provide a seamless experience for managing book data.

### Inspiration

The inspiration for this project came from a desire to create a simple yet powerful tool for managing a library's collection of books. I wanted to build something that could be easily integrated into any library system and provide a user-friendly interface for managing book data.

### What I Learned

Throughout the development of this project, I learned a lot about building RESTful APIs, working with MongoDB, and using Node.js and Express. I also gained valuable experience in handling data validation, error handling, and creating a scalable architecture.

### How I Built the Project

1. **Planning**: I started by planning the structure of the API and defining the endpoints and data models.
2. **Setup**: I set up the project using Node.js and Express, and connected to a MongoDB database.
3. **Development**: I implemented the CRUD operations for managing books, including creating, reading, updating, and deleting book records.
4. **Testing**: I tested the API thoroughly to ensure it worked as expected and handled edge cases gracefully.
5. **Deployment**: Finally, I deployed the API to a cloud server for easy access and scalability.

### Challenges I Faced

One of the main challenges I faced was ensuring data validation and error handling were robust and user-friendly. I also encountered some difficulties with setting up the MongoDB connection and managing environment variables securely. However, through persistence , I was able to overcome these challenges and build a reliable API.

## 📚 API Documentation

### Base URL

```
http://localhost:5000/api/v1
```

### Endpoints

#### 📚 Get All Books

```
GET /books
```

- **Description**: Retrieve a list of all books.
- **Response**: 
  - `200 OK`: Returns an array of book objects.

#### 📖 Get a Single Book

```
GET /books/:id
```

- **Description**: Retrieve a single book by its ID.
- **Parameters**:
  - `id` (string, required): The ID of the book to retrieve.
- **Response**: 
  - `200 OK`: Returns the book object.
  - `404 Not Found`: Book not found.

#### ✍️ Create a New Book

```
POST /books
```

- **Description**: Create a new book.
- **Request Body**: 
  - Single book object or an array of book objects.
- **Response**: 
  - `201 Created`: Returns the created book object(s).
  - `400 Bad Request`: Validation error.

#### 🛠️ Update a Book

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

#### 🗑️ Delete a Book

```
DELETE /books/:id
```

- **Description**: Delete a book by its ID.
- **Parameters**:
  - `id` (string, required): The ID of the book to delete.
- **Response**: 
  - `200 OK`: Returns a message indicating the book was deleted.
  - `404 Not Found`: Book not found.

## 🛠️ Installation

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

## 📜 License

This project is licensed under the MIT License.

