const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    // const titles = await knex("meals").select("title");

    //maxPrice
    if (request.query.maxPrice) {
      const queryMaxPrice = parseInt(request.query.maxPrice);
      const mealsWithPrice = await knex("meal").where(
        "price",
        "<",
        queryMaxPrice
      );
      response.json(mealsWithPrice);

      if (isNaN(queryMaxPrice)) {
        return response.status(400).send("Enter a valid id");
      }
    }

    //availableReservations
    else if (request.query.availableReservations === "true") {
      let coalesceres = knex.raw(
        "coalesce(sum(reservation.number_of_guests), 0) as total_reservation"
      );
      const availableReservations = await knex("meal")
      //  let coalesceres =
        .select("meal.id", "max_reservations", coalesceres)
        .leftJoin("reservation", "reservation.meal_id", "meal.id")
        .groupBy("meal.id")
        .having("max_reservations", ">", "total_reservation");
      response.json(availableReservations);
    }

    //title
    else if (request.query.title) {
      const queryTitle = request.query.title;

      const mealWithtitleSearch = await knex("meal").where(
        "title",
        "like",
        `%${queryTitle}%`
      );

      response.json(mealWithtitleSearch);
    }

    //createdAfter
    else if (request.query.createdAfter) {
      const querycreatedAfter = new Date(request.query.createdAfter);

      if (isNaN(querycreatedAfter)) {
        return response.status(400).send("Enter a valid date");
      }

      const mealsWithDate = await knex("meal").where(
        "created_date",
        ">",
        querycreatedAfter
      );

      response.json(mealsWithDate);
    }

    //limit
    else if (request.query.limit) {
      const queryLimit = parseInt(request.query.limit);

      if (isNaN(queryLimit)) {
        return response.status(400).send("Enter a valid number");
      }

      const mealsWithLimit = await knex("meal").limit(queryLimit);
      response.json(mealsWithLimit);
    }

    //limit+maxPrice
    else if (request.query.maxPrice && request.query.limit) {
      const queryMaxPrice = parseInt(request.query.maxPrice);
      const queryLimit = parseInt(request.query.limit);
      const mealsWithPrice = await knex("meal")
        .limit(queryLimit)
        .where("price", "<", queryMaxPrice);
      response.json(mealsWithPrice);

      if (isNaN(queryMaxPrice) && isNaN(queryMaxLimit)) {
        return response.status(400).send("Enter valid data");
      }
    }
  } catch (error) {
    response.send(404).send("No data found");
  }
});

router.post("/", async (request, response) => {
  try {
    await knex("meal")
      .insert(request.body)
      .then((id) => response.json("meal inserted successfully"));
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
    const meal = await knex("meal").where({ id: param });
    response.json(meal);
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
    await knex("meal").where({ id: param }).update(request.body);
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
    await knex("meal").where({ id: param }).del();
    response.send(`Successfully deleted meal with id ${param}!`);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
