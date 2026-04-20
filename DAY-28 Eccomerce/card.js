const CardDivision = document.getElementById("Cart-div")

function displayCardsProducts() {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    // CardDivision.innerHTML = "";
    carts.map(element => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${element.images[0]} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">Price  ₹${(element.price * 86).toFixed(2)}</p>
                            <p class="card-text">${element.category}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>`
        CardDivision.appendChild(div)
    })
}

// console.log(localStorage.getItem("carts"))


displayCardsProducts();