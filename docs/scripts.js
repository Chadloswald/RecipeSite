// Waits for the page to fully load before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {

  // Gives the Save button the name "save" makes it a local variable
  const save = document.getElementById('saveButton');

  // Grabs the name, ingredients, and instructions fields from the HTML, makes them local variables
  const nameInput = document.getElementById('name');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');

  // Does the same with the recipe-list div
  const recipeList = document.getElementById('recipe-list');

  // Adds EventListener to the save button. Activates function when clicked
  save.addEventListener('click', function() {

    // Puts the current values of the 3 forms into the local variables
    const name = nameInput.value;
    const ingredients = ingredientsInput.value;
    const instructions = instructionsInput.value;

    // Creates elements that will be used when displaying the completed saved recipe. HTML elements
    const recipe = document.createElement('div');
    const recipeName = document.createElement('h2');
    const recipeIngredients = document.createElement('p');
    const recipeInstructions = document.createElement('p');
    const recipeLine = document.createElement('div');

    // This adds a class to the recipe line element. Hopefully this will help with CSS
    recipeLine.classList.add('recipe-line');

    // Makes sure that all recipelines are contained within the recipe container
    recipe.appendChild(recipeLine);

    // This sets the text content for the recipe name, ingredients, and instructions. ${} used to add all contents of ingredients/instructions variables
    recipeName.innerText = name;
    recipeIngredients.innerText = `Ingredients: ${ingredients}`;
    recipeInstructions.innerText = `Instructions: ${instructions}`;

    // These append the recipe name, ingredients, and instructions elements to the recipe element.
    recipe.appendChild(recipeName);
    recipe.appendChild(recipeIngredients);
    recipe.appendChild(recipeInstructions);

    // This appends the recipe element to the recipe list container.
    recipeList.appendChild(recipe);

    // This sets the display property of the recipe line to "block".
    recipeLine.style.display = 'block';

    // These clear the input fields.
    nameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
  });

  // This selects the "Print" button and assigns it to the "printButton" variable.
  const printButton = document.getElementById('printButton');

  // This adds an event listener to the "Print" button that will execute the following code when clicked.
  printButton.addEventListener('click', function() {

    // This triggers the print dialog.
    window.print();
  });

});