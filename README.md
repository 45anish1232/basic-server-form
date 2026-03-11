# Basic Server Form (Node.js + Express + EJS)

This project demonstrates a simple **server-side rendered web application** using **Node.js, Express, and EJS**.  
It includes a basic HTML form that sends user data to the server and displays the submitted information on a result page.

## Features

- HTML form for user input
- Express.js server setup
- POST request handling
- Server-side rendering using EJS
- Styled UI using CSS
- Redirect to a colorful result page after form submission

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML5
- CSS3

## Project Structure


basic-server-form
│
├── public
│ └── style.css
│
├── views
│ ├── index.ejs
│ └── result.ejs
│
├── server.js
├── package.json
└── README.md

## How It Works

1. The user enters **Name** and **Email** in the form.
2. The form sends a **POST request** to the server.
3. Express receives the request and extracts the form data.
4. The server renders a **dynamic result page** using EJS.
5. The submitted data is displayed on the page.

