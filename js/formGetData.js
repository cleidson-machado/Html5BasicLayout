console.log("This is the Root for Data: ", window.location);

// GET DATA FROM URL
const myKeyValues = window.location.search;

// SPLIT DATA PARTS- STEP 1
const urlParams = new URLSearchParams(myKeyValues);

// SPLIT DATA PARTS- STEP 2
const param1 = urlParams.get('firstname');
const param2 = urlParams.get('lastname');
const param3 = urlParams.get('country');
const param4 = urlParams.get('subject');

// REPLACE DATA ON THE TARGET FORM PAGE
var nameData = document.getElementById("fname");
nameData.value = param1

var lastNameData = document.getElementById("lname");
lastNameData.value = param2

var countryData = document.getElementById("country");
countryData.value = param3

var subjectData = document.getElementById("subject");
subjectData.value = param4

// JUST SOME TESTS.....
// console.log("NAME: ", param1)
// console.log("LASTNAME: ", param2)
// console.log("COUNTRY: ", param3)
// console.log("SUBJECT MSN: ", param4)

// JUST SOME TESTS.....
console.log('NAME: ', nameData.value)
console.log('LASTNAME: ', lastNameData.value)
console.log('COUNTRY: ', countryData.value)
console.log('SUBJECT MSN: ', subjectData.value)
