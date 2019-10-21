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
]

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
}

let dropdown1 = document.getElementById("selectDog1");

const populateList = (array, dropdown) => {
    for(let i = 0; i < array.length; i++) {
        let option = array[i];
        let anotherDog = document.createElement("option");
        anotherDog.text = option;
        anotherDog.value = option;
        dropdown.add(anotherDog);
    }
}

populateList(dogList1, dropdown1)

const filterDogList = (firstDog) => {
    let newArray = dogList1.filter(dog => dog != firstDog)
    return newArray
}

class Crossbreed {
    constructor (dog1, dog2){
        this.dog1 = dog1
        this.dog2 = dog2
    }
}

const firstDogChoice = document.querySelector('.firstDogSelection')

firstDogChoice.addEventListener('change', (event) => {
    let dogChoice1 = event.target.value               

    const choiceOne = document.querySelector('.choiceOne')
    choiceOne.textContent = `You chose a ${dogChoice1}`    

    let dogList2 = filterDogList(dogChoice1)     

    let dropdown2 = document.getElementById("selectDog2") 

    populateList(dogList2, dropdown2)                        
    
    Crossbreed.dog1 = dogChoice1
    console.log(Crossbreed.dog1)

    return Crossbreed.dog1 = dogChoice1
})

const secondDogChoice = document.querySelector('.secondDogSelection')

secondDogChoice.addEventListener('change', (event) => {

    let dogChoice2 = event.target.value

    const choiceTwo = document.querySelector('.choiceTwo')
    choiceTwo.textContent = `You chose a ${dogChoice2}` 

    Crossbreed.dog2 = dogChoice2
    console.log(Crossbreed.dog2)


    console.log(generator(Crossbreed.dog1, Crossbreed.dog2))

    const result = document.querySelector('.result')
    result.textContent = `${generator(Crossbreed.dog1, Crossbreed.dog2)}`
})

const generator = (dog1, dog2) => {
    for (let [key, value] of Object.entries(crossbeeds)) {
        if (value.includes(dog1) && value.includes(dog2)) {
            return(key)
        }
    }
    return("I'm sorry, we don't have a result for that combination at the moment.")
}