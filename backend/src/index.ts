const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

import router from "./routes/shopify.route";

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Unprotected routes
app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
