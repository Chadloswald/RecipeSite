document.addEventListener('DOMContentLoaded', function() {
  const saveButton = document.getElementById('saveButton');
  const printButton = document.getElementById('printButton');
  const emailButton = document.getElementById('emailButton');
  const nameInput = document.getElementById('name');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');
  const recipeList = document.getElementById('recipe-list');

  saveButton.addEventListener('click', function() {
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
    const recipeContainer = recipeList.innerHTML;
    const printContent = document.createElement('div');
    printContent.innerHTML = recipeContainer;

    const mailtoLink = document.createElement('a');
    mailtoLink.href = 'mailto:?subject=My Saved Recipes&body=' + encodeURIComponent(printContent.innerText);

    // Create a temporary link and simulate a click
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink.href;
    tempLink.style.display = 'none';
    tempLink.target = '_blank';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  });

  emailButton.addEventListener('click', function() {
    const recipient = prompt('oWhat email address do you want to send your recipes to?');
    if (recipient) {
      const mailtoLink = document.createElement('a');
      mailtoLink.href = 'mailto:' + recipient + '?subject=My Saved Recipes&body=' + encodeURIComponent(recipeList.innerText);
      mailtoLink.click();
    }
  });
});