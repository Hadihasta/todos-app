
require("dotenv").config()
const express = require('express');
const app = express();
const router = require("./routes")
const errorHandler = require("./middlewares/errorHandler")

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(router);
app.use(errorHandler);


const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});