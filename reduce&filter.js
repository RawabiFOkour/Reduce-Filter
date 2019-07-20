console.log('Here is : ', 'Reduce & Filter');

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/


function avgAge(persons) {
  var result = persons.reduce(function (total, elem) {
    return total + elem.age;
  }, 0);
  return result / persons.length;
}
console.log(avgAge(persons));
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(persons) {
  var t;
  var maxLength = -Infinity;

  var result = persons.reduce(function (max, elem) {
    t = elem.name.first.length + elem.name.last.length;
    if (t > maxLength) {
      maxLength = t;
      max = elem.name.first + " " + elem.name.last;
    }
    return max;
  }, '');

  return result;
}
console.log(longestName(persons));
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
var arr = [1, 2, 4, 9];
function longestmaxNumberName(arr) {
  var t;
  var result = arr.reduce(function (maxNumber, elem) {
    t = elem;
    if (t > maxNumber) {
      maxNumber = t;
    }
    return maxNumber;
  }, -Infinity);

  return result;
}
console.log(longestmaxNumberName(arr));
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
var string = "hello world";
function repeatChar(string, char) {

  var arr = [];
  arr = string.split("");
  var result = arr.reduce(function (NumbersOfChar, elem) {
    if (elem === char) {
      NumbersOfChar++;
    }
    return NumbersOfChar;
  }, 0)
  return result;
}
console.log(repeatChar(string, 'l'));

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(number1, number2) {
  var arrayNum = [];
  while (number1 <= number2) {
    arrayNum.push(arr.reduce((acc) => {
      return acc;
    }, number1))
    number1++;
  }
  return arrayNum;
}
console.log(usAndNumberBeetweenUs(2, 5));
//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
var arrayEven = [1, 8, 6, 4];
function evenOnly(arrayEven) {
  var result = arrayEven.filter(elem => elem % 2 == 0)
  return result;
}
console.log(evenOnly(arrayEven));
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
var array4 = [1, 8, 6, 4];
function multiFour(array4) {
  var result = array4.filter(elem => elem % 4 == 0)
  return result;
}
console.log(multiFour(array4));

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
var arrayString = ["hello", "world"];
function containChar(arrayString, char) {
  var result = arrayString.filter(elem => elem.indexOf(char) !== -1
  )
  return result;
}
console.log(containChar(arrayString, 'w'));
console.log(containChar(arrayString, 'l'));
/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
var str = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(str) {
  var result = str.filter((elem, index) => (elem.length % 2 !== 0 && index % 2 === 0)
  )
  return result;
}
console.log(evenIndexOddLength(str));
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function olderThan(persons, age) {
  var result = persons.filter(elem => {
    if (elem.age >= age) {
      return persons;
    }
  })
  return result;
}
console.log(olderThan(persons, 67));
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function shorterThan(strings, number) {
  var result = strings.filter(elem => elem.length < number)
  return result;
}
console.log(shorterThan(strings, 5));
// if you finish the exercises review the material of the week and help your classmate


/*
Advanced Part {for your benefits}
Dont solve any question here if you didnt finish all the question a bove with your pair
This part you can try it
You should solve this part solo not with your pair
This part is extra (and there is no help from the trainer) it is good to try it
*/

//Using filter 12 -15

/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function longerThan(strings, number) {
  var result = strings.filter(elem => elem.length > number)
  return result;
}
console.log(longerThan(strings, 4));
/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)
var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/
var strings = ['return', 'phrases', 'with one word'];
function onlyOneWord(strings) {
  var result = strings.filter(elem => elem.indexOf(" ") === -1) //-1 not exisit 
  return result;
}
console.log(onlyOneWord(strings));

/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/

var numbers = [[1, 10, -100], [2, -20, 200], [3, 30, 300]];
function positiveRowsOnly(numbers) {

  var result = numbers.filter(elem => {
    //using for original 

    //  var counter=0;
    //  for (var index = 0; index < elem.length; index++) {
    //    if (elem[index]>0) {
    //      counter++;
    //    }
    //  }
    //  return counter===elem.length;

    //using .forEach()
    var counter = 0;
    elem.forEach(ind => {
      if (ind > 0) {
        counter++;
      }
    })
    return counter === elem.length;
  })
  return result;
}
console.log(positiveRowsOnly(numbers));
/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/
var strings = ['racecar', 'amalgam', 'oligopoly', 'zoom'];
function allSameVowels(strings) {
  var vowels = ['a', 'o', 'e', 'i', 'u'];

  var result = strings.filter(elem =>

    !(elem.includes("a") && elem.includes("e")
      || elem.includes("a") && elem.includes("i")
      || elem.includes("a") && elem.includes("o")
      || elem.includes("a") && elem.includes("u")
      || elem.includes("e") && elem.includes("i")
      || elem.includes("e") && elem.includes("o")
      || elem.includes("e") && elem.includes("u")
      || elem.includes("i") && elem.includes("o")
      || elem.includes("i") && elem.includes("u")
      || elem.includes("o") && elem.includes("u")
    )


  )
  return result;
}
console.log(allSameVowels(strings));
//Using Reduce 16 -

/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/
var arrayArray = [['Thundercats', '80s'], ['The Powerpuff Girls', '90s'], ['Sealab 2021', '00s']];
function objectify(arrayArray) {

  var result = arrayArray.reduce((obj, elem) => {

    obj[elem[0]] = elem[1];
    return obj;
  }, {})
  return result;
}
console.log(objectify(arrayArray));
/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object
var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/
var arrayNumber = [30, 48, 11, 5, 32];
function luckyNumbers(arrayNumber) {
  var result = arrayNumber.reduce((string, number, index, array) => {
    if (index === array.length - 1) {
      string = string + "and " + number;
    }
    else {
      string = string + number + ", ";
    }

    return string;

  }, "Your lucky numbers are:")
  return result;
}
console.log(luckyNumbers(arrayNumber));
// if you finish the exercises review the material of the week and help your classmate