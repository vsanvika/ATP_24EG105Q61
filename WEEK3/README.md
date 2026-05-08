# Week 3: Node.js & Express REST APIs

Focus on building robust backend services using Node.js and Express, including data modeling and CRUD operations.

## Product REST API
The main focus is a Product Management API with the following features:

### Data Model
- `productId` (required)
- `productName` (required)
- `price` (required, range: 10,000 - 50,000)
- `brand` (required)

### Operations
- **Create**: Add new products.
- **Read All**: Retrieve all products.
- **Read by ID**: Fetch specific product details.
- **Update**: Modify product information.
- **Delete**: Remove products from the system.

## Files
- `server.js`: Main entry point for the Express server.
- `ProductAPI.js`: Route handlers for the product API.
- `ProductModel.js`: Data structure/Schema definition.
- `req.http`: HTTP request samples for testing.

## Getting Started
1. Install dependencies: `npm install`
2. Start the server: `node server.js`