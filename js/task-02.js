// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

var ingredientsLi = document.querySelector("ingredients");

var ingredients =[
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

  const ingredientsLiItem = [];
  
  for (let i = 0; i < ingredients.length; i++) {
    const newItem = document.createElement("li");
    newItem.innerText= ingredients[i];
    newItem.classList.add("item");
    ingredientsLiItem.push(newItem);
  }

  ingredientsLiItem.forEach((li) => {
    document.querySelector("ul").append(li);
  });
  
