/* Importaciones */
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParse = require("body-parser");
const dbConnection = require("./config/mongodb");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentsRoutes");

/*  */
app.use(cors());
app.use(express.json());
dbConnection();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

/* Rutas */
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });