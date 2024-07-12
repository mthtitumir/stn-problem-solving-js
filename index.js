// 1.Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

// Create an array of person objects
const people = [
  { name: "John", age: 30, gender: "male" },
  { name: "Sarah", age: 25, gender: "female" },
  { name: "Mike", age: 35, gender: "male" },
  { name: "Emily", age: 28, gender: "female" },
  { name: "David", age: 40, gender: "male" },
];

// Function to filter out females and map to names
function filterAndMapMales(peopleArray) {
  return peopleArray
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

// Call the function and print the result
const maleNames = filterAndMapMales(people);
console.log(maleNames);

// --------------------------------------------------------------------------------
// 2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
// Create an array of book objects
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

// Function to extract book titles
function getBookTitles(booksArray) {
  return booksArray.map((book) => book.title);
}

// Call the function and print the result
const bookTitles = getBookTitles(books);
console.log(bookTitles);

// --------------------------------------------------------------------------------
// 3.Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
// Function to square a number
const square = (x) => x * x;

// Function to double a number
const double = (x) => x * 2;

// Function to add 5 to a number
const addFive = (x) => x + 5;

// Compose the functions
const composedFunction = (x) => addFive(double(square(x)));

// Test the composed function
console.log(composedFunction(3)); // Output: 23

// --------------------------------------------------------------------------------
// 4.Task: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
// Create an array of car objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Chevrolet", model: "Camaro", year: 2019 },
  { make: "Tesla", model: "Model 3", year: 2021 },
];

// Function to sort cars by year in ascending order
function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

// Sort the cars and print the result
const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// --------------------------------------------------------------------------------
// 5.Task: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
// Sample array of person objects
const peoples = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
];

function updatePersonAge(peopleArray, nameToFind, newAge) {
  const updatedArray = peopleArray.map((person) => {
    if (person.name.toLowerCase() === nameToFind.toLowerCase()) {
      return { ...person, age: newAge };
    }
    return person;
  });

  console.log(updatedArray);
  return updatedArray;
}

// Example usage
updatePersonAge(peoples, "Bob", 26);
