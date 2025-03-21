import express from "express";
import dotenv from "dotenv";
import sequelize from "./lib/db.js";

import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import testRouter from "./routes/test.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/tests", testRouter);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("SQL Server established successfully");

    app.on("error", (err) => {
      console.log("Error while listening to port- ");
      throw err;
    });

    const port = process.env.PORT || 8081;
    app.listen(port, () => {
      console.log(`Node is listening to http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the DB:", err);
    process.exit(1);
  });
