let dogList1 = [
    "Pom", "westee", "Poddle", "Yorkshire Tea", "floof"
]
///////////////   ^^^^ Dog Array ///////////////


let optionListOne = document.getElementById("selectDog1");

//////////  ^^^^ Targets <select> and stores as variable  ////////////


for(let i = 0; i < dogList1.length; i++) {
    let option = dogList1[i];
    let anotherDog = document.createElement("option");
    anotherDog.text = option;
    anotherDog.value = option;
    optionListOne.add(anotherDog);
}
//////   ^^^^  Populates list 1 from Dog array  ////////////


const firstDogChoice = document.querySelector('.firstDogSelection');

///////   ^^^^^  Stores when first dog choice is changed as a variable ////////

firstDogChoice.addEventListener('change', (event) => {

    const choiceOne = document.querySelector('.choiceOne');           //Targets a div and stores as a variable
    choiceOne.textContent = `You chose a ${event.target.value}`;    //Prints sentence with selection in above div on browser page
                    
    let dog1 = event.target.value             // Creates a variable storing dog choice 1
    let filteredDogList = filterDogList(dog1)    // Creates a variable with the newly filtered dog list

    populateListTwo(filteredDogList)                  //Runs a function to populate the second list

    console.log(dog1)
    return dog1
});
///////   ^^^^ Listens for when first dog choice is changed and then runs a function that: ^^^^^  ////

function filterDogList(dog1){

    let dogList2 = dogList1.filter(dog => dog != dog1) // Filters out 1st dog choice and stores list as a new variable...
    return dogList2      // ...and returns it for use elsewhere.
}
//////// ^^^ Creates a new dog array with dog1 filtered out and stores as variable ///////////////

function populateListTwo(newDogList) {

    let optionsTwo = document.getElementById("selectDog2");

    for(let i = 0; i < newDogList.length; i++) {
        let option = newDogList[i];
        let el = document.createElement("option");
        el.text = option;
        el.value = option;
        optionsTwo.add(el);
    }
}
///// ^^^^ Function to populate second list in same way as before /////

const secondDogChoice = document.querySelector('.secondDogSelection');

///////   ^^^^  Stores when second dog choice is changed as a variable ////////

secondDogChoice.addEventListener('change', (event) => {

    const choiceTwo = document.querySelector('.choiceTwo');
    choiceTwo.textContent = `Your second dog is a ${event.target.value}`;
                    
    let dog2 = event.target.value               

    console.log(dog2)
    return dog2
});

/////  ^^^^ Repeat of previous event listener but for dog choice 2  ///////