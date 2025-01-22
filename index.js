//! Part-1

let csv =
  "ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill, Doctor's Assistant, 26";

let lines = csv.split("\n").map((line) => line.split(",").join(" | "));

console.log("Part - 1 :", lines);

//! Part-2
lines = csv.split("\n").map((line) => line.split(","));
let rowNum = lines.length;
let colNum = lines[0].length;
console.log("Part - 2 :", "Columns :", colNum, "Rows :", rowNum);
console.log("Tablular Data :", lines);

//! Part-3
// separates the header and data rows
const [header, ...rows] = lines;
console.log("header array:", header);
console.log("data array:", rows);

// as the number of colums are equal for all the rows,
// we now can use the index for both arrays...
const objs = rows.map((row) =>
  row.reduce((acc, el, index) => {
    acc[header[index].trim()] = el.trim();
    return acc;
  }, {})
);
console.log(objs);

//! Part-4
//* 1. Remove the last element(object) in the array;
objs.pop();
console.log(objs);

//* 2. Insert an object in index 1;
objs.splice(1, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" });
console.log(objs);

//* 3. Add an object to the end of the array ;
objs.push({ ID: "7", Name: "Bilbo", Occupation: "N/A", Age: "111" });
console.log(objs);

//* 4. Calculate the average age of the group
let ageSum = objs.reduce((acc, data) => acc + Number(data.Age), 0);
let aveAge = ageSum / objs.length;
// console.log(ageSum);
console.log("The average age of the group is:", aveAge);

//! Part-5
