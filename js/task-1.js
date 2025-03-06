const categoriesList = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements ${category.querySelectorAll("li").length}`);
});
