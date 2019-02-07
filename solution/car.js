const addCar = (car) => {
  const carCard = `<div class="car" id="car-id-${car.id}">
    <div class="car-image">
      <img src="http://loremflickr.com/300/300/${car.brand}%20${car.model}" />
    </div>
    <div class="car-info">
      <h4>${car.brand} - ${car.model}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
    <div class="car-actions pr-5">
      <div class="btn btn-danger px-3 py-1"
        id="delete-id-${car.id}"
        data-id="${car.id}">
        X
      </div>
    </div>
  </div>`;
  document.querySelector(".cars-list").insertAdjacentHTML("beforeend", carCard);
  activateDeleteButton(car.id);
};

const activateDeleteButton = (id) => {
  const button = document.querySelector(`#delete-id-${id}`);
  button.addEventListener("click", () => {
    deleteCar(button.dataset.id);
  });
};

const fetchAndDisplayCars = (slug) => {
  fetch(`https://wagon-garage-api.herokuapp.com/${slug}/cars`)
    .then(response => response.json())
    .then((data) => {
      data.forEach(addCar);
    });
};

const deleteCar = (id) => {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  console.log("url", url);
  fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then((data) => {
      document.querySelector(`#car-id-${id}`).remove();
    });
};

export { addCar, fetchAndDisplayCars };
