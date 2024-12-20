const products = {
  electronics: [
    { product: "laptop", price: 23456, brand: "hp" },
    { product: "mobile", price: 123432, brand: "samsung" },
    { product: "camera", price: 987654567, brand: "sony" },
  ],
  clothes: [
    { product: "tshirt", price: 23456, brand: "jii" },
    { product: "pant", price: 123432, brand: "nbhghj" },
    { product: "hoodie", price: 987654567, brand: "nbvfghn" },
  ],
  footwear: [
    { product: "shoe", price: 23456, brand: "ddfgh" },
    { product: "slider", price: 123432, brand: "fghj" },
    { product: "socks", price: 987654567, brand: "fghj" },
  ],
};

let container = document.querySelector(".container-u");

for (let category in products) {
  let h1 = document.createElement("h1");
  h1.textContent = category;
  container.append(h1);
  const productdiv = document.querySelector("div");
  productdiv.setAttribute("class", "products");

  products[category].map((ele, index) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.width = "18rem";
    let image = document.createElement("img");
    image.alt = ele.product;
    card.append(image);
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    let cardTitle = document.createElement("h3");
    cardTitle.textContent = ele.product;
    cardBody.append(cardTitle);
    let brand = document.createElement("h5");
    brand.textContent = ele.brand;
    cardBody.append(brand);
    let price = document.createElement("span");
    price.textContent = ele.price;
    cardBody.append(price);
    let addtocart = document.createElement("button");
    addtocart.textContent = "Add to cart";
    cardBody.append(addtocart);
    card.append(cardBody);
    productdiv.append(card);
  });
//   container.append(productdiv);
}
