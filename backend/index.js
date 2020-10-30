require("dotenv").config();


const express = require('express')
const app = express()
const cors = require("cors");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const loginRouter = require("./controllers/login");
const usersRouter = require("./controllers/user");
const salesRouter = require("./controllers/sales");
const accessoriesRouter = require("./controllers/accessories");
const bagsRouter = require("./controllers/bags");
const shoesRouter = require("./controllers/shoes");
const wearsRouter = require("./controllers/wears");
const logger = require("./utils/logger");
const mongoose = require("mongoose");


const mongoUrl = config.MONGODB_URI;
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });


  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use("/api/user", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/sales" , salesRouter)
app.use("/api/accessories" , accessoriesRouter)
app.use("/api/bags" , bagsRouter)
app.use("/api/shoes" , shoesRouter)
app.use("/api/wears" , wearsRouter)



app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


