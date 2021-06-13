// 1.	Write a JavaScript function to check whether an `input` is an array or not.


is_array = (input) => Array.isArray(input);


console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));




// 2.	Write a JavaScript function to clone an array.


array_Clone = (input) => [...input];



console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));



// 3.	Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.


first = (a, b=1) => b>=1?b==1?a[0]:a.slice(0,b):[]


console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



// 4.	Write a simple JavaScript program to join all elements of the following array into a string.


join = (input,sep) => input.join(`${sep}`);


myColor = ["Red", "Green", "White", "Black"];


console.log(join(myColor, '+'));
console.log(join(myColor, ','));
console.log(join(myColor, ', '));


// 5. Write a JavaScript program to find the most frequent item of an array.

count = (input) => {
    ans = input[0];
    let map = {};
    for(i in input){
        if(!map[input[i]])
            map[input[i]] = 1;
        else{
            map[input[i]]++;
            if(map[input[i]]>map[ans]){
                ans = input[i];
            }
        }
    }

    return `${ans} ( ${map[ans]} times )`

} 

arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(count(arr));
