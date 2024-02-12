// TESTING FUNCTIONS
let listItems = ['JS Item 1 - Início', 'JS Item 2 - Meio', 'JS Item 3 - Fim'],listElement = document.querySelector('ul');

function createASimpleListOfItems(){
    let items = '';
    for(let item of listItems){
        items += `<li>${item}</li>`;
    }
    listElement.innerHTML = items;
}

createASimpleListOfItems()

alert("JS Code - It's Work!")
document.write("This is a JS Test Code.. This Text come from a JavaScript Simple Code!");

console.log('Passei Por Aqui!')