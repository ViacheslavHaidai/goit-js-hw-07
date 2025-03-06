const categoriesList = document.querySelectorAll("#categories li.item");

console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements ${category.querySelectorAll("li").length}`);
});
const categoriesClass = document.querySelector("#categories");
const newClass = categoriesClass.querySelectorAll("li");
newClass.forEach((addClass) => {
  addClass.classList.add("item-child");
});
