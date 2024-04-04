// const express = require("express");
// const app = express();
// const cors = require("cors");


// app.use(cors());
// app.use(express.json());

// const rootRouter = require("./routes/index");
// app.use("/api/v1", rootRouter);


// app.listen(3000// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);
