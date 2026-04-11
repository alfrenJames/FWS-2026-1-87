  $(function () {

    const defaultShoes = [
      { name: "Nike Air Max", size: 42, price: 120, stock: 15 },
      { name: "Adidas Ultraboost", size: 41, price: 150, stock: 8 },
      { name: "Puma RS-X", size: 40, price: 110, stock: 5 },
      { name: "New Balance 574", size: 43, price: 100, stock: 20 }
    ];

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
      let total = 0;
      let low = 0;

      $("#inventoryTable").empty();

      $.each(data, function (index, shoe) {
        total += shoe.stock;
        if (shoe.stock < 10) low++;

        const status = shoe.stock < 10
          ? `<span class="badge bg-danger">Low</span>`
          : `<span class="badge bg-success">OK</span>`;

        $("#inventoryTable").append(`
          <tr>
            <td>${shoe.name}</td>
            <td>${shoe.size}</td>
            <td>$${shoe.price}</td>
            <td>${shoe.stock}</td>
            <td>${status}</td>
            <td>
              <button class="btn btn-sm btn-primary buyBtn" data-id="${index}">
                Buy
              </button>
            </td>
          </tr>
        `);
      });

      $("#totalProducts").text(data.length);
      $("#totalStock").text(total);
      $("#lowStock").text(low);
    }

    $(document).on("click", ".buyBtn", function () {
      const index = $(this).data("id");
      const data = loadData();

      if (data[index].stock > 0) {
        data[index].stock--;
        saveData(data);
        render(data);
      } else {
        alert("Out of stock!");
      }
    });

    $("#search").on("input", function () {
      const keyword = $(this).val().toLowerCase();
      const data = loadData();

      const filtered = data.filter(shoe =>
        shoe.name.toLowerCase().includes(keyword)
      );

      render(filtered);
    });

    render(loadData());

  });
