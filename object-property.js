const students = [
    {id: 21, name: "Olivia"},
    {id: 37, name: "Simran"},
    {id: 43, name: "Mariaa"},
    {id: 66, name: "June"}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.find(s => s.id>40);;

console.log(bigger);