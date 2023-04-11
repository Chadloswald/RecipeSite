document.addEventListener('DOMContentLoaded', function() { //Adds the event listener that waits for site to load before executing the function
  const save = document.getElementById('saveButton'); //The Save Button
  const nameInput = document.getElementById('name'); //The "Name" form
  const ingredientsInput = document.getElementById('ingredients'); //The "Ingredients" form
  const instructionsInput = document.getElementById('instructions'); //The "Instructions" form
  const recipeList = document.getElementById('list'); //The place where your recipes save when you hit the "Save Button"

  save.addEventListener('click', function() { //Adds the event listener to the Save button, listens for a "click"
      const name = nameInput.value; //Gets the value that was put into the "Name" form
      const ingredients = ingredientsInput.value; //Gets the value that was put into the "Ingredients" form
      const instructions = instructionsInput.value; //Gets the value that was put into the "Instructions" form

      const recipe = document.createElement('div'); //Creating a recipe "container" using a div tag
      const recipeName = document.createElement('h2'); //Takes the "name" element and puts it in the recipe container as an h2
      const recipeIngredients = document.createElement('p'); //Takes the "ingredients" element and puts it in the recipe container as an p
      const recipeInstructions = document.createElement('p'); //Takes the "instructions" element and puts it in the recipe container as an p

      recipeName.innerText = name; //Populates the "recipeName" element with the value of the "name" element
      recipeIngredients.innerText = `Ingredients: ${ingredients}`; //Populates the "recipeIngredients" element with all the strings in the "ingredients" element
      recipeInstructions.innerText = `Instructions: ${instructions}`; //Populates the "recipeInstructions" element with all the strings in the "instructions" element
      recipe.appendChild(recipeName); //These 3 lines add "recipeName" "recipeIngredients" and "recipeInstructions" of the recipe doc
      recipe.appendChild(recipeIngredients);
      recipe.appendChild(recipeInstructions);

      recipeList.appendChild(recipe); //Sets the "recipe" as a child of the "recipeList" - Causes each "recipe" to display in the "recipeList"
  });
});