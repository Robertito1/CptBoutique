const wearsRouter = require("express").Router();
const Wear = require("../models/wear");
const jwt = require("jsonwebtoken");
const parser = require("../utils/upload.config");

wearsRouter.get("/", async (request, response) => {
  const wears = await Wear.find({})
  response.json(wears);
});

wearsRouter.get("/:id", (request, response, next) => {
  Wear.findById(request.params.id)
    .then((wear) => {
      if (wear) {
        response.json(wear);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

wearsRouter.post("/", parser.array("images", 3), async (request, response, next) => {
  const body = request.body;
  const imagesResponse = request.files
  const images = imagesResponse.map(e => e.path)
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    let wear = new Wear({
      title: body.title,
      price: body.price,
      images: images,
    });

    const savedWear = await wear.save();
    response.json(savedWear);
  } catch (error) {
    console.log("catch working");
    next(error);
  }
});

wearsRouter.delete("/:id", async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    const wear = await Wear.findById(request.params.id);
    if (decodedToken.id) {
      const deletedWear = await Wear.deleteOne(wear);
      console.log(deletedWear);
      response.status(204).end();
    } else {
      return response.status(401).json({ error: "token missing or invalid" });
    }
  } catch (error) {
    next(error);
  }
});

wearsRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const sale = {
    title: body.title,
    price: body.price,
  };
  try {
    const updatedSale = await Sale.findByIdAndUpdate(request.params.id, {}, {
      new: true,
      runValidators: true,
    });

    response.json(updatedSale);
  } catch (error) {
    next(error);
  }
});

module.exports = wearsRouter;