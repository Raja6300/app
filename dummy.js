function search_bar() {
    // Get the value of the input field
    let input = document.getElementById('searchbar').value.toLowerCase();
    // Get all the containers
    let containers = document.getElementsByClassName('container');

    // Loop through all containers, and hide those who don't match the search query
    for (let i = 0; i < containers.length; i++) {
        let itemName = containers[i].getElementsByClassName('itemName')[0];
        if (itemName.innerHTML.toLowerCase().indexOf(input) > -1) {
            containers[i].style.display = '';
        } else {
            containers[i].style.display = 'none';
        }
    }
}

const products = [
    {
        image: "image/dosa.png",
        name: "dosa",
        price: 40
    },
    {
        image: "image/biryani.png",
        name: "Biryani",
        price: 180
    },
    {
        image: "image/meals.png",
        name: "meals",
        price: 80
    },
    {
        image: "image/uggani.png",
        name: "uggani",
        price: 40
    },
    {
        image: "image/milk.png",
        name: "milk",
        price: 40
    },
    {
        image: "image/puri.png",
        name: "puri",
        price: 40
    }
];

let productHtml = '';
products.forEach((product) => {
    productHtml += `<div class="container">
        <div class="first-item">
            <img src="${product.image}">
        </div>
        <ul>
            <li class="itemName">${product.name}</li>
        </ul>
        <div class="price">
            <p class="price-rupes">Price: ${product.price}</p>
            <p>proteins: 60</p>
        </div>
        <div class="cart-quantity">Quantity:
            <select class="select-quantity">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div class="add-button">
            <button class="add-to-cart">Add to cart</button>
        </div>
    </div>`;
});

document.querySelector('.js-products-grid').innerHTML = productHtml;

// JavaScript to handle cart quantity
let cartQuantity = 0;
const cartQuantityNumber = document.querySelector('.cart-quantity-number');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const container = event.target.closest('.container');
        const selectElement = container.querySelector('.select-quantity');
        const quantity = parseInt(selectElement.value, 10);
        cartQuantity += quantity;
        cartQuantityNumber.textContent = cartQuantity;
    });
});