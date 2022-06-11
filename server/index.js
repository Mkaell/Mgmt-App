const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === "development",
    })
);

app.listen(PORT, console.log(`Server running on ${PORT}`));