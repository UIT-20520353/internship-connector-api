# Internship Connector API

A RESTful API for connecting students with local internship opportunities.

## Technologies

- Node.js
- Express
- TypeScript
- PostgreSQL
- TypeORM

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL (if using database features)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/internship-connector-api.git
   cd internship-connector-api
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Copy environment variables
   ```bash
   cp .env.example .env
   ```
4. Start development server
   ```bash
   npm run dev
   ```
   The server will be running at http://localhost:3000.

### Available Endpoints

**GET** /health - Health check endpoint

### Scripts

- Start development server with hot reload
  ```bash
  npm run dev
  ```
- Build for production
  ```bash
  npm run build
  ```
- Start production server
  ```bash
  npm start
  ```
