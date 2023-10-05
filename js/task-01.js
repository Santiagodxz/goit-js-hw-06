var categoryList = document.querySelector("#categories");
var categoryItem = categoryList.querySelectorAll("li.item");
var numberOfCategories = categoryItem.length;
console.log("Number of categories:", numberOfCategories);

categoryItem.forEach((categoryItem) => {
  var categoryTitle = categoryItem.querySelector("h2").textContent;

  var categoryElements = categoryItem.querySelectorAll("ul li");

  var numberOfElements = categoryElements.length;

  console.log("Category:", categoryTitle);
  
  console.log("Elements:", numberOfElements);
});