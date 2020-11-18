const shoesRouter = require("express").Router();
const Shoe = require("../models/shoe");
const jwt = require("jsonwebtoken");
const parser = require("../utils/upload.config");

shoesRouter.get("/", async (request, response) => {
  const shoes = await Shoe.find({})
  response.json(shoes);
});

shoesRouter.get("/:id", (request, response, next) => {
  Shoe.findById(request.params.id)
    .then((shoe) => {
      if (shoe) {
        response.json(shoe);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

shoesRouter.post("/", parser.array("images", 3), async (request, response, next) => {
  const body = request.body;
  const imagesResponse = request.files
  const images = imagesResponse.map(e => e.path)
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    let shoe = new Shoe({
      title: body.title,
      price: body.price,
      colors:body.colors,
      sizes:body.sizes,
      images:images,
      description: body.description
    });

    const savedShoe = await shoe.save();
    response.json(savedShoe);
  } catch (error) {
    console.log("catch working");
    next(error);
  }
});

shoesRouter.delete("/:id", async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    const shoe = await Shoe.findById(request.params.id);
    if (decodedToken.id) {
      const deletedShoe = await Shoe.deleteOne({_id:shoe._id});
      console.log(deletedShoe);
      response.status(204).end();
    } else {
      return response.status(401).json({ error: "token missing or invalid" });
    }
  } catch (error) {
    next(error);
  }
});

shoesRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const shoe = {
    title: body.title,
    price: body.price,
    colors:body.colors,
    sizes:body.sizes,
    description: body.description
  };
  try {
    const updatedShoe = await Shoe.findByIdAndUpdate(request.params.id, shoe, {
      new: true,
      runValidators: true,
    });

    response.json(updatedShoe);
  } catch (error) {
    next(error);
  }
});

module.exports = shoesRouter;