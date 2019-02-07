const baseUrl = "https://wagon-garage-api.herokuapp.com/";
const carList = document.getElementById("list");

const addCar = (car) => {
  carList.insertAdjacentHTML("afterbegin", templateCar(car));
};

const templateCar = car => `
  <div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
    </div>
    <div class="car-info">
      <h4>${car.model} - ${car.brand}</h4>
      <p><strong>Owner:</strong> ${car.owner}</p>
      <p><strong>Plate:</strong> ${car.plate}</p>
    </div>
  </div>
  `;

const fetchCars = (garage) => {
  fetch(`${baseUrl}${garage}/cars`)
    .then(response => response.json())
    .then((cars) => {
      cars.forEach(addCar);
    });
};

export { fetchCars, addCar };
