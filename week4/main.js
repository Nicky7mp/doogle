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
    "Chow Chow",
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
    Aki_Poo: ["Akita", "Poodle"],
    Alaskan_Shepherd: ["German Shepherd", "Malamute"],
    American_Eagle_Dog: ["American Eskimo Dog", "Beagle"],
    Augie: ["Australian Shepherd", "Corgi"],
    Ausky: ["Australian Cattle Dog", "Husky"],
    Aussiedoodle: ["Australian Shepherd", "Poodle"],
    Aussimo: ["American Eskimo Dog", "Australian Cattle Dog"],
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
    Chihuahua_Husky: ["Chihuahua", "Husky"],
    Chion: ["Chihuahua", "Papillon"],
    Chiweenie: ["Chihuahua", "Dachshund"],
    Chorkie: ["Chihuahua", "Yorkie"],
    Chow_Hound: ["Basset Hound", "Chow Chow"],
    Chow_Pei: ["Chow Chow", "Shar-Pei"],
    Chow_Shepherd: ["Chow Chow", "German Shepherd"],
    Chug: ["Chihuahua", "Pug"],
    Chusky: ["Chow Chow", "Husky"],
    Cockalier: ["Cavalier King Charles Spaniel", "Cocker Spaniel"],
    Cockapoo: ["Cocker Spaniel", "Poodle"],
    Cocker_Corgi: ["Cocker Spaniel", "Corgi"],
    Cocker_Pei: ["Cocker Spaniel", "Shar-Pei"],
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
    Huskita: ["Akita", "Husky"],
    Jackabee: ["Beagle", "Jack Russell"],
    Jackapoo: ["Jack Russell", "Poodle"],
    Jug: ["Jack Russell", "Pug"],
    Labbe: ["Beagle", "Labrador"],
    Labpei: ["Labrador", "Shar-Pei"],
    Labradoodle: ["Labrador", "Poodle"],
    Labrakita: ["Akita", "Labrador"],
    Labrashepherd: ["German Shepherd", "Labrador"],
    Mal_Shi: ["Maltese", "Shih-Tzu"],
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
    Sheltidoodle: ["Poodle", "Shetland Sheepdog"],
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
    Texas_Heeler: ["Australian Cattle Dog", "Australian Shepherd"],
    Valley_Bulldog: ["Boxer", "Bulldog"],
    Yorki_Poo: ["Poodle", "Yorkie"],
    Zuchon: ["Bichon Frise", "Shih-Tzu"]
}

let crossbeedImages = {
    "./images/crossbreeds/akiPoo.jpg": "Aki_Poo",
    "./images/crossbreeds/alaskan_shepherd.jpg": "Alaskan_Shepherd",
    "./images/crossbreeds/americanEagleDog.jpg": "American_Eagle_Dog",
    "./images/crossbreeds/augie.jpg": "Augie",
    "./images/crossbreeds/ausky.jpg": "Ausky",
    "./images/crossbreeds/aussiedoodle.jpg": "Aussiedoodle",
    "./images/crossbreeds/aussimo.jpg": "Aussimo",
    "./images/crossbreeds/bagle.jpg": "Bagle",
    "./images/crossbreeds/baskimo.jpg": "Baskimo",
    "./images/crossbreeds/bassador.jpg": "Bassador",
    "./images/crossbreeds/baussie.jpg": "Baussie",
    "./images/crossbreeds/bichpoo.jpg": "Bichpoo",
    "./images/crossbreeds/beagi.jpg": "Beagi",
    "./images/crossbreeds/borgi.jpg": "Borgi",
    "./images/crossbreeds/boxador.jpg": "Boxador",
    "./images/crossbreeds/bulldorgi.jpg": "Bulldorgi",
    "./images/crossbreeds/cavaCorgi.jpg": "Cava_Corgi",
    "./images/crossbreeds/cavachon.jpg": "Cavachon",
    "./images/crossbreeds/cavapoo.jpg": "Cavapoo",
    "./images/crossbreeds/cheeks.jpg": "Cheeks",
    "./images/crossbreeds/chihuahuaHusky.jpg": "Chihuahua_Husky",
    "./images/crossbreeds/chorkie.jpg": "Chorkie",
    "./images/crossbreeds/chowHound.jpg": "Chow_Hound",
    "./images/crossbreeds/chowPei.jpg": "Chow_Pei",
    "./images/crossbreeds/chowShepherd.jpg": "Chow_Shepherd",
    "./images/crossbreeds/chusky.jpg": "Chusky",
    "./images/crossbreeds/cockapoo.jpg": "Cockapoo",
    "./images/crossbreeds/cockerPei.jpg": "Cocker_Pei",
    "./images/crossbreeds/cojack.jpg": "Cojack",
    "./images/crossbreeds/corgidor.jpg": "Corgidor",
    "./images/crossbreeds/corgiever.jpg": "Corgiever",
    "./images/crossbreeds/corgipom.jpg": "Corgipom",
    "./images/crossbreeds/corgipoo.jpg": "Corgipoo",
    "./images/crossbreeds/corgitian.jpg": "Corgitian",
    "./images/crossbreeds/corkie.jpg": "Corkie",
    "./images/crossbreeds/dalmador.jpg": "Dalmador",
    "./images/crossbreeds/doxiepoo.jpg": "Doxiepoo",
    "./images/crossbreeds/eskijack.jpg": "Eskijack",
    "./images/crossbreeds/goldendoodle.jpg": "Goldendoodle",
    "./images/crossbreeds/huskita.jpg": "Huskita",
    "./images/crossbreeds/jackapoo.jpg": "Jackapoo",
    "./images/crossbreeds/labradoodle.jpg": "Labradoodle",
    "./images/crossbreeds/labrakita.jpg": "Labrakita",
    "./images/crossbreeds/malShi.jpg": "Mal_Shi",
    "./images/crossbreeds/maltichon.jpg": "Maltichon",
    "./images/crossbreeds/maltipoo.jpg": "Maltipoo",
    "./images/crossbreeds/papipoo.jpg": "Papipoo",
    "./images/crossbreeds/pomapoo.jpg": "Pomapoo",
    "./images/crossbreeds/porgi.jpg": "Porgi",
    "./images/crossbreeds/schnoodle.jpg": "Schnoodle",
    "./images/crossbreeds/sharberianHusky.jpg": "Sharberian_Husky",
    "./images/crossbreeds/sheltidoodle.jpg": "Sheltidoodle",
    "./images/crossbreeds/shepkita.jpg": "Shepkita",
    "./images/crossbreeds/shollie.jpg": "Shollie",
    "./images/crossbreeds/shorkie.jpg": "Shorkie",
    "./images/crossbreeds/sprocker.jpg": "Sprocker",
    "./images/crossbreeds/texasHeeler.jpg": "Texas_Heeler",
    "./images/crossbreeds/valleyBulldog.jpg": "Valley_Bulldog",
    "./images/crossbreeds/yorkiPoo.jpg": "Yorki_Poo",
    "./images/crossbreeds/zuchon.jpg": "Zuchon"
}

////////////////////////////Objects and Arrays///////////////////////////////////

let dogImages;
let dropdown1 = document.getElementById("selectDog1");
const firstDogChoice = document.querySelector('.firstDogSelection');
const secondDogChoice = document.querySelector('.secondDogSelection');

//////////////////////////////////Variables//////////////////////////////////////

const populateList = (array, dropdown) => {
    for (let i = 0; i < array.length; i++) {
        let option = array[i];
        let anotherDog = document.createElement("option");
        anotherDog.text = option;
        anotherDog.value = option;
        dropdown.add(anotherDog);
    }
}

function displayImage(){
    dogImages = [
        null,
        "./images/dogs/akita.jpg",
        "./images/dogs/americanEskimoDog.jpg",
        "./images/dogs/australianCattleDog.jpg",
        "./images/dogs/australianShepherd.jpg",
        "./images/dogs/bassetHound.jpg",
        "./images/dogs/beagle.jpg",
        "./images/dogs/berneseMountainDog.jpg",
        "./images/dogs/bichonFrise.jpg",
        "./images/dogs/borderCollie.jpg",
        "./images/dogs/bostonTerrier.jpg",
        "./images/dogs/boxer.jpg",
        "./images/dogs/bulldog.jpg",
        "./images/dogs/cavKingCharlesSpaniel.jpg",
        "./images/dogs/chihuahua.jpg",
        "./images/dogs/chowChow.jpg",
        "./images/dogs/cockerSpaniel.jpg",
        "./images/dogs/corgi.jpg",
        "./images/dogs/dachshund.jpg",
        "./images/dogs/dalmation.jpg",
        "./images/dogs/germanShepherd.jpg",
        "./images/dogs/goldenRetriever.jpg",
        "./images/dogs/husky.jpg",
        "./images/dogs/jackRussell.jpg",
        "./images/dogs/labrador.jpg",
        "./images/dogs/malamute.jpg",
        "./images/dogs/maltese.jpg",
        "./images/dogs/papillon.jpg",
        "./images/dogs/pekingese.jpg",
        "./images/dogs/pomeranian.jpg",
        "./images/dogs/poodle.jpg",
        "./images/dogs/pug.jpg",
        "./images/dogs/rottweiler.jpg",
        "./images/dogs/schnauzer.jpg",
        "./images/dogs/sharPei.jpg",
        "./images/dogs/shetlandSheepdog.jpg",
        "./images/dogs/shihTzu.jpg",
        "./images/dogs/springerSpaniel.jpg",
        "./images/dogs/yorkie.jpg"
    ]
    let index = document.getElementById('selectDog1').selectedIndex;
    document.getElementById('img1').src = dogImages[index];

    dogImages.splice(index, 1)

    return dogImages
}

function displayImage2(){
    let index2 = document.getElementById('selectDog2').selectedIndex;
    document.getElementById('img2').src = dogImages[index2];
}

const filterDogList = (firstDog) => {
    let newArray = dogList1.filter(dog => dog != firstDog)
    return newArray
}

const generator = (dog1, dog2) => {
    for (let [key, value] of Object.entries(crossbeeds)) {
        if (value.includes(dog1) && value.includes(dog2)) {
            return (key)
        }
    }
    return ("I'm sorry, we don't have a result for that combination at the moment.")
}

const displayCrossbreed = (crossbreed) => {
    for (let [key, value] of Object.entries(crossbeedImages)) {
        if (value.includes(crossbreed)) {
            return (key)
        }
    }
    // return ("Oops! We dont have an image for this crossbreed yet.")
}
///////////////////////////////Functions//////////////////////////////////////////

class Crossbreed {
    constructor(dog1, dog2, result) {
        this.dog1 = dog1
        this.dog2 = dog2
        this.croosbreed = result
    }
}
/////////////////////////////////////Class/////////////////////////////////////

populateList(dogList1, dropdown1)

firstDogChoice.addEventListener('change', (event) => {
    let dogChoice1 = event.target.value

    const choiceOne = document.querySelector('.choiceOne')
    choiceOne.textContent = `You chose: ${dogChoice1}`

    displayImage()

    let dogList2 = filterDogList(dogChoice1)

    let dropdown2 = document.getElementById("selectDog2")

    populateList(dogList2, dropdown2)

    Crossbreed.dog1 = dogChoice1
    console.log(Crossbreed.dog1)

    return Crossbreed.dog1 = dogChoice1
})

secondDogChoice.addEventListener('change', (event) => {

    let dogChoice2 = event.target.value

    const choiceTwo = document.querySelector('.choiceTwo')
    choiceTwo.textContent = `Your second choice is: ${dogChoice2}`

    displayImage2()

    Crossbreed.dog2 = dogChoice2
    console.log(Crossbreed.dog2)

    Crossbreed.result = generator(Crossbreed.dog1, Crossbreed.dog2)
    console.log(generator(Crossbreed.dog1, Crossbreed.dog2))

    const result = document.querySelector('.result')
    // result.textContent = `${generator(Crossbreed.dog1, Crossbreed.dog2)}`
    result.textContent = `${Crossbreed.result}`

    let displayResult = displayCrossbreed(Crossbreed.result)
    document.getElementById('crossbreedImage').src = `${displayResult}`
})