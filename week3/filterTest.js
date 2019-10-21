let dogList1 = [
    "Pom", "westee", "Poddle"
]

///////////////   ^^^^ Dog Array ///////////////


let optionsOne = document.getElementById("selectDog1");

//////////  ^^^^ Stores 1st Dog choice in variable   ////////////

for(let i = 0; i < dogList1.length; i++) {
    let option = dogList1[i];
    let el = document.createElement("option");
    el.text = option;
    el.value = option;
    optionsOne.add(el);
}

//////   ^^^^  Populates list 1 from Dog array  ////////////


const selectElement = document.querySelector('.firstDogSelection');

///////   ^^^^^  Stores when first dog choice is changes as a variable ////////

selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');           //Targets a div and stores as a variable
    result.textContent = `You chose ${event.target.value}`;    //Prints sentence with selection in above div on browser page

    console.log(event.target.value)                      
    let dog1 = event.target.value
    let newDogList = filterDogList(dog1)

    populateListTwo(newDogList)                                  //Runs a function to populate the second list

    
    console.log(dog1)
    return dog1
});

///////   ^^^^ Listens for when first dog choice is changed and then runs a function that: ^^^^^  ////

function filterDogList(dog1){
    let dogList2 = dogList1.filter(dog => dog != dog1)
    console.log(dogList2)
    return dogList2
}

//////// ^^^ Creates a new dog array with dog1 filtered out and stores as variable ///////////////

function populateListTwo(newDogList) {
console.log(newDogList)
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