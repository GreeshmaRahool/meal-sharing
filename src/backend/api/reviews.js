const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {

    try {    
    const reviews = await knex("review");
    response.json(reviews);       
  } catch (error) {
    throw error;
    }
    
});

router.post("/", async (request, response) => {
  try {
    await knex("review")
      .insert(request.body)
      .then((id) => response.json("Review inserted successfully"));
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    if (isNaN(parseInt(request.params.id))) {
      return response.status(400).send("Enter a valid id");
    }

    const param = parseInt(request.params.id);
    const review = await knex("review").where({ id: param });
    response.json(review);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (isNaN(parseInt(request.params.id))) {
      return response.status(400).send("Enter a valid id");
    }

    const param = Number(parseInt(request.params.id));
    await knex("review").where({ id: param }).update(request.body);
    response.send("Data updated successfully!");
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    if (isNaN(parseInt(request.params.id))) {
      return response.status(400).send("Enter a valid id");
    }

    const param = Number(parseInt(request.params.id));
    await knex("review").where({ id: param }).del();
    response.send(`Successfully deleted the meal with id ${param}!`);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
