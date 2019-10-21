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

let crossbeeds = {
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

// Choose 0-9 for dog1 & dog2

let dog1 = dog1Array[1]
let dog2Array = dog1Array.filter(dog => dog != dog1)
let dog2 = dog2Array[7]

console.log(dog1)
console.log(dog2)

for (let [key, value] of Object.entries(crossbeeds)) {
    if (value.includes(dog1) && value.includes(dog2)) {
        console.log(key)
    } else {
        null
    }
}
//^^^^Put this in a function^^^

// console.log("I'm sorry, there is no official name for this combination.")