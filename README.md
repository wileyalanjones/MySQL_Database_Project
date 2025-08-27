Overview

A full-stack database-driven application built with Node.js, Express, Handlebars (templating), and MySQL. Originally inspired by a Node.js starter app and tailored for custom CRUD operations. It features dynamic tables enhanced with CSS styling, a responsive navigation bar, and MySQL integration.

Features

CRUD Functionality: Create, read, update, and delete database entries via a web interface.

Templating: Uses Handlebars for server-side rendering of HTML views.

Styling:

Data tables styled for readability and aesthetics (based on a dev.to tutorial). 
GitHub

Navigation bar adapted from W3Schools—a responsive, user-friendly UI. 
GitHub

Node.js Foundation: Forked or based on OSU’s Node.js exploration project and starter app. 
GitHub

Modular & Readable Codebase: Separation of code across database, pages, views, and app logic.

Tech Stack

Backend: Node.js, Express.js

Database: MySQL

Templating: Handlebars (HTML generation)

Frontend: HTML, CSS, (likely) vanilla JavaScript

Styling Resources:

Table layout from dev.to tutorial 
GitHub

Navigation bar from W3Schools 
GitHub

Repository Structure
├── app.js                  # Main app entry point
├── database/               # Database schema and connection files
├── views/                  # Handlebars templates
├── pages/                  # Express route handlers or page controllers
├── public/
│   ├── style.css           # Site-wide styles
│   └── (other static assets)
├── cs340_Portfolio/        # Portfolio-related content (if relevant)
├── package.json            # Project dependencies & scripts
├── package-lock.json       # Lockfile for npm
├── ssh/                     # SSH configs (if needed)
├── README.md               # This file
└── node_modules/            # Installed dependencies
