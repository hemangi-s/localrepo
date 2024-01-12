console.log("hello");

var a = 1;

console.log(a);

const b = 2;

console.log(b);


// data types

let fName = "hey";
let age = 25;
let isDay = true;


console.log("" +fName+ " there your age is " +age+ "");

if(isDay == true){
    console.log("day");
}
else{
    console.log("night");
}

let ans = 0;

for(let i=0; i<=300; i=i+1){
   ans = ans+i;
}

console.log(ans);


//array

// const ages = [11,12,13,14,15];

// for(let i =0; i< ages.length; i++){
//     if(ages[i]%2 != 0){
//         console.log(ages[i]);
//     }
// }

const ages = [11,12,13,14,15];
const numberOfPeople = ages.length;

for(let i =0; i< numberOfPeople; i++){
    if(ages[i]%2 != 0){
        console.log(ages[i]);
    }
}


//objects

const personArray = ["first person ", "second person", "third person"];
const genderArray = ["male", "female", "female"];

for(let i=0; i<genderArray.length; i++){
    if(genderArray[i] == "female"){
        console.log(`${personArray[i]} is ${genderArray[i]}`);
        //console.log(personArray[i]);
    }
    //let obj = {name:personArray[i], sex:genderArray[i]};
    //console.log(personArray[i]); ->useless line of code 
}