$(function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
      }

    // const defaultBags = [
    //     { name: "Polene", price: 31190.64 },
    //     { name: "Louis Vuitton", price: 90019.50 },
    //     { name: "Gucci", price: 108023.40 },
    //     { name: "Cuyana", price: 19204.16 },
    //     { name: "Lacoste", price: 5101.11 },
    //     { name: "Telfar", price: 12002.60},
    //     { name: "Coach", price: 27005.85},
    //     { name: "Longchamp", price: 21004.55 }
    // ]

    // function loadData() {
    //     let data = JSON.parse(localStorage.getItem("bags"));
    //     if (!data) {
    //         localStorage.setItem("bags", JSON.stringify(defaultBags));
    //         data = defaultBags;
    //     }
    //     return data;
    // }

    // function saveData(data) {
    //     localStorage.setItem("bags", JSON.stringify(data));
    // }

    $(".add-to-cart").on('click', function () {
        alert("Item added!");
        const name = $(this).data("name");
        const price = parseFloat($(this).data("price"));

        cart.push({ name, price, quantity: 1 });

        // let card = $(this).closest(".card");
        // let name = card.find(".brand").text();
        // let price = parseFloat(card.find(".price").data("price"));

        // let name = defaultBags.name();
        // let price = defaultBags.price();

        // let existing = defaultBags(item => item.name === name);
  
        // if (existing) {
        // existing.quantity++;
        // } else {
        // data.push({ name, price, quantity: 1 });
        // }
  
        updateCart();
    });

    function updateCart() {
        const $cartList = $("#cart-items");
        const $cartTotal = $("#cart-total");

        $cartList.empty();
        total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            $cartList.append(`
                <div class="border p-2 mb-2">
                  <strong>${item.name}</strong><br>
                  ₱${item.price.toFixed(2)} <br>
        
                  <div class="d-flex justify-content-between align-items-center my-2">
                    <button class="btn btn-sm btn-secondary minus" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn btn-sm btn-secondary plus" data-index="${index}">+</button>
                  </div>
        
                  <button class="btn btn-sm btn-danger remove-item" data-index="${index}">Remove</button>
                </div>
            `);
            
        });

        $cartTotal.text(total.toFixed(2));

        saveCart();

        // $("#cart-items").empty();
        // let total = 0;

        // data.forEach((item, index) => {
        //     total += item.price * item.quantity;

            // $("#cart-items").append(`
            //     <div class="border p-2 mb-2">
            //       <strong>${item.name}</strong><br>
            //       ₱${item.price.toLocaleString()} <br>
        
            //       <div class="d-flex justify-content-between align-items-center my-2">
            //         <button class="btn btn-sm btn-secondary minus" data-index="${index}">-</button>
            //         <span>${item.quantity}</span>
            //         <button class="btn btn-sm btn-secondary plus" data-index="${index}">+</button>
            //       </div>
        
            //       <button class="btn btn-sm btn-danger remove" data-index="${index}">Remove</button>
            //     </div>
            //   `);
        // });

        // $("#total").text(total.toLocaleString());

        // saveData();
    }

    $(document).on("click", ".minus", function () {
        let index = $(this).data("index");
        cart[index].quantity--;
    
        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }
    
        updateCart();
    });

    $(document).on("click", ".plus", function () {
        let index = $(this).data("index");
        cart[index].quantity++;
        updateCart();
    });
    
    $("#cart-items").on("click", ".remove-item", function() {
        const index = $(this).data("index");
        cart.splice(index, 1);
        updateCart();
    });

    $("#search").on("input", function () {
            var keyword = $(this).val().toLowerCase();

            $(".card").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1)
            });
            updateCart()
    });

        
  
       
       
    // });


    // $("#search").on("input", function () {
    //     const keyword = $(this).val().toLowerCase();
    //     const data = saveCart();
  
    //     const filtered = data.filter(cart =>
    //       cart.name.toLowerCase().includes(keyword)
    //     );
  
    //     updateCart(filtered);
    // });

    
    // // INCREASE QTY
    // $(document).on("click", ".plus", function () {
    //     let index = $(this).data("index");
    //     data[index].quantity++;
    //     updateCart();
    //   });
    
    //   // DECREASE QTY
    // $(document).on("click", ".minus", function () {
    //     let index = $(this).data("index");
    //     data[index].quantity--;
    
    //     if (cart[index].quantity <= 0) {
    //       cart.splice(index, 1);
    //     }
    
    //     updateCart();
    //   });
    
    //   // REMOVE ITEM
    // $(document).on("click", ".remove", function () {
    //     let index = $(this).data("index");
    //     data.splice(index, 1);
    //     updateCart();
    //   });
    
    //   // INITIAL LOAD
    // updateCart();





    // $("#search").on("input", function () {
    //     const keyword = $(this).val().toLowerCase();
    //     const data = loadData();

    //     const filtered = data.filter(bag =>
    //         bag.name.toLowerCase().includes(keyword)
    //     );
    // })

    $("#notification").on("click", function () {
        alert("You have 0 notification");
    });

    $("#signUp").on("click", function () {
        alert("Please Sign Up")
    });

    $("#login").on("click", function () {
        alert("Please Login")
    });

    $(".btn-success").on("click", function () {
        if (total == 0) {
            alert("Sorry, you don't have any item to purchase!")
        } else {
            alert("Thank you for purchasing!")
        }
        
    });

    updateCart();


  
  });