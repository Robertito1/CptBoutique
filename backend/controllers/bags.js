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

bagsRouter.post("/", parser.array("images", 3), async (request, response, next) => {
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
      colors:body.colors,
      sizes:body.sizes,
      images:images,
      description: body.description
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
      const deletedbag = await Bag.deleteOne({_id:bag._id});
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

  const bag = {
    title: body.title,
    price: body.price,
    colors:body.colors,
    sizes:body.sizes,
    description: body.description
  };
  try {
    const updatedBag = await Bag.findByIdAndUpdate(request.params.id, bag, {
      new: true,
      runValidators: true,
    });

    response.json(updatedBag);
  } catch (error) {
    next(error);
  }
});

module.exports = bagsRouter;