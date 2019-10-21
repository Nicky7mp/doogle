const dog1Array = [
    "Labrador",
    "Poodle",
    "Shih-Tzu",
    "Westie",
    "Yorkie",
    "Bichon Frise",
    "Cocker-Spaniel",
    "Schnauzer",
    "Maltese",
    "Cavalier King Charles Spaniel",
];

let dog1 = dog1Array[0]

let dog2Array = dog1Array.filter(dog => dog != dog1)

let dog2 = dog2Array[0]

const crossbeeds = {
    Labradoodle: ["Labrador", "Poodle"],
    Cockapoo: ["Coker-Spaniel", "Poodle"],
    Westiepoo: ["Westie", "Poodle"],
    Yorkiepoo: ["Yorkie", "Poodle"],
    Schnoodle: ["Schnauzer", "Poodle"],
    Maltipoo: ["Maltese", "Poodle"],
    Bichpoo: ["Bichon Frise", "Poodle"],
    Cavapoo: ["Cavalier King Charles Spaniel", "Poodle"],
    ShihPoo: ["Shih-Tzu", "Poodle"],
    Spanador: ["Cavalier King Charles Spaniel", "Labrador"],
    Corkie: ["Cocker-Spaniel", "Yorkie"],
    Cockalier: ["Cocker-Spaniel", "Cavalier King Charles Spaniel"],
    Morkie: ["Maltese", "Yorkie"],
    Shorkie: ["Shih-Tzu", "Yorkie"],
    Maltichon: ["Maltese", "Bichon Frise"],
    MalShi: ["Maltese", "Shi-Tzu"],
    Cavachon: ["Cavalier King Charles Spaniel", "Bichon Frise"],
    Zuchon: ["Shih-Tzu", "Bichon Frise"],
};

// let result = `${dog1Array.indexOf(dog1)}${dog2Array.indexOf(dog2)}`
// let result = (dog1Array.indexOf(dog1) + 10) + dog2Array.indexOf(dog2)

// console.log(dog1Array.indexOf(dog1))
// console.log(dog2Array.indexOf(dog2))

console.log(dog1)
console.log(dog2)

// for (let [value] of Object.entries(crossbeeds)) {
//     if (value == "Labrador" && "Poodle"){
//         console.log("Labradoodle")
//     } else {
//         console.log("N/A")
//     }
// }

for (let [key, value] of Object.entries(crossbeeds)) {
        console.log(value.includes("Labrador"))
    // console.log(value.toString())
    // if (`'${dog1}, ${dog2}` == value.toString()){
    //     console.log("Yes")
    // } else {
    //     console.log("Not quite")
    // }
    // if (value.toString() == dog1 && dog2) {
    //     console.log("Yes")
    // } else {
    //     console.log("Not quite")
    // }
}

// console.log(crossbeeds.keys())

// function dogCheck () {
//     console.log(crossbeeds.keys())
// }