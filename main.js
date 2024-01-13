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
const numberOfUser = personArray.length;


for(let i=0; i<numberOfUser; i++){
    if(genderArray[i] == "female"){
        console.log(`${personArray[i]} is ${genderArray[i]}`);
        //console.log(personArray[i]);
    }
    //let obj = {name:personArray[i], sex:genderArray[i]};
    //console.log(personArray[i]); ->useless line of code 
}

//object

const user1 = {
    firstName: "Good night",
    gender: "male"  
} 

console.log(user1["firstName"]);



//onject

const users =[1,2,3];
const users2 = ["ramesh","suresh"]

// function showUsers(users) {
//         // Should display a list of users when given a valid array of user objects
//         it('should display a list of users when given a valid array of user objects', () => {
//             const users = [
//                 { name: 'John', age: 25 },
//                 { name: 'Jane', age: 30 },
//                 { name: 'Bob', age: 35 }
//             ];
        
//             const consoleSpy = jest.spyOn(console, 'log');
        
//             showUsers(users);
        
//             expect(consoleSpy).toHaveBeenCalledWith(users);
        
//             consoleSpy.mockRestore();
//         });
// }


const allUsers = [{
    firstName: "hello",
    gender: "male"
},{
    firstName:"world",
    gender: "female"
},{
    firstName:"priya",
    gender: "female"
}];

for (let i= 0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "female"){
        console.log(allUsers[i]["firstName"])
    }
}


//functions

function sum(a,b){
    return a*b;
}

const value =  sum(3,4)
console.log(value);

