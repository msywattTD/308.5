// Part 1
// Sum Array
//--------------------------
// let myArr = [0, 1, 2, 3, 10]

// function sumArray(arr) {
//     let sum = 0
//     for (element of arr) {
//         sum+= element;
//     }
//     return sum
// }

// console.log(sumArray(myArr))

//--------------------------
//Average Array
// let myArr = [0,1,2,3,9]

// function avgArray(arr) {
//     let sum = 0
//     for (element of arr) {
//         sum+= element;
//     }
//     return (sum/arr.length)
// }

// console.log(avgArray(myArr))

//--------------------------
//Longest String Array

// let myArr = ["qwe", "qwer", "qwerty", "uiqaghwdoahwolik"]

// function longestStrFunc(arr) {
//     let longestStr = "";
//     for (element of arr) {
//         if (element.length > longestStr.length) {
//             longestStr = element;
//         }
//     }
//     return longestStr
// }
// console.log(longestStrFunc(myArr))

//--------------------------
//Strings over X Length Array

// let myArr = ["qwe", "qwer", "qwerty", "uiqaghwdoahwolik"]

// function longEnough(arr, minLength) {
//     let longEnoughStr = 0;
//     for (element of arr) {
//         if (element.length > minLength) {
//             longEnoughStr += 1;
//         }
//     }
//     return longEnoughStr
// }
// console.log(longEnough(myArr, 4))

//--------------------------
//Print 1 through N Array

// function countUp(num) {
//     for (let i=1; i<=num;i++) {
//         console.log(i)
//     }
// }

// countUp(35)

//-------------------------- PART 2 START

let infoArr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
infoArr.sort(function(a,b){return a.age-b.age})

//sorted

function over50(peopleArray) {
    for (person in peopleArray) {
        if (peopleArray[person].age >50) {
            peopleArray.splice(person, (peopleArray.length-person))
        }
    }
}

over50(infoArr)
//console.log(infoArr)

//truncated past 50 y/o


const infoArrMap = infoArr.map(x => ({
    id: x.id,
    name: x.name,
    job: x.occupation,
    age: Number(x.age)+1
}));
//infoArr[3].value = "Job";
console.log(infoArrMap)

//occupation to job +1 to age

let ageSum = infoArrMap.reduce((runningSum, person) => 
    runningSum + parseInt(person.age)
, 0 )

let averageAge = ageSum/infoArrMap.length

console.log(ageSum)
console.log(averageAge)