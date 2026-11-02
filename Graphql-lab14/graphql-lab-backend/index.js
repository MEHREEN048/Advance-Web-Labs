
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();

app.use(cors());

// Sample Users
let users = [
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

// Sample Products
let products = [
  { id: 1, name: 'Laptop', price: 75000 },
  { id: 2, name: 'Mobile', price: 45000 }
];

// GraphQL Schema
const schema = buildSchema(`
  type User {
    id: Int
    name: String
    email: String
  }

  type Product {
    id: Int
    name: String
    price: Float
  }

  type Query {
    users: [User]
    products: [Product]
  }

  type Mutation {
    addUser(name: String, email: String): User
    addProduct(name: String!, price: Float!): Product
  }
`);

// Resolvers
const root = {

  // Get all users
  users: () => users,

  // Get all products
  products: () => products,

  // Add new user
  addUser: ({ name, email }) => {
    const newUser = {
      id: users.length + 1,
      name: name,
      email: email
    };

    users.push(newUser);

    return newUser;
  },

  // Add new product
  addProduct: ({ name, price }) => {
    const newProduct = {
      id: products.length + 1,
      name: name,
      price: price
    };

    products.push(newProduct);

    return newProduct;
  }
};

// GraphQL Endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

// Start Server
app.listen(5000, () => {
  console.log('GraphQL Server running at http://localhost:5000/graphql');
});
