const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const titleEl = category.querySelector("h2");
  titleEl.classList.add("title-list");

  const listEl = category.querySelector("ul");
  listEl.classList.add("item-list");

  const listItems = listEl.querySelectorAll("li");
  listItems.forEach((li) => li.classList.add("item-element"));

  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listItems.length}`);
});
