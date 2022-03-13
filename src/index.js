/* Importaciones */
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./config/mongodb");
const productRoutes = require("./routes/productRoutes");


/*  */
app.use(cors());
app.use(express.json());
dbConnection();

/* Rutas */
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });