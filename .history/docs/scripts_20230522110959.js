document.addEventListener('DOMContentLoaded', function() {

  const save = document.getElementById('saveButton');
  const printButton = document.getElementById('printButton');
  const emailButton = document.getElementById('emailButton'); // New email button

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

  printButton.addEventListener('click', function() {
    window.print();
  });

  emailButton.addEventListener('click', function() { // New email button event listener
    const subject = 'Chef Notes Recipes';
    let body = '<h1>Chef Notes</h1>'; // Email body starts with 'Chef Notes' heading

    const recipes = document.querySelectorAll('#recipe-list > div'); // Select all recipe divs

    recipes.forEach(function(recipe) {
      const recipeName = recipe.querySelector('h2').innerText;
      const recipeIngredients = recipe.querySelector('p:nth-child(2)').innerText;
      const recipeInstructions = recipe.querySelector('p:nth-child(3)').innerText;

      // Simplified format for email listing
      const simplifiedRecipe = `
        <h2>${recipeName}</h2>
        <p><strong>Ingredients:</strong> ${recipeIngredients}</p>
        <p><strong>Instructions:</strong> ${recipeInstructions}</p>
        <hr>
      `;

      body += simplifiedRecipe; // Append each recipe to the email body
    });

    // Create a mailto link with the subject and body
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the mailto link, triggering the user's email client
    window.location.href = mailtoLink;
  });

});