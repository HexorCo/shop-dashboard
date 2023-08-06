

let article_list = [];
let num = 0;

var data = new FormData();
var xhr = new XMLHttpRequest();
xhr.open('POST', BASE_URL+'?p=articles/module3/get_list', true);
xhr.onload = function () {
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.responseText, 'text/html');
    article_list = JSON.parse(doc.getElementById('text-msg').textContent);
    num = doc.getElementById('total').textContent;
};
xhr.send();





document.getElementById('delete-search').addEventListener('click', e=>{
    document.getElementById('search-box').value = "";
    x = article_list;
    document.getElementById('pl-2').innerHTML = "";
    setTimeout(() => {
        for (i = 0; i < num; i++) { 
            discount = "";
            if(x[i]["promo_limits"] > 0){
                discount = x[i]["promo_used"]+" / "+x[i]["promo_limits"]; 
            }else{
                discount = x[i]["promo_used"]+" / UNLIMITED";
            }
            document.getElementById('pl-2').innerHTML += `
                <div class="category-item-back view-data">    
                    <h1 class="Window-pop-module" hidden>View Promo</h1>    
                    <h1 class="promo-id" hidden>${x[i]["promo_id"]}</h1>   
                    <h1 class="promo-name" hidden>${x[i]["promo_name"]}</h1>     
                    <h1 class="promo-discount" hidden>${x[i]["promo_discount"]}</h1>     
                    <h1 class="promo-limit" hidden>${x[i]["promo_limits"]}</h1>     
                    <i class="fas fa-barcode"></i>
                    <h1>${x[i]["promo_name"]} <span>${x[i]["promo_discount"]}%</span></h1>
                    <h2>Used: ${discount}</h2>
                </div>
            `;     
        
            try {
                document.querySelectorAll('.view-data').forEach(btn => {
                    btn.addEventListener('click', e => {    
                        window_events(e.target.querySelector('.Window-pop-module').innerHTML,e) 
                    });
                })
            }catch (e){
            
            }
        }
    }, 10);
  
})

try {
    document.querySelectorAll('.view-data').forEach(btn => {
        btn.addEventListener('click', e => {    
            window_events(e.target.querySelector('.Window-pop-module').innerHTML,e) 
        });
    })
}catch (e){

}










document.getElementById('search-box').onkeyup = function(event) {
    x = article_list;
    document.getElementById('pl-2').innerHTML = "";
    if (this.value.length === 0) {
        for (i = 0; i < num; i++) { 
            discount = "";
            if(x[i]["promo_limits"] > 0){
                discount = x[i]["promo_used"]+" / "+x[i]["promo_limits"]; 
            }else{
                discount = x[i]["promo_used"]+" / UNLIMITED";
            }
            document.getElementById('pl-2').innerHTML += `
                <div class="category-item-back view-data">    
                    <h1 class="Window-pop-module" hidden>View Promo</h1>    
                    <h1 class="promo-id" hidden>${x[i]["promo_id"]}</h1>   
                    <h1 class="promo-name" hidden>${x[i]["promo_name"]}</h1>     
                    <h1 class="promo-discount" hidden>${x[i]["promo_discount"]}</h1>     
                    <h1 class="promo-limit" hidden>${x[i]["promo_limits"]}</h1>     
                    <i class="fas fa-barcode"></i>
                    <h1>${x[i]["promo_name"]} <span>${x[i]["promo_discount"]}%</span></h1>
                    <h2>Used: ${discount}</h2>
                </div>
            `;     
            try {
                document.querySelectorAll('.view-data').forEach(btn => {
                    btn.addEventListener('click', e => {    
                        window_events(e.target.querySelector('.Window-pop-module').innerHTML,e) 
                    });
                })
            }catch (e){
            
            }
        }
    }else{
        for (i = 0; i < num; i++) { 
            if (!x[i]["promo_name"].toLowerCase().includes(this.value)) {
            }else{
                discount = "";
                if(x[i]["promo_limits"] > 0){
                    discount = x[i]["promo_used"]+" / "+x[i]["promo_limits"]; 
                }else{
                    discount = x[i]["promo_used"]+" / UNLIMITED";
                }
                document.getElementById('pl-2').innerHTML += `
                    <div class="category-item-back view-data">    
                        <h1 class="Window-pop-module" hidden>View Promo</h1>    
                        <h1 class="promo-id" hidden>${x[i]["promo_id"]}</h1>   
                        <h1 class="promo-name" hidden>${x[i]["promo_name"]}</h1>     
                        <h1 class="promo-discount" hidden>${x[i]["promo_discount"]}</h1>     
                        <h1 class="promo-limit" hidden>${x[i]["promo_limits"]}</h1>     
                        <i class="fas fa-barcode"></i>
                        <h1>${x[i]["promo_name"]} <span>${x[i]["promo_discount"]}%</span></h1>
                        <h2>Used: ${discount}</h2>
                    </div>
                `;     
            }
            try {
                document.querySelectorAll('.view-data').forEach(btn => {
                    btn.addEventListener('click', e => {    
                        window_events(e.target.querySelector('.Window-pop-module').innerHTML,e) 
                    });
                })
            }catch (e){
            
            }
        }
    }
}

