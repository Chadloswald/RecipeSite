document.addEventListener('DOMContentLoaded', function() {

  const save = document.getElementById('saveButton');

  const nameInput = document.getElementById('name');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');

  const recipeList = document.getElementById('recipe-list');

  save.addEventListener('click', function() {

    const name = nameInput.value;
    const ingredients = ingredientsInput.value;
    const instructions = instructionsInput.value;

    const recipe = document.createElement('div');
    const recipeName = document.createElement('h2');
    const recipeIngredients = document.createElement('p');
    const recipeInstructions = document.createElement('p');
    const recipeLine = document.createElement('div');

    recipeLine.classList.add('recipe-line');

    recipe.appendChild(recipeLine);

    recipeName.innerText = name;
    recipeIngredients.innerText = `Ingredients: ${ingredients}`;
    recipeInstructions.innerText = `Instructions: ${instructions}`;

    recipe.appendChild(recipeName);
    recipe.appendChild(recipeIngredients);
    recipe.appendChild(recipeInstructions);

    recipeList.appendChild(recipe);

    recipeLine.style.display = 'block';

    nameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
  });

  const printButton = document.getElementById('printButton');

  printButton.addEventListener('click', function() {
    window.print();
  });

});
