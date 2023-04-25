// This waits for the page to fully load before executing any JavaScript code.
document.addEventListener('DOMContentLoaded', function() {

  // This selects the "Save" button and assigns it to the "save" variable.
  const save = document.getElementById('saveButton');

  // These select the input fields for the recipe name, ingredients, and instructions.
  const nameInput = document.getElementById('name');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');

  // This selects the recipe list container.
  const recipeList = document.getElementById('recipe-list');

  // This adds an event listener to the "Save" button that will execute the following code when clicked.
  save.addEventListener('click', function() {

    // These get the values from the input fields.
    const name = nameInput.value;
    const ingredients = ingredientsInput.value;
    const instructions = instructionsInput.value;

    // These create new elements for the recipe name, ingredients, and instructions.
    const recipe = document.createElement('div');
    const recipeName = document.createElement('h2');
    const recipeIngredients = document.createElement('p');
    const recipeInstructions = document.createElement('p');
    const recipeLine = document.createElement('div');

    // This adds a class to the recipe line element.
    recipeLine.classList.add('recipe-line');

    // This appends the recipe line element to the recipe element.
    recipe.appendChild(recipeLine);

    // This sets the text content for the recipe name, ingredients, and instructions.
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