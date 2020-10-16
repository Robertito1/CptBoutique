const salesRouter = require("express").Router();
const Sale = require("../models/sales");
const jwt = require("jsonwebtoken");
const parser = require("../utils/upload.config");

salesRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });
  response.json(blogs);
});

salesRouter.get("/:id", (request, response, next) => {
  Blog.findById(request.params.id)
    .then((blog) => {
      if (blog) {
        response.json(blog);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

salesRouter.post("/", parser.array("images", 2), async (request, response, next) => {
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
      images: images,
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
    const blog = await Blog.findById(request.params.id);
    if (blog.user.toString() === decodedToken.id) {
      const deletedBlog = await Blog.deleteOne(blog);
      console.log(deletedBlog);
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

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  };
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
      new: true,
      runValidators: true,
    });

    response.json(updatedBlog);
  } catch (error) {
    next(error);
  }
});

module.exports = salesRouter;
