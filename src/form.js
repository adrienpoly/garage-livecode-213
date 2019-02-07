import { addCar } from "./car";

const initForm = (garage) => {
  const form = document.getElementById("new-car");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const car = {
      brand: document.getElementById("brand").value,
      model: document.getElementById("model").value,
      plate: document.getElementById("plate").value,
      owner: document.getElementById("owner").value
    };

    fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
      method: "POST",
      body: JSON.stringify(car),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then((data) => {
        addCar(car);
      });
  });
};

export { initForm };
