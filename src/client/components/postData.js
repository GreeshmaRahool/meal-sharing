import React from "react";

export default async function postData(url = "", newMeal = {}) {
  console.log(newMeal);
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newMeal),
    });
    return response.json();
}
