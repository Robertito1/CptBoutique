const bagsRouter = require("express").Router();
const Bag = require("../models/bag");
const jwt = require("jsonwebtoken");
const parser = require("../utils/upload.config");

bagsRouter.get("/", async (request, response) => {
  const bags = await Bag.find({})
  response.json(bags);
});

bagsRouter.get("/:id", (request, response, next) => {
  Bag.findById(request.params.id)
    .then((bag) => {
      if (bag) {
        response.json(bag);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

bagsRouter.post("/", parser.array("images", 2), async (request, response, next) => {
  const body = request.body;
  const imagesResponse = request.files
  const images = imagesResponse.map(e => e.path)
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    let bag = new Bag({
      title: body.title,
      price: body.price,
      images: images,
    });

    const savedBag = await bag.save();
    response.json(savedBag);
  } catch (error) {
    console.log("catch working");
    next(error);
  }
});

bagsRouter.delete("/:id", async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    const bag = await Bag.findById(request.params.id);
    if (decodedToken.id) {
      const deletedbag = await Bag.deleteOne(bag);
      console.log(deletedbag);
      response.status(204).end();
    } else {
      return response.status(401).json({ error: "token missing or invalid" });
    }
  } catch (error) {
    next(error);
  }
});

bagsRouter.put("/:id", async (request, response, next) => {
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

module.exports = bagsRouter;