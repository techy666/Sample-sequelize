import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// importing the routers
import userRouter from "./routes/user.route.js";

// redirecting the routes to respective routers
app.use("/api/v1/user", userRouter);

export default app;
