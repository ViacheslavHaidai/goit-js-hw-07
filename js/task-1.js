const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements ${category.querySelectorAll("ul li").length}`);
});
const categoriesClass = document.querySelectorAll("#categories .item ul li");

categoriesClass.forEach((addClass) => {
  addClass.classList.add("item-child");
});
const listClass = document.querySelectorAll("#categories .item ul");

listClass.forEach((addClass) => {
  addClass.classList.add("list-items");
});
