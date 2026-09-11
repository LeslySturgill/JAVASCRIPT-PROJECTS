function updateClientAddress() { //Creating a function and assigning two variables using document.getElementByld
    let newAddress = document.getElementById("clientAddressInput").value; //Creating my first variable to get the information entered by the user
    let addressDisplay = document.getElementById("currentAddressDisplay");//Creating my second variable and searching for an HTML element with this ID 
    addressDisplay.innerText = newAddress; //Finds the element where the current address is displayed, and replace its text with the new address. 
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate") .innerHTML = sentence;
}

function NewClient() {
    var name = "Leslie"; //Assigning an string to a variable as the first name of the client
    name += " Villanueva"; //using operator to concatenate a second string with the last name of the client
    document.getElementById("NameLastNameClient") .innerHTML = name; //Finds the HTML element with the ID "NameLastNameClient" and updates its content to display the client's name
}