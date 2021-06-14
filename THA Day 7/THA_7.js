// 1. Write a JavaScript program to list the properties of a JavaScript object.

l_prop = (input) => {
  arr = [];
  for (i in input) arr.push(i);
  return arr.join(", ");
};

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(l_prop(student));




// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.




var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(student);
delete student.rollno;
console.log(student);




// 3. Write a JavaScript program to get the length of a JavaScript object.



var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(Object.keys(student).length);





// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

read_status = (input) => {
    for(i in input){
        console.log("Book name: " + input[i].title);
        console.log("Author name: " + input[i].author);
        console.log("Reading status: " + (input[i].readingStatus?"Read":"Not Read"));
        console.log("");
    }
}

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

read_status(library);





// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

class cylinder{
  
  volume = (r,h) =>{
    return r*r*h*Math.PI.toFixed(4);
  }

}

let cyl = new cylinder; 

console.log(cyl.volume(3,4));






// 6. Write a JavaScript program to sort an array of JavaScript objects.


sort_custom = (arr) => arr.sort((a, b) => {
  if(b.libraryID < a.libraryID) return -1;
  if(b.libraryID > a.libraryID) return 1;
  return 0;
} );

var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];



console.log(sort_custom(library));