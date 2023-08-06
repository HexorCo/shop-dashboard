let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id,producto, precio, img) {
    const existingProduct = cart.find(item => item.producto === producto);
    if (existingProduct) {
        existingProduct.cantidad += 1;
    } else {
        cart.push({id, producto, precio,img, cantidad: 1});
    }
    saveCartToLocalStorage(); 

    setTimeout(() => {
        if (cart.length === 0) {
            document.querySelector('#navigation > ul:nth-child(2) > li.nav-item.mx-2 > a > i').innerHTML = "";
        } else {
            let total = 0;
            cart.forEach(item => {
                total += item.cantidad;
            });
            document.querySelector('#navigation > ul:nth-child(2) > li.nav-item.mx-2 > a > i').innerHTML = "<span>"+total+"</span>";
        }
    }, 100);
   

}


function removeArticle(id) {

    const existingProduct = cart.findIndex(item => item.id === id);
    if (existingProduct !== -1) {
        cart.splice(existingProduct, 1);
        updateCart()
        saveCartToLocalStorage(); 

    } 

    setTimeout(() => {
        if (cart.length === 0) {
            document.querySelector('#navigation > ul:nth-child(2) > li.nav-item.mx-2 > a > i').innerHTML = "";
        } else {
            let total = 0;
            cart.forEach(item => {
                total += item.cantidad;
            });
            document.querySelector('#navigation > ul:nth-child(2) > li.nav-item.mx-2 > a > i').innerHTML = "<span>"+total+"</span>";
        }
    }, 100);
    
    
    

}

function updateCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>There are no products in the cart.</p>';
        
        document.getElementById('total-items').innerHTML = "There are no products in the cart<br><br>";
        document.getElementById('total-price').innerHTML = `0$`;
        document.getElementById('btn-puchase').innerHTML = `<a href="${BASE_URL}?p=Shop" class="btn bg-gradient-dark">Go To Shop</a>`;
    } else {
        let total = 0;
        let build = "";

        cart.forEach(item => {
            let articleName = item.producto.length > 20
            ? item.producto.substring(0, 20) + "..."
            : item.producto;
            total += item.precio * item.cantidad;
            let eee = item.cantidad <= 1 
            ? ``
            : `<h3>x${item.cantidad} <br>${(item.precio * item.cantidad).toFixed(2)}$</h3>` ;

            cartContainer.innerHTML += `
                <div class="card m-1 col-12 col-md-5 col-lg-3">
                    <button onclick="removeArticle('${item.id}')" class="btn delete-btn"  title="Remove Article"><i class="text-primary fas fa-ban"></i></button>
                    <a href="${BASE_URL}?p=Articles&i=${item.id}"><img src="${item.img}"></a>
                    <h1>${articleName}</h1>
                    <h2>${item.precio}$</h2>
                    ${eee}
                </div>
            `;
            build += `
                <h2>${articleName} <span>x${item.cantidad}</span></h2>
            `;
        });

        document.getElementById('total-price').innerHTML = `${total.toFixed(2)}$`;
        document.getElementById('total-items').innerHTML = build;

    }


}



function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function clearCart() {
    cart = [];
    saveCartToLocalStorage(); // Guardar el carrito vacío en localStorage
    updateCart();
    document.querySelector('#navigation > ul:nth-child(2) > li.nav-item.mx-2 > a > i').innerHTML = "";
}

let data_a = JSON.parse(localStorage.getItem('cart')) || [];
if (data_a.length === 0) {
    document.querySelector("#navigation > ul:nth-child(2) > li.nav-item.mx-2 > a > i").innerHTML = "";
} else {
    let total = 0;
    data_a.forEach(item => {
        total += item.cantidad;
    });
    document.querySelector("#navigation > ul:nth-child(2) > li.nav-item.mx-2 > a > i").innerHTML = "<span>"+total+"</span>";
}



