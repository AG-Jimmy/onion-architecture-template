Onion architecture template

_This simple Onion architecture template uses **Node/Express** by **TypeScript**, With test tool **Jest** and two additional pages for handling 404 errors and API documentation._

## Features

- Onion architecture
- Jest for testing
- TypeScript for type safety
- Two additional pages: Not Found Page and API Documentation Page

## Available Routes

<ul>
<li>
/: Home page
</li>
<li>
/api-docs: API documentation
</li>
<li>
/*: 404 Page Not Found
</li>
</ul>

# Project Folder Structure

This document provides an overview of the folder structure for the project designed using Onion Architecture. The architecture emphasizes separation of concerns and independence between layers.

## Overview of Onion Architecture

The Onion Architecture consists of multiple layers:
1. **Domain Layer**: Contains the core business logic and rules.
2. **Application Layer**: Manages use cases and DTOs, serving as the intermediary between the Domain and Infrastructure layers.
3. **Infrastructure Layer**: Handles external interactions like databases, APIs, and frameworks.
4. **Presentation Layer** (if applicable): Deals with user interfaces or API routes for external interaction.

## Folder Structure

```
|-- __tests__/
|-- application/
|   |-- dtos/
|   |-- use-cases/
|-- config/
|   |-- corsOrigins.ts
|   |-- serverConfig.ts
|-- domain/
|   |-- entities/
|   |-- enums/
|   |-- repositories/
|   |-- services/
|-- infrastructure/
|   |-- controllers/
|   |-- public/
|   |-- repositories/
|   |-- routes/
|   |-- view/
|   |-- server.ts

```
ذ
ذذذ
## Dependencies

<ul>
<li>
<b>Express:</b> Fast, unopinionated, minimalist web framework for Node.js .
</li>
<li>
<b>dotenv:</b> Loads environment variables from a .env file into process.env .
</li>
<li>
<b>cookie-parser:</b> Parse Cookie header and populate req.cookies with an object keyed by the cookie names .
</li>
<li>
<b>cors:</b> CORS (Cross-Origin Resource Sharing) middleware for Express .
</li>
</ul>

## Dev Dependencies

<ul>
<li>
<b>TypeScript:</b> Typed superset of JavaScript that compiles to plain JavaScript .
</li>
<li>
<b>Jest:</b> JavaScript testing framework .
</li>
<li>
<b>ts-jest:</b> A TypeScript preprocessor with source map support for Jest .
</li>
<li>
<b>nodemon:</b> Utility that monitors for changes and automatically restarts the server .
</li>

<li>
<b>nodemon:</b> Utility that monitors for changes and automatically restarts the server .
</li>

<li>
<b>ts-node:</b> TypeScript execution environment and REPL for node.js, with source map support .
</li>
<li>
<b>supertest:</b> HTTP assertions made easy, with a fluent API for making requests .
</li>
</ul>

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AG-Jimmy/onion-architecture-template.git
```

2. Install dependencies:

```bash
cd onion-architecture-template
npm install
```

3. Install dependencies:

```bash
cd onion-architecture-template
npm install
```

## Running the Application

To start the application in development mode, run:

```bash
npm run dev
```

## Running the Application

- To start the application in development mode, run:

```bash
npm run dev
```

This will start the server using ts-node and automatically restart the server when changes are detected.

- To start the application in production mode, run:

```bash
npm start
```

This will build the TypeScript files and start the server using node.

- This template is configured with Jest for testing. To run tests, use the following command:

```bash
npm test
```
