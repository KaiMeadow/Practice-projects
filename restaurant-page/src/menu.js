function createMenuItem(name, itemPrice) {
  const foodItem = document.createElement("div");
  foodItem.classList.add("foodItem");

  const itemName = document.createElement("h3");
  itemName.textContent = name;
  foodItem.appendChild(itemName);

  const price = document.createElement("p");
  price.textContent = itemPrice;
  foodItem.appendChild(price);

  return foodItem;
}

function menu() {
  const content = document.querySelector("#content");

  const mainSection = document.createElement("div");
  mainSection.classList.add("mainSection");

  const menuItems = document.createElement("div");
  menuItems.classList.add("menuItems");

  const ourMenu = document.createElement("h1");
  ourMenu.textContent = "Our Menu";
  content.appendChild(ourMenu);

  const mainCourse = document.createElement("h2");
  mainCourse.textContent = "Main Course";

  const grilledChicken = createMenuItem("Grilled Chicken", "$12");
  menuItems.appendChild(grilledChicken);

  const pasta = createMenuItem("Beef Pasta", "$14");
  menuItems.appendChild(pasta);

  const seafood = createMenuItem("Seafood Rice", "$15");
  menuItems.appendChild(seafood);

  mainSection.appendChild(mainCourse);
  mainSection.appendChild(menuItems);
  content.appendChild(mainSection);
}

export default menu;
