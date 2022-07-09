require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);
// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
// extra packages

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.error(error);
  }
};

startServer();
