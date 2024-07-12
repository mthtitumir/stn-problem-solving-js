// 5.Task: Find And Modify

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

// Sample array of person objects
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 28 },
];
const updatePersonAge = (people, name, updatedAge) => {
  const updatedArray = people.map((person) =>
    person.name.toLowerCase() === name.toLowerCase()
      ? { ...person, age: updatedAge }
      : person
  );

  console.log(updatedArray);
  return updatedArray;
};

updatePersonAge(people, "Bob", 26);
