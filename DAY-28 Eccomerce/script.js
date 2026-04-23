const productDivision = document.getElementById("product-div");
let allProduct = [];

async function addToCard(i) {
  const arr = JSON.parse(localStorage.getItem("carts")) || [];

  const res = arr.findIndex((e) => e.id == allProduct[i].id);

  if (res == -1) {
    allProduct[i].qty = 1;
    arr.push(allProduct[i]);
  } else {
    arr[res].qty++;
  }

  localStorage.setItem("carts", JSON.stringify(arr));
}

function displayProducts(products) {
    products.map((product, i) => {
        const div = document.createElement("div");
        div.className = "card p-0";
        div.style.width = "18rem"
        div.innerHTML = `
                <img src=${product.images[0]}
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.category}</p>
                    <p class="card-text">Price  ₹${(product.price * 86).toFixed(2)}</p>
                    <button onclick="addToCard(${i})" class="btn btn-primary">Add to card</button>
                </div>` ;
    productDivision.appendChild(div);
  });
}

async function fetchProduct() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  allProduct = data.products;
  displayProducts(data.products);
}

fetchProduct();
