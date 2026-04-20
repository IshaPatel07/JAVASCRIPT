const productDivision = document.getElementById("product-div")

async function addToCard(i) {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    // console.log(data.products[i]);
    const arr = JSON.parse(localStorage.getItem("carts")) || [];
    arr.push(data.products[i]);
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
                </div>`;
        productDivision.appendChild(div);
    })
}

async function fetchProduct() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    displayProducts(data.products)

}

fetchProduct();