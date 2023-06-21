const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const countryRoute = require("./routes/stateRoutes");
const stateRoute = require("./routes/stateRoutes");
const cityRouter = require("./routes/cityRoutes");
const microlocationRouter = require("./routes/microLocationRoutes");
require("dotenv").config();
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/allCountry", countryRoute);
app.use("/api/state", stateRoute);
app.use("/api/city", cityRouter);
app.use("/api/microlocation", microlocationRouter);

app.listen(process.env.PORT, console.log("server started on 5000"));
