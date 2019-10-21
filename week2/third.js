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

const crossbreeds = {
    "Labrador": ["Labradoodle",null,null,null,null,"Spanador",null,null,null],
    "Poodle": [],
    "Shih-Tzu": [],
    "Westie": [],
    "Yorkie": [],
    "Bichon Frise": [],
    "Cocker-Spaniel": [],
    "Schnauzer": [],
    "Maltese": [],
    "Cavalier King Charles Spaniel": [],
};

// const crossbreeds = [
//     Labrador = ["Labradoodle",null,null,null,null,"Spanador",null,null,null],
//     Poodle = [],
//     Shih = [],
//     Westie = [],
//     Yorkie = [],
//     Bichon = [],
//     Cocker = [],
//     Schnauzer = [],
//     Maltese = [],
//     Cavalier = [],
// ];

// console.log(crossbreeds.Labrador[0])
// console.log(dog1)
// console.log(crossbreeds)

// let result = crossbreeds.

let number = [
    1,
    2,
    3,
]

if (number[1] == "2"){
    console.log(true)
}
console.log(number.toString())