// 4.Task: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Chevrolet", model: "Camaro", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2021 },
];

const sortCarsByYear = (cars) => cars.sort((a, b) => a.year - b.year);

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
