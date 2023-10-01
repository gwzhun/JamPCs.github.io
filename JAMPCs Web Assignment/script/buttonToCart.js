     // JavaScript for adding products to the cart
     function addToCart(productName, productPrice, productImage) {
        // Create a new object for the selected product
        var product = { name: productName, price: productPrice, image: productImage, quantity: 1 };

        // Retrieve the cart data from localStorage
        var cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if the product is already in the cart
        var existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push(product);
        }

        // Store the updated cart data back in localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added!");
    }

