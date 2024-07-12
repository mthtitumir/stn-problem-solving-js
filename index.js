// 1.Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

// Create an array of person objects
const people = [
    { name: "John", age: 30, gender: "male" },
    { name: "Sarah", age: 25, gender: "female" },
    { name: "Mike", age: 35, gender: "male" },
    { name: "Emily", age: 28, gender: "female" },
    { name: "David", age: 40, gender: "male" }
  ];
  
  // Function to filter out females and map to names
  function filterAndMapMales(peopleArray) {
    return peopleArray
      .filter(person => person.gender === "male")
      .map(person => person.name);
  }
  
  // Call the function and print the result
  const maleNames = filterAndMapMales(people);
  console.log(maleNames);