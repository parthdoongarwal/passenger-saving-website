let passengers = document.querySelector("#a");

let prevData = document.querySelector("#save-data");

let total = document.querySelector("#total");

let counter = 0;
let array = [];
const save = () => {
  prevData.innerHTML += `<div class = "save-items">${counter}</div>`;
  array.push(counter);
  counter = 0;
  passengers.innerHTML = `Passengers: ${counter}`;
};

const add = () => {
  counter += 1;

  passengers.innerHTML = `Passengers: ${counter}`;
};

const show = () => {
  if (array.length > 0) {
    const value = array.reduce((total, nv) => {
      return (total += nv);
    });

    total.innerHTML = `total passengers: ${value}`;
  } else {
    total.innerHTML = "please save some values";
  }
};
