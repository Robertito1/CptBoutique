const accessoriesRouter = require("express").Router();
const Accessory = require("../models/accessory");
const jwt = require("jsonwebtoken");
const parser = require("../utils/upload.config");

accessoriesRouter.get("/", async (request, response) => {
  const accessories = await Accessory.find({})
  response.json(accessories);
});

accessoriesRouter.get("/:id", (request, response, next) => {
  Accessory.findById(request.params.id)
    .then((accessory) => {
      if (accessory) {
        response.json(accessory);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

accessoriesRouter.post("/", parser.array("images", 2), async (request, response, next) => {
  const body = request.body;
  const imagesResponse = request.files
  const images = imagesResponse.map(e => e.path)
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    let accessory = new Accessory({
      title: body.title,
      price: body.price,
      images: images,
    });

    const savedAccessory = await accessory.save();
    response.json(savedAccessory);
  } catch (error) {
    console.log("catch working");
    next(error);
  }
});

accessoriesRouter.delete("/:id", async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    const accessory = await Accessory.findById(request.params.id);
    if (decodedToken.id) {
      const deletedAccessory = await Accessory.deleteOne(accessory);
      console.log(deletedAccessory);
      response.status(204).end();
    } else {
      return response.status(401).json({ error: "token missing or invalid" });
    }
  } catch (error) {
    next(error);
  }
});

accessoriesRouter.put("/:id", async (request, response, next) => {
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

module.exports = accessoriesRouter;