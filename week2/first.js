const dog1array = [
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

let dog1 = dog1array[4]
// let dog1 = dog1array[0]
// console.log(`Please choose from: ${dog1array}`)
console.log(`You have chosen ${dog1}.`)

let dog2array = dog1array.filter(dog => dog != dog1)

let dog2 = dog2array[1]
// let dog2 = dog2array[0]
// let dog2 = dog2array[3]
// console.log(`Choose a second dog from: ${dog2array}`)
console.log(`Your second dog is a ${dog2}.`)

const crossbeed = [
    "Labradoodle",
    "Cockapoo",
    "Westiepoo",
    "Yorkiepoo",
    "Schnoodle",
    "Maltipoo",
    "Bichpoo",
    "Cavapoo",
    "Shih-poo",
    "Spanador",
    "Corkie",
    "Cockalier",
    "Morkie",
    "Shorkie",
    "Maltichon",
    "Mal-Shi",
    "Cavachon",
    "Zuchon",
]

// let result = null

// switch (true) {
//     case dog1 == "Labrador" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Labrador":
//         result = crossbeed[0]
//         break;
//     case dog1 == "Cocker-Spaniel" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Cocker-Spaniel":
//         result = crossbeed[1]
//         break;
//     case dog1 == "Westie" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Westie":
//         result = crossbeed[2]
//         break;
//     case dog1 == "Yorkie" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Yorkie":
//         result = crossbeed[3]
//         break;
//     case dog1 == "Schnauzer" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Schnauzer":
//         result = crossbeed[4]
//         break;
//     case dog1 == "Maltese" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Maltese":
//         result = crossbeed[5]
//         break;
//     case dog1 == "Bichon Frise" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Bichon Frise":
//         result = crossbeed[6]
//         break;
//     case dog1 == "Cavalier King Charles Spaniel" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Cavalier King Charles Spaniel":
//         result = crossbeed[7]
//         break;
//     case dog1 == "Shih-Tzu" && dog2 == "Poodle":
//     case dog1 == "Poodle" && dog2 == "Shih-Tzu":
//         result = crossbeed[8]
//         break;
//     case dog1 == "Labrador" && dog2 == "Cocker-Spaniel":
//     case dog1 == "Cocker-Spaniel" && dog2 == "Labrador":
//         result = crossbeed[9]
//         break;
//     case dog1 == "Cocker-Spaniel" && dog2 == "Yorkie":
//     case dog1 == "Yorkie" && dog2 == "Cocker-Spaniel":
//         result = crossbeed[10]
//         break;
//     case dog1 == "Cocker-Spaniel" && dog2 == "Cavalier King Charles Spaniel":
//     case dog1 == "Cavalier King Charles Spaniel" && dog2 == "Cocker-Spaniel":
//         result = crossbeed[11]
//         break;
//     case dog1 == "Yorkie" && dog2 == "Maltese":
//     case dog1 == "Maltese" && dog2 == "Yorkie":
//         result = crossbeed[12]
//         break;
//     case dog1 == "Yorkie" && dog2 == "Shih-Tzu":
//     case dog1 == "Shih-Tzu" && dog2 == "Yorkie":
//         result = crossbeed[13]
//         break;
//     case dog1 == "Maltese" && dog2 == "Bichon Frise":
//     case dog1 == "Bichon Frise" && dog2 == "Maltese":
//         result = crossbeed[14]
//         break;
//     case dog1 == "Maltese" && dog2 == "Shih-Tzu":
//     case dog1 == "Shih-Tzu" && dog2 == "Maltese":
//         result = crossbeed[15]
//         break;
//     case dog1 == "Bichon Frise" && dog2 == "Cavalier King Charles Spaniel":
//     case dog1 == "Cavalier King Charles Spaniel" && dog2 == "Bichon Frise":
//         result = crossbeed[16]
//         break;
//     case dog1 == "Bichon Frise" && dog2 == "Shih-Tzu":
//     case dog1 == "Shih-Tzu" && dog2 == "Bichon Frise":
//         result = crossbeed[17]
//         break;
//     default:
//         result = "NA"
// }

// if (result == "NA") {
//     console.log("I'm sorry, there is no official crossbreed for that combination.")
// } else {
//     console.log(`The crossbreed is a ${result}.`)
// }



///// FOR LOOP TO FILL DOG CHOICES /////

// for (let i=0; i<7; i++) {
//     console.log(`Dog ${dog1array[i]}.`)
// }

// ^ Counting Up

// for (let i=6; i>=0; i--) {
//     console.log(`Dog ${dog1array[i]}.`)
// }

// ^ Counting down

// for (let i=0; i<7; i++) {
//     console.log(`Dog ${[i + 1]}: ${dog1array[i]}.`)
// }

// ^ Counting up with added relevant text

// alert("Welcome to the Doogle Crossbreed Generator")

// const pickDog = () => {
//     userInput = prompt("Please choose ")
// }