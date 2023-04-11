document.addEventListener('DOMContentLoaded', function() {
  const save = document.getElementById('saveButton');
  const nameInput = document.getElementById('name');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');
  const recipeList = document.getElementById('list');

  save.addEventListener('click', function() {
    const name = nameInput.value;
    const ingredients = ingredientsInput.value;
    const instructions = instructionsInput.value;

    // check if recipe already exists in recipe list
    const existingRecipes = recipeList.querySelectorAll('.recipe');
    let alreadyExists = false;
    existingRecipes.forEach(existingRecipe => {
      if (existingRecipe.querySelector('h2').textContent === name &&
          existingRecipe.querySelector('.ingredients').textContent === `Ingredients: ${ingredients}` &&
          existingRecipe.querySelector('.instructions').textContent === `Instructions: ${instructions}`) {
        alreadyExists = true;
        return;
      }
    });

    if (alreadyExists) {
      alert('This recipe is already in the list.');
      return;
    }

    const recipe = document.createElement('div');
    const recipeName = document.createElement('h2');
    const recipeIngredients = document.createElement('p');
    recipeIngredients.classList.add('ingredients');
    const recipeInstructions = document.createElement('p');
    recipeInstructions.classList.add('instructions');
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

    // clear input fields
    nameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
  });
});
