// 1.Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  { name: "John", age: 30, gender: "male" },
  { name: "Sarah", age: 25, gender: "female" },
  { name: "Mike", age: 35, gender: "male" },
  { name: "Emily", age: 28, gender: "female" },
  { name: "David", age: 40, gender: "male" },
];
const filterTheMales = (peoples) => peoples.filter(people => people.gender == "male");
const mapTheNames = (peoples) => peoples.map(people=> people.name);
const filterAndMap = (people) => {
    const males = filterTheMales(people);
    return mapTheNames(males);
}
console.log(filterAndMap(people));


