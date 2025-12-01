let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let colorInput = document.getElementById("colorInput");
let submitBtn = document.getElementById("submitBtn");
let output = document.getElementById("output");

submitBtn.addEventListener("click", getInfo);


let pet = document.querySelectorAll('input[type="radio"]');
let hobby = document.querySelectorAll('input[type="checkbox"]');

let favPet;
let hobbies = [];

function getInfo(){
    // reset hobbies Array each time value
    hobbies = [];

    
    //check for pets
    for(let i = 0; i < pet.length; i++){
        if(pet[i].checked){
            favPet = pet[i].value;
        }
    }
    console.log(favPet);
    
    //cehck hobbies
    for(let i = 0; i < hobby.length; i++){
        if(hobby[i].checked){
            hobbies.push(" " + hobby[i].value);
        }
    }
    console.log(hobbies);

    output.textContent = `Name: ${nameInput.value}, Age: ${ageInput.value}, Favorite Color: ${colorInput.value}, Pet: ${petInput.value}, Hobby: ${hobbyInput.value}`;
    
} 