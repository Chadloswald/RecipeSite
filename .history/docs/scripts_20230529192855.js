const recipeList = document.getElementById('recipe-list');

document.addEventListener('DOMContentLoaded', function() {

  const save = document.getElementById('saveButton');

  const nameInput = document.getElementById('name');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');

  save.addEventListener('click', function() {

    document.getElementById("printButton").style.display = "inline";
    document.getElementById("emailButton").style.display = "inline";
    document.getElementById("deleteButton").style.display = "inline";

    const name = nameInput.value.trim();
    const ingredients = ingredientsInput.value.trim();
    const instructions = instructionsInput.value.trim();

    if (name === '' || ingredients === '' || instructions === '') {
      alert('Please fill in all the fields before saving the recipe.');
      return
    }

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
    event.preventDefault();
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

    event.preventDefault();
    // Open the default email client with the populated email body
    const subject = 'My Saved Recipes';
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
  });

  help.addEventListener('click', function() {    
    window.alert("\nWelcome to Chef Notes! \nChef Notes is designed for you to quickly jot down those recipe ideas that you have on the go! Just fill in the Recipe Name, the Ingredients, and the Directions into the corresponding fields then click the Save Recipe button. \nOnce you've got a recipe or two saved up, click the Print Recipe button to open your devices print services, select a printer, then print a hard copy of your recipes \nClick the Email Recipes button to open up your device's default email client so you can send your recipes wherever they need to go!");
  });
  const deleteButton = document.getElementById("deleteButton")
  deleteButton.addEventListener('click', function() {
    recipeList.innerHTML = '';

  });
});