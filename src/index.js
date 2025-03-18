import dotenv from "dotenv";
import sequelize from "./lib/db.js";
import app from "./app.js";

dotenv.config();

sequelize
  .authenticate()
  .then(() => {
    console.log("SQL Server established successfully");

    app.on("error", (err) => {
      console.log("ERROR Occured: ");
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
