const nav=document.querySelector('.nav');
    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY >0)
    })


    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('quantityForm').style.display = 'none';
    });
    
let cart = [];
function filterProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productList = document.getElementById('productList');
    const products = productList.getElementsByTagName('li');

    productList.style.display = input ? 'block' : 'none';

    for (let product of products) {
        const text = product.textContent.toLowerCase();
        product.style.display = text.includes(input) ? 'block' : 'none';
    }
}

document.getElementById('productList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const selectedProduct = event.target;
        document.getElementById('searchInput').value = selectedProduct.textContent.split(' - ')[0];
        document.getElementById('quantityInput').focus();
        document.getElementById('productList').style.display = 'none';
    }
});

function addToCart() {
    const input = document.getElementById('searchInput').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const productList = document.getElementById('productList').getElementsByTagName('li');

    let price = 0;
    for (let product of productList) {
        if (product.textContent.split(' - ')[0] === input) {
            price = parseFloat(product.getAttribute('data-price'));
            break;
        }
    }

    const subTotal = price * quantity;
    cart.push({ input, quantity, subTotal });
    updateCart();
}

function updateCart() {
    const cartBody = document.getElementById('cartBody');
    cartBody.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.subTotal;
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.input}</td><td>${item.quantity}</td><td>S/. ${item.subTotal.toFixed(2)}</td>`;
        cartBody.appendChild(row);
    });

    document.getElementById('totalPrice').textContent = `S/. ${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: false
    });
});


