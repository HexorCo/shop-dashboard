
const xhr = new XMLHttpRequest();
xhr.open('GET', BASE_URL+'?p=shop/get_articles', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const articles = JSON.parse(xhr.responseText.replace(`</body></html>`,''));
            draw_article(articles);
        } else {
            console.error('Error en la solicitud:', xhr.status);
        }
    }
};xhr.send();

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', BASE_URL+'?p=shop/get_category', true);
xhr2.onreadystatechange = function () {
    if (xhr2.readyState === XMLHttpRequest.DONE) {
        if (xhr2.status === 200) {
            const category = JSON.parse(xhr2.responseText.replace(`</body></html>`,''));
            draw_category(category);
        } else {
            console.error('Error en la solicitud:', xhr2.status);
        }
    }
};xhr2.send();

const category_back = document.querySelector('#back-category');
const shop_back = document.querySelector('#back-shop');

const urlParams = new URLSearchParams(window.location.search);
const get_category = urlParams.get('category') ?? "";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function draw_category(category) {
    category_back.innerHTML = "";
    category.sort((a, b) => a.category_name.localeCompare(b.category_name, 'en', { sensitivity: 'base' }));
    if(get_category != ""){
        category_back.innerHTML += `<a href="${BASE_URL}?p=Shop">ALL CATEGORY<a>`;
        for (let i = 0; i < category.length; i++) {
            if((category[i].category_name).toLowerCase() != (get_category).toLowerCase()){
                category_back.innerHTML += `<a href="${BASE_URL}?p=Shop&category=${(category[i].category_name).toUpperCase()}">${(category[i].category_name).toUpperCase()}<a>`;
            }
        }
    }else{
        for (let i = 0; i < category.length; i++) {
            category_back.innerHTML += `<a href="${BASE_URL}?p=Shop&category=${(category[i].category_name).toUpperCase()}">${(category[i].category_name).toUpperCase()}<a>`;
        }
    }
}
function draw_article(articles) {
    shop_back.innerHTML = "";
    if(get_category != ""){
        for (let i = 0; i < articles.length; i++) {
            if((articles[i].article_category).toLowerCase() == (get_category).toLowerCase()){

                let img = articles[i].article_img == "img/shop/" ? '<img style="height:200px; width:100%;" src="img/none.png"  class="img-fluid border-radius-lg">': '<img style="height:200px; width:100%;  object-fit: cover; "  src="'+articles[i].article_img+'" class="img-fluid border-radius-lg shadow">'; 
                let aa = articles[i].article_name.length > 20
                ? articles[i].article_name.substring(0, 20) + "..."
                : articles[i].article_name;
    
                let add = parseInt(articles[i].article_stock) > 0 
                ? `<button class="p-animation btn btn-outline-dark mb-0" onclick="addToCart('${articles[i].article_id}','${articles[i].article_name}', '${articles[i].article_price}','${articles[i].article_img}')">Add to cart</button>`
                : `<button  class="p-animation btn btn-outline-dark mb-0"  disabled>SOLD</button>`;
                
                shop_back.innerHTML += `
                    <div class="col-lg-4 mb-lg-0">
                        <div class="card">
                            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                <a href="${BASE_URL}?p=Articles&i=${articles[i].article_id}&b=${get_category.toLocaleUpperCase()}" class="d-block">
                                ${img}
                                </a>
                            </div>
                            <div class="card-body pt-3">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="text-sm">${capitalizeFirstLetter((articles[i].article_category).toLowerCase())}</span>
                                        <h4 class="card-description font-weight-bolder text-dark mb-4">
                                        ${capitalizeFirstLetter(aa)}</h4>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <h5 class="mb-0 font-weight-bolder">$${articles[i].article_price}</h5>
                                </div>
                                ${add} <a class="btn-custom" href="${BASE_URL}?p=Cart">View Cart</a>
                            </div>
                        </div>
                    </div>
                `;
        
        
                
            }
        }
    }else{
        for (let i = 0; i < articles.length; i++) {
            let img = articles[i].article_img == "img/shop/" ? '<img style="height:200px; width:100%;" src="img/none.png"  class="img-fluid border-radius-lg">': '<img style="height:200px; width:100%;  object-fit: cover; "  src="'+articles[i].article_img+'" class="img-fluid border-radius-lg shadow">'; 
            let aa = articles[i].article_name.length > 20
            ? articles[i].article_name.substring(0, 20) + "..."
            : articles[i].article_name;
    
            let add = parseInt(articles[i].article_stock) > 0 
            ? `<button class="p-animation btn btn-outline-dark mb-0" onclick="addToCart('${articles[i].article_id}','${articles[i].article_name}', '${articles[i].article_price}','${articles[i].article_img}')">Add to cart</button>`
            : `<button  class="p-animation btn btn-outline-dark mb-0"  disabled>SOLD</button>`;
            
            shop_back.innerHTML += `
                <div class="col-lg-4 mb-lg-0 ">
                    <div class="card">
                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                            <a href="${BASE_URL}?p=Articles&i=${articles[i].article_id}" class="d-block">
                            ${img}
                            </a>
                        </div>
                        <div class="card-body pt-3">
                            <div class="d-flex align-items-center">
                                <div>
                                    <span class="text-sm">${capitalizeFirstLetter((articles[i].article_category).toLowerCase())}</span>
                                    <h4 class="card-description font-weight-bolder text-dark mb-4">
                                    ${capitalizeFirstLetter(aa)}</h4>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <h5 class="mb-0 font-weight-bolder">$${articles[i].article_price}</h5>
                            </div>
                            ${add} <a class="btn-custom" href="${BASE_URL}?p=Cart">View Cart</a>
                        </div>
                    </div>
                </div>
            `;
        }

    }
    addListenerToButtons();
}

function addListenerToButtons() {
    var buttons = document.querySelectorAll('.p-animation'); // Seleccionar todos los botones con la clase 'p-animation'
    buttons.forEach(function(button) {
        button.addEventListener('click', (e) =>{
            e.target.innerHTML = "Added To Cart";
            e.target.setAttribute('disabled',true)
            setTimeout(() => {
                e.target.innerHTML = "Add To Cart";
                e.target.removeAttribute('disabled')
            }, 1000);
        });
    });
}


