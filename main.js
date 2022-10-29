// queryselectors and variables HERE
var form = document.querySelector('form');
var mealTypes = document.getElementsByName('foodOption')
var letsCookButton = document.querySelector('.letsCook');
var clearButton = document.querySelector('.clear');
var cookpotImg = document.querySelector('.cookpot-img');

// var for the image container to change the innertext
var box2 = document.querySelector('.box2');

var sides = ['Mashed Potatoes', 'French Fries', 'Chips and Salsa', 
'Sweet Potato Fries', 'Hush Puppies', 'Garlic Butter Mushrooms', 
'Mixed Vegetables', 'Grilled Asparagus',
'Potato Salad', 'Caesar Salad', 'Coleslaw']
var mainDishes = ['Lobster Mac and Cheese', 'Teriyaki Chicken', 
'Pepperoni Pizza', 'Bibimbap', 'Shashuka', 'Taiwanese Beef Noodle Soup',
'Spaghetti and Meatballs', 'Sushi', 'Corned Beef Hash']
var desserts = ['Tiramisu', 'Apple Pie', 'Macaroons', 'Banana Bread',
'Strawberry Cheesecake', 'Pavlova', 'Croissants', 'Pumpkin Pie', 
'Snickerdoodle Cookies']
var entireMeal = `${mainDishes[Math.floor(Math.random()*mainDishes.length)]} with ${sides[Math.floor(Math.random()*sides.length)]} and ${desserts[Math.floor(Math.random()*desserts.length)]} for dessert!`


// event listeners HERE
form.addEventListener('submit', testFunction)
clearButton.addEventListener('click', function(){
    goToHomePage();
    clearSuggestion();
    console.log("testing")
})

// functionality and other behavior HERE

function testFunction(event) {
    box2.innerHTML = "";
    var element = document.querySelector('form');

    for(i = 0; i < element.length; i++) {
        if(element[i].checked) {
            var value = element[i].value;
            // console.log(value)
        }
    }
    switch(value) {
        case "Side":
            box2.innerHTML = `
            <section class="foodSuggestion">
                <div class="prompt">You should make:</div>
                <BR>
                <div id="randomSuggestion">${sides[Math.floor(Math.random()*sides.length)]}</div>
                <button class="clearButton">Clear</button>
            </section>` 
          break;
        case "Main Dish":
            box2.innerHTML = `
            <section class="foodSuggestion">
                <div class="prompt">You should make:</div>
                <BR>
                <div id="randomSuggestion">${sides[Math.floor(Math.random()*mainDishes.length)]}</div>
            
            </section>`
          break;
        case "Dessert":
            box2.innerHTML = `
            <section class="foodSuggestion">
                <div class="prompt">You should make:</div>
                <BR>
                <div id="randomSuggestion">${sides[Math.floor(Math.random()*desserts.length)]}</div>
            </section>` 
            break;
        case "Entire Meal":
            box2.innerHTML = `
            <section class="foodSuggestion">
                <div class="prompt">You should make:</div>
                <BR>
                <div id="randomSuggestion">${entireMeal}</div>
            </section>` 
            break;
        default:
            break;
    }
    event.preventDefault();
}

function goToHomePage (){
    cookpotImg.classList.add('hidden')
    mealTypes.classList.add('hidden')
}

function clearSuggestion() {
    console.log("function is being called")
    box2.innerHTML = ""
    box2.innerHTML = `<img class="cookpot-img" src="./assets/cookpot.svg" alt="broken img">`
}
