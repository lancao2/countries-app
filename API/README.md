# Documentation for `country-info-app`

## Overview
`country-info-app` is a Node.js application built using the Express framework. It provides basic functionality to retrieve information about countries, utilizing an external API for fetching country-related data. The application includes support for development with `nodemon` for automatic restarts and the use of `.env` for environment variable management.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [License](#license)

## Prerequisites
To run this application, make sure you have the following installed:
- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

## Installation
1. Clone the repository or download the project.
2. Navigate to the project directory.
3. Install dependencies by running the following command:
   ```bash
   npm install
## Running the Application
- Development Mode
To run the application in development mode, use the following command:


```bash
    npm run dev
```
This will start the server using nodemon, which automatically restarts the server when changes are detected.

- Production Mode
To run the application in production mode, use the following command:

```bash
 npm start
```
This will run the server using Node.js without the automatic restarts provided by nodemon.

## Scripts
The project includes the following npm scripts:

- npm run dev: Starts the application in development mode with nodemon to enable automatic restarts.
- npm start: Starts the application in production mode using node.

## Dependencies
Runtime Dependencies:

- axios: A promise-based HTTP client for making requests to external APIs.
- cors: A package to enable Cross-Origin Resource Sharing (CORS) for the application, allowing requests from other domains.
- dotenv: A package to load environment variables from a .env file.
- express: A minimal and flexible Node.js web application framework used to build the server and handle routes.
- Development Dependencies:
- nodemon: A utility that automatically restarts the server whenever code changes are detected during development.
## Environment Variables
This application uses the dotenv package to load environment variables from a .env file. Create a .env file in the root of the project to define any required environment variables.

Example .env file:

```bash
PORT=3000
```
