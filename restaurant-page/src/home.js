import restaurantImage from "./green-tangerine-restaurant.jpg";

function home() {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  heading.textContent = "Restaurant Page";
  content.appendChild(heading);

  const para = document.createElement("p");
  para.textContent = "Welcome to Kaiwo Restaurant, where we serve delicious food";
  content.appendChild(para);

  const image = document.createElement("img");
  image.src = restaurantImage;
  content.appendChild(image);
}

export default home;
