let dogList1 = [
    "Akita",
    "American Eskimo Dog",
    "Australian Cattle Dog",          
    "Australian Shepherd", 
    "Basset Hound",
]

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
///////////////////Populating list 1//////////////////////////////
let dogImages

function displayImage(){
    dogImages = [
        null,
        "./images/dogs/akita.jpg",
        "./images/dogs/americanEskimoDog.jpg",
        "./images/dogs/australianCattleDog.jpg",
        "./images/dogs/australianShepherd.jpg",
        "./images/dogs/bassetHound.jpg"
    ]
    let index = document.getElementById('selectDog1').selectedIndex;
    document.getElementById('img1').src = dogImages[index];

    dogImages.splice(index, 1)
    // console.log(dogImages)
    return dogImages
}

function displayImage2(){

    let index2 = document.getElementById('selectDog2').selectedIndex;
    document.getElementById('img2').src = dogImages[index2];

    console.log(dogImages)
}

//////////////////Function to display dog image//////////////////////

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

// function resetDropdown2() {

// }
////////////////////////////

const firstDogChoice = document.querySelector('.firstDogSelection')

firstDogChoice.addEventListener('change', (event) => {
    let dogChoice1 = event.target.value               

    const choiceOne = document.querySelector('.choiceOne')
    choiceOne.textContent = `You chose: ${dogChoice1}`    

    let dogList2 = filterDogList(dogChoice1)     

    let dropdown2 = document.getElementById("selectDog2") 

    populateList(dogList2, dropdown2)                        
    
    Crossbreed.dog1 = dogChoice1
    console.log(Crossbreed.dog1)

    displayImage()

    return Crossbreed.dog1 = dogChoice1
})

const secondDogChoice = document.querySelector('.secondDogSelection')

secondDogChoice.addEventListener('change', (event) => {

    let dogChoice2 = event.target.value

    const choiceTwo = document.querySelector('.choiceTwo')
    choiceTwo.textContent = `Your 2nd choice is: ${dogChoice2}` 

    Crossbreed.dog2 = dogChoice2
    console.log(Crossbreed.dog2)

    displayImage2()

    // console.log(generator(Crossbreed.dog1, Crossbreed.dog2))

    // const result = document.querySelector('.result')
    // result.textContent = `${generator(Crossbreed.dog1, Crossbreed.dog2)}`
})

/////////////////////////Event Listeners///////////////////////////////

// let crossbeedImages = [
//     null,
//     "./images/crossbreeds/alaskan_shepherd.jpg",
//     "./images/crossbreeds/augie.jpg",
//     "./images/crossbreeds/porgi.jpg"
// ]

//////////////////////////////////////////