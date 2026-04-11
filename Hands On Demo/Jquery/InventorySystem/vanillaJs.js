  const table = document.getElementById("inventoryTable");
  const searchInput = document.getElementById("search");

  const totalProducts = document.getElementById("totalProducts");
  const totalStock = document.getElementById("totalStock");
  const lowStock = document.getElementById("lowStock");

  // Default dataset
  const defaultShoes = [
    { name: "Nike Air Max", size: 42, price: 120, stock: 15 },
    { name: "Adidas Ultraboost", size: 41, price: 150, stock: 8 },
    { name: "Puma RS-X", size: 40, price: 110, stock: 5 },
    { name: "New Balance 574", size: 43, price: 100, stock: 20 }
  ];

  // Load or initialize
  function loadData() {
    let data = JSON.parse(localStorage.getItem("shoes"));
    if (!data) {
      localStorage.setItem("shoes", JSON.stringify(defaultShoes));
      data = defaultShoes;
    }
    return data;
  }

  function saveData(data) {
    localStorage.setItem("shoes", JSON.stringify(data));
  }

  function render(data) {
    table.innerHTML = "";

    let total = 0;
    let low = 0;

    data.forEach((shoe, index) => {
      total += shoe.stock;
      if (shoe.stock < 10) low++;

      const status = shoe.stock < 10
        ? `<span class="badge bg-danger">Low</span>`
        : `<span class="badge bg-success">OK</span>`;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${shoe.name}</td>
        <td>${shoe.size}</td>
        <td>$${shoe.price}</td>
        <td>${shoe.stock}</td>
        <td>${status}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="buy(${index})">Buy</button>
        </td>
      `;

      table.appendChild(row);
    });

    totalProducts.textContent = data.length;
    totalStock.textContent = total;
    lowStock.textContent = low;
  }

  function buy(index) {
    const data = loadData();

    if (data[index].stock > 0) {
      data[index].stock--;
      saveData(data);
      render(data);
    } else {
      alert("Out of stock!");
    }
  }

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const data = loadData();

    const filtered = data.filter(shoe =>
      shoe.name.toLowerCase().includes(keyword)
    );

    render(filtered);
  });

  // Init
  render(loadData());