// queryselectors and variables HERE
var form = document.querySelector('form');
var mealTypes = document.getElementsByName('foodOption')
var letsCookButton = document.querySelector('#letsCook');
var clearButton = document.querySelector('.clearContainer');
var cookpotImg = document.querySelector('.cookpot-img');
var prompt1 = document.querySelector('.prompt');
var suggestionPlaceholder = document.querySelector('.suggestion-placeholder');
var box2 = document.querySelector('.box2');

var sides = ['Mashed Potatoes', 'French Fries', 'Chips and Salsa', 'Sweet Potato Fries', 'Hush Puppies', 'Garlic Butter Mushrooms', 'Mixed Vegetables', 'Grilled Asparagus','Potato Salad', 'Caesar Salad', 'Coleslaw']
var mainDishes = ['Lobster Mac and Cheese', 'Teriyaki Chicken','Pepperoni Pizza', 'Bibimbap', 'Shashuka', 'Taiwanese Beef Noodle Soup', 'Spaghetti and Meatballs', 'Sushi', 'Corned Beef Hash']
var desserts = ['Tiramisu', 'Apple Pie', 'Macaroons', 'Banana Bread','Strawberry Cheesecake', 'Pavlova', 'Croissants', 'Pumpkin Pie', 'Snickerdoodle Cookies']

var entireMeal = `${mainDishes[Math.floor(Math.random()*mainDishes.length)]} with ${sides[Math.floor(Math.random()*sides.length)]} and ${desserts[Math.floor(Math.random()*desserts.length)]}`

// event listeners HERE
letsCookButton.addEventListener('click', function(){
    letsCookDisplays();
    showSuggestion();
})
clearButton.addEventListener('click', function(){
    goToHomePage();
})

// functionality and other behavior HERE

function showSuggestion() {
    var foodOptions = document.getElementsByName('foodOption');

    for(i = 0; i < foodOptions.length; i++) {
        if(foodOptions[i].checked) {
            var checkedChoice = foodOptions[i].value;
        }
    }
    switch(checkedChoice) {
        case "Side":
            suggestionPlaceholder.innerText = sides[Math.floor(Math.random()*sides.length)]+'!';
            break;
        case "Main Dish":
            suggestionPlaceholder.innerText = mainDishes[Math.floor(Math.random()*mainDishes.length)]+'!';
            break;
        case "Dessert":
            suggestionPlaceholder.innerText = desserts[Math.floor(Math.random()*desserts.length)]+'!';
            break;
        case "Entire Meal":
            suggestionPlaceholder.innerHTML = entireMeal+'!';
            break;
        default:
            break;
    }
}

function letsCookDisplays(){
    event.preventDefault();
    cookpotImg.classList.add('hidden');
    suggestionPlaceholder.classList.remove('hidden');
    prompt1.classList.remove('hidden');
    clearButton.classList.remove('hidden');
}

function goToHomePage (){
    cookpotImg.classList.remove('hidden');
    clearButton.classList.add('hidden');
    suggestionPlaceholder.classList.add('hidden');
    prompt1.classList.add('hidden');
}

