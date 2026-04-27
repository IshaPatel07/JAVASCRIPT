let products = JSON.parse(localStorage.getItem("products")) || [];
let editId = null;

function saveLocal() {
  localStorage.setItem("products", JSON.stringify(products));
}


function clearFields() {
  title.value = "";
  price.value = "";
  date.value = "";
  editId = null;
}


function add_pkt() {
  let titleVal = title.value.trim();
  let priceVal = price.value.trim();

  if (!titleVal || !priceVal) {
    alert("Title and desc are required");
    return;
  }

  let product = {
    id: editId ? editId : Date.now(),
    title: titleVal,
    price: priceVal,
    category: category.value,
  };

  if (editId) {
    products = products.map((p) => (p.id === editId ? product : p));
  } else {
    products.push(product);
  }

  saveLocal();
  clearFields();
  displayProducts(products);
}

function displayProducts(data) {
  productList.innerHTML = "";

  data.forEach((p) => {
    productList.innerHTML = `
      <tr>
    
        <td>${p.title}</td>
        <td>${p.price}</td>
        <td>${p.date}</td>
        
        <td>
          <button class="btn btn-outline-warning" onclick="editProduct(${p.id})">Edit</button>
          <button class="btn btn-outline-danger" onclick="deleteProduct(${p.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editProduct(id) {
  let product = products.find((p) => p.id === id);

  title.value = product.title;
  price.value = product.price;
  category.value = product.category;

  editId = id;
}

function deleteProduct(id) {
  products = products.filter((p) => p.id !== id);
  saveLocal();
  displayProducts(products);
  setTimeout(() => {
    products = products.filter((p) => p.id !== id);
    saveLocal();
    displayProducts(products);
  }, 300);
}



function applyFilters() {
  let searchVal = search.value.toLowerCase();
  let catVal = filterCategory.value;

  let filtered = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchVal) &&
      (catVal === "" || p.category === catVal),
  );

  displayProducts(filtered);
}

displayProducts(products);
