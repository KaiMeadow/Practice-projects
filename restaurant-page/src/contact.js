function contact() {
  const content = document.getElementById("content");

  const contactUs = document.createElement("h1");
  contactUs.textContent = "Contact us";
  content.appendChild(contactUs)

  const contactInfo = document.createElement("div");
  
  const address = document.createElement("p");
  address.textContent = "123 Ha Dong, Hanoi"
  contactInfo.appendChild(address);

  const phone = document.createElement("p");
  phone.textContent = "+84 XXXXXXXXXX"
  contactInfo.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "✉ contact@kaiworestaurant.com"
  contactInfo.appendChild(email);
  
  content.appendChild(contactInfo);
}

export default contact;