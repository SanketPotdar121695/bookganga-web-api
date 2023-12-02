# BookGanga Web API

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Disclaimer](#disclaimer)

## Description

BookGanga Web API facilitates the developers with different client-side requests. This individual project is a representation of a book store management API.

## Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="javascript" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/> 
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/> 
</p>

<h4 align="center">Deployed On:</h4>

<p align="center">
  <img src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white" alt="Render"/> 
</p>

## Features

- Add new books to the database
- Retrieve all the books from the database
- Retrieve a particular book by providing the ID of a specific book
- Update or delete a particular book by providing the ID of a specific book

## Installation

1. Clone the repository

```bash
git clone https://github.com/SanketPotdar121695/bookganga-web-api
```

2. Install dependencies

```bash
npm install
```

3. Start the project in development mode

```bash
npm run server
```

## Usage

1. Add a new book to the database (POST request)

```javascript
http://localhost:<PORT>/books/add
```

2. Retrieve all books from the database (GET request)

```javascript
http://localhost:<PORT>/books
```

3. Retrieve a particular book from the database (GET request)

```javascript
http://localhost:<PORT>/books/<bookID>
```

4. Update a particular book in the database (PUT request)

```javascript
http://localhost:<PORT>/books/update/<bookID>
```

5. Delete a particular book from the database (PUT request)

```javascript
http://localhost:<PORT>/books/delete/<bookID>
```

## Demo

Check out the demo <a href="https://bookganga-web-api.onrender.com" target="_blank">here</a>

## Disclaimer

This project is developed completely for educational purposes only and is not affiliated with or endorsed by the original website or its owners. The project was created solely for the purpose of learning and practicing web development skills and should not be used for any commercial or unauthorized purposes. All rights reserved.
