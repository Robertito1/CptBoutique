const salesRouter = require("express").Router();
const Sale = require("../models/sales");
const jwt = require("jsonwebtoken");
const parser = require("../utils/upload.config");

salesRouter.get("/", async (request, response) => {
  const sales = await Sale.find({})
  response.json(sales);
});

salesRouter.get("/:id", (request, response, next) => {
  Sale.findById(request.params.id)
    .then((sale) => {
      if (sale) {
        response.json(sale);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

salesRouter.post("/", parser.array("images", 3), async (request, response, next) => {
  const body = request.body;
  const imagesResponse = request.files
  const images = imagesResponse.map(e => e.path)
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

    if (!request.token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    let sale = new Sale({
      title: body.title,
      price: body.price,
      colors:body.colors,
      sizes:body.sizes,
      images:images,
      description: body.description
    });

    const savedSale = await sale.save();
    response.json(savedSale);
  } catch (error) {
    console.log("catch working");
    next(error);
  }
});

salesRouter.delete("/:id", async (request, response, next) => {
  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    const sale = await Sale.findById(request.params.id);
    if (decodedToken.id) {
      const deletedSale = await Sale.deleteOne({_id:sale._id});
      console.log(deletedSale);
      response.status(204).end();
    } else {
      return response.status(401).json({ error: "token missing or invalid" });
    }
  } catch (error) {
    next(error);
  }
});

salesRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const sale = {
    title: body.title,
    price: body.price,
    colors:body.colors,
    sizes:body.sizes,
    description: body.description
  };
  try {
    const updatedSale = await Sale.findByIdAndUpdate(request.params.id, sale, {
      new: true,
      runValidators: true,
    });

    response.json(updatedSale);
  } catch (error) {
    next(error);
  }
});

module.exports = salesRouter;
