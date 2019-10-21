let dogList1 = [       /// -2 off line number
    "Akita",
    "American Eskimo Dog",
    "Australian Cattle Dog",          
    "Australian Shepherd", 
    "Basset Hound",            
    "Beagle", 
    "Bernese Mountain Dog",                        
    "Bichon Frise",                   
    "Border Collie",                  
    "Boston Terrier",
    "Boxer",
    "Bulldog",
    "Cavalier King Charles Spaniel",   
    "Chihuahua",                      
    "Cocker Spaniel",   
    "Corgi",              
    "Dachshund",
    "Dalmation",
    "German Shepherd",                     
    "Golden Retriever",           
    "Husky",
    "Jack Russell",                   
    "Labrador", 
    "Malamute",                      
    "Maltese",                        
    "Papillon",                      
    "Pekingese",
    "Pomeranian",                      
    "Poodle",                         
    "Pug", 
    "Rottweiler",                           
    "Schnauzer",                      
    "Shar-Pei", 
    "Shetland Sheepdog",     
    "Shih-Tzu",
    "Springer Spaniel",                                         
    "Yorkie"
    //"Airedale Terrier",
    //"American Bulldog",
    //"Brussels Griffon",
    //"Cairn Terrier",
    //"Chinese Crested",
    //"Chow Chow",
    //"Doberman",
    //"English Setter",
    //"English Pointer",
    //"Frenchie",
    //"German Shorthaired Pointer",
    //"Great Dane",
    //"Great Pyrenees",
    //"Greyhound",
    //"Havanese",
    //"Italian Greyhound",
    //"Japanese Chin",
    //"Mini Pinscher",
    //"Rat Terrier",
    //"Saint Bernard",
    //"Saluki",
    //"Schipperke",
    //"Shiba Inu",
    //"Smooth Fox Terrier",
    //"Staffie",
    //"Vizsla",
    //"Weimaramer",             
];

let crossbeeds = {
    Alaskan_Shepherd: ["German Shepherd", "Malamute"],
    Augie: ["Australian Shepherd", "Corgi"],
    Ausky: ["Australian Cattle Dog", "Husky"],
    Aussiedoodle: ["Australian Shepherd", "Poodle"],
    Bagle: ["Basset Hound", "Beagle"],
    Baskimo: ["American Eskimo Dog", "Basset Hound"],
    Bassador: ["Basset Hound", "Labrador"],
    Baussie: ["Australian Shepherd", "Boston Terrier"],
    Beabull: ["Beagle", "Bulldog"],
    Beagi: ["Beagle", "Corgi"],
    Beaglier: ["Beagle", "Cavalier King Charles Spaniel"],
    Bichpoo: ["Bichon Frise", "Poodle"],
    Bo_Chi: ["Boston Terrier", "Chihuahua"],
    Boglen_Terrier: ["Beagle", "Boston Terrier"],
    Borador: ["Border Collie", "Labrador"],
    Border_Aussie: ["Australian Shepherd", "Border Collie"],
    Border_Heeler: ["Australian Cattle Dog", "Border Collie"],
    Border_Jack: ["Border Collie", "Jack Russell"],
    Bordernese: ["Bernese Mountain Dog", "Border Collie"],
    Borgi: ["Border Collie", "Corgi"],
    BoShih: ["Boston Terrier", "Shih-Tzu"],
    Boxador: ["Boxer", "Labrador"],
    Boxksy: ["Boxer", "Husky"],
    Boxpei: ["Boxer", "Shar-Pei"],
    Boxweiler: ["Boxer", "Rottweiler"],
    Bugg: ["Boston Terrier", "Pug"],
    Bulldorgi: ["Bulldog", "Corgi"],
    Bullmatian: ["Bulldog", "Dalmation"],
    Bullpei: ["Bulldog", "Shar-Pei"],
    Cattlegi: ["Australian Cattle Dog", "Corgi"],
    Cava_Corgi: ["Cavalier King Charles Spaniel", "Corgi"],
    Cavachon: ["Bichon Frise", "Cavalier King Charles Spaniel"],
    Cavapoo: ["Cavalier King Charles Spaniel", "Poodle"],
    Cheeks: ["Chihuahua", "Pekingese"],
    Chigi: ["Chihuahua", "Corgi"],
    Chion: ["Chihuahua", "Papillon"],
    Chiweenie: ["Chihuahua", "Dachshund"],
    Chorkie: ["Chihuahua", "Yorkie"],
    Chug: ["Chihuahua", "Pug"],
    Cockalier: ["Cavalier King Charles Spaniel", "Cocker Spaniel"],
    Cockapoo: ["Cocker Spaniel", "Poodle"],
    Cocker_Corgi: ["Cocker Spaniel", "Corgi"],
    Cojack: ["Corgi", "Jack Russell"],
    Corger: ["Boxer", "Corgi"],
    Corgi_Basset: ["Basset Hound", "Corgi"],
    Corgidor: ["Corgi", "Labrador"],
    Corgipom: ["Corgi", "Pomeranian"],
    Corgipoo: ["Corgi", "Poodle"],
    Corgitian: ["Corgi", "Dalmation"],
    Corgoyed: ["Corgi", "Samoyed"],
    Corillon: ["Corgi", "Papillon"],
    Corkie: ["Cocker Spaniel", "Yorkie"],
    Corman_Shepherd: ["Corgi", "German Shepherd"],
    Dalmador: ["Dalmation", "Labrador"],
    Daug: ["Dachshund", "Pug"],
    Docker: ["Cocker Spaniel", "Dachshund"],
    Dorkie: ["Dachshund", "Yorkie"],
    Doxiepoo: ["Dachshund", "Poodle"],
    Doxle: ["Beagle", "Dachshund"],
    Eskijack: ["American Eskimo Dog", "Jack Russell"],
    Eskland: ["American Eskimo Dog", "Shetland Sheepdog"],
    Gerberian_Shepsky: ["German Shepherd", "Husky"],
    Goldador: ["Golden Retriever", "Labrador"],
    Corgiever: ["Corgi", "Golden Retriever"],
    Golden_Dox: ["Dachshund", "Golden Retriever"],
    Goldendoodle: ["Golden Retriever", "Poodle"],
    Gollie: ["Border Collie", "Golden Retriever"],
    Horgi: ["Corgi", "Husky"],
    Huskamute: ["Husky", "Malamute"],
    Jackabee: ["Beagle", "Jack Russell"],
    Jackapoo: ["Jack Russell", "Poodle"],
    Jug: ["Jack Russell", "Pug"],
    Labbe: ["Beagle", "Labrador"],
    Labpei: ["Labrador", "Shar-Pei"],
    Labradoodle: ["Labrador", "Poodle"],
    Labrashepherd: ["German Shepherd", "Labrador"],
    Mal_Shi: ["Maltese", "Shih-Tzu"],
    Mini_Hippo: ["Cocker Spaniel", "Shar-Pei"],
    Miniature_Boxer: ["Boston Terrier", "Boxer"],
    Miniature_Bulldog: ["Bulldog", "Pug"],
    Maltichon: ["Bichon Frise", "Maltese"],
    Maltipoo: ["Maltese", "Poodle"],
    Morkie: ["Maltese", "Yorkie"],
    Ori_Pei: ["Pug", "Shar-Pei"],
    Papastzu: ["Papillon", "Shih-Tzu"],
    Papipoo: ["Papillon", "Poodle"],
    Pekeapoo: ["Pekingese", "Poodle"],
    Pembroke_Sheltie: ["Corgi", "Shetland Sheepdog"],
    Pomapoo: ["Pomeranian", "Poodle"],
    Pomchi: ["Chihuahua", "Pomeranian"],
    Porgi: ["Corgi", "Pug"],
    Pug_Zu: ["Pug", "Shih-Tzu"],
    Pugalier: ["Cavalier King Charles Spaniel", "Pug"],
    Puggle: ["Beagle", "Pug"],
    Puginese: ["Pekingese", "Pug"],
    Rottgi: ["Corgi", "Rottweiler"],
    Schnoodle: ["Poodle", "Schnauzer"],
    Schnorgi: ["Corgi", "Schnauzer"],
    Schnug: ["Pug", "Schnauzer"],
    Sharberian_Husky: ["Husky", "Shar-Pei"],
    Sheepgi: ["Corgi", "Sheepdog"],
    Sheltie_Heeler: ["Australian Cattle Dog", "Shetland Sheepdog"],
    Sheltie_Shepherd: ["German Shepherd", "Shetland Sheepdog"],
    Sheltiedoodle: ["Poodle", "Shetland Sheepdog"],
    Shepkita: ["Akita", "German Shepherd"],
    Shi_Chi: ["Chihuahua", "Shih-Tzu"],
    Shih_Poo: ["Poodle", "Shih-Tzu"],
    Shiranian: ["Pomeranian", "Shih-Tzu"],
    Shollie: ["Border Collie", "German Shepherd"],
    Shorkie: ["Shih-Tzu", "Yorkie"],
    Siberian_Retriever: ["Husky", "Labrador"],
    Spanador: ["Cavalier King Charles Spaniel", "Labrador"],
    Spanador: ["Cocker Spaniel", "Labrador"],
    Springador: ["Labrador", "Springer Spaniel"],
    Sprocker: ["Cocker Spaniel", "Springer Spaniel"],
    Sprollie: ["Border Collie", "Springer Spaniel"],
    Texas_Healer: ["Australian Cattle Dog", "Australian Shepherd"],
    Valley_Bulldog: ["Boxer", "Bulldog"],
    Yorkiepoo: ["Poodle", "Yorkie"],
    Zuchon: ["Bichon Frise", "Shih-Tzu"]
    // Affenhuahua: ["Affenpinscher", "Chihuahua"],
    // Airedoodle: ["Airedale Terrier", "Poodle"],
    // Dobergi: ["Corgi", "Doberman"],
    // Greygi: ["Corgi", "Greyhound"],
    // Pyrenees_Airedale: ["Airedale Terrier", "Great Pyrenees"],
    // Shigi: ["Corgi", "Shiba Inu"],
    // Spitzgi: ["Corgi", "Spitz"],
    // Westiepoo: ["Poodle", "Westie"],
};

// Choose 0 - 36 for dog1    &    0 - 35 for dog2
//  (Highest number first)

// let dog1 = dog1Array[15]
// let dog2Array = dog1Array.filter(dog => dog != dog1)
// let dog2 = dog2Array[13]

// console.log(dog1)
// console.log(dog2)

// const generator = () => {
//     for (let [key, value] of Object.entries(crossbeeds)) {
//         if (value.includes(dog1) && value.includes(dog2)) {
//             return(key)
//         }
//     }
//     return("I'm sorry, we don't have a result for that combination at the moment.")
// }

// console.log(generator())

/////////////////////// DOM ///////////////////////////

let optionListOne = document.getElementById("selectDog1");

for(let i = 0; i < dogList1.length; i++) {
    let option = dogList1[i];
    let anotherDog = document.createElement("option");
    anotherDog.text = option;
    anotherDog.value = option;
    optionListOne.add(anotherDog);
}

const firstDogChoice = document.querySelector('.firstDogSelection')

firstDogChoice.addEventListener('change', (event) => {

    const choiceOne = document.querySelector('.choiceOne')
    choiceOne.textContent = `You chose a ${event.target.value}`
                    
    dog1 = event.target.value
    let filteredDogList = filterDogList(dog1)

    populateListTwo(filteredDogList)

    console.log(dog1)
    return dog1
})

function filterDogList(dog1){

    let dogList2 = dogList1.filter(dog => dog != dog1)
    return dogList2
}

function populateListTwo(newDogList) {

    let optionListTwo = document.getElementById("selectDog2");

    for(let i = 0; i < newDogList.length; i++) {
        let option = newDogList[i];
        let anotherDog = document.createElement("option");
        anotherDog.text = option;
        anotherDog.value = option;
        optionListTwo.add(anotherDog);
    }
}

const secondDogChoice = document.querySelector('.secondDogSelection')

secondDogChoice.addEventListener('change', (event) => {

    const choiceTwo = document.querySelector('.choiceTwo');
    choiceTwo.textContent = `Your second dog is a ${event.target.value}`;
                    
    dog2 = event.target.value               

    console.log(dog2)
    return dog2
})

////////////////////////  GENERATOR  //////////////////////////

const generator = () => {
    for (let [key, value] of Object.entries(crossbeeds)) {
        if (value.includes(dog1) && value.includes(dog2)) {
            return(key)
        }
    }
    return("I'm sorry, we don't have a result for that combination at the moment.")
}



const crossbreedResult = document.querySelector('.result')

crossbreedResult.addEventListener('change', (event) => {

    const result = document.querySelector('.result');
    result.textContent = `Results in a ${event.target.value}`;
                    
    // let dog2 = event.target.value               

    // console.log(dog2)
    // return dog2

    console.log(generator())
})

console.log(generator())