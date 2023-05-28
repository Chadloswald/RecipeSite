const recipeList = document.getElementById('recipe-list');

document.addEventListener('DOMContentLoaded', function() {

  const save = document.getElementById('saveButton');

  const nameInput = document.getElementById('name');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');

  save.addEventListener('click', function() {
    const name = nameInput.value;
    const ingredients = ingredientsInput.value;
    const instructions = instructionsInput.value;

    const recipe = document.createElement('div');
    recipe.classList.add('recipe'); // Add the 'recipe' class

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

  const emailButton = document.getElementById('emailButton');

  emailButton.addEventListener('click', function() {
    // Get the saved recipe list
    const recipes = recipeList.getElementsByClassName('recipe');

    // Create the email body with the contents of the saved recipe list
    let emailBody = '';
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      const recipeName = recipe.querySelector('h2').innerText;
      const recipeIngredients = recipe.querySelector('p:nth-of-type(1)').innerText;
      const recipeInstructions = recipe.querySelector('p:nth-of-type(2)').innerText;

      emailBody += `${recipeName}\n\nIngredients: ${recipeIngredients}\n\nInstructions: ${recipeInstructions}\n\n`;
    }

    // Open the default email client with the populated email body
    const subject = 'My Saved Recipes';
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  });
    document.addEventListener('DOMContentLoaded', function() {
      const topLeftButton = document.getElementById('help');
    
      topLeftButton.addEventListener('click', function() {
        alert('Button clicked!');
      });
    });

 

});