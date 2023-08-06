

let article_list = [];
let num = 0;

var data = new FormData();
var xhr = new XMLHttpRequest();
xhr.open('POST', BASE_URL+'?p=payments/get_list', true);
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
    document.getElementById('pl-3').innerHTML = "";
    setTimeout(() => {
        for (i = 0; i < num; i++) { 
            let payment_status = "";
            if(parseInt(x[i]['invoice_status']) < 1){
                payment_status = "error";
            }else if(parseInt(x[i]['invoice_status']) < 2){
                payment_status = "waiting";
            }else if(parseInt(x[i]['invoice_status']) < 3){
                payment_status = "completed";
            }else{
                payment_status = "error";
            }
            document.getElementById('pl-3').innerHTML += `
            <div class="payment-item-back view-data">
                <i class="payment-item-icon fad fa-money-check"></i>
                <h1 class="payment-item-title">${x[i]['user_account']}<span class="${payment_status}">${payment_status.toUpperCase()}</span></h1>
                <h1 class="payment-item-article">${x[i]['invoice_product']} <span class="text-color-good" style="position:relative; font-size:15px; top:-2px;">+ ${x[i]['invoice_price']}$</span></h1>
                <i class="payment-item-btn fad fa-plus">
                    <h1 class="Window-pop-module" hidden>View Payment</h1>                  
                    <h1 class="user-account" hidden>${x[i]['user_account']}</h1>     
                    <h1 class="invoice-status" hidden>${x[i]['invoice_status']}</h1>     
                    <h1 class="invoice-promo" hidden>${x[i]['invoice_promo']}</h1>        
                    <h1 class="invoice-discount" hidden>${x[i]['invoice_discount']}</h1> 
                    <h1 class="invoice-id" hidden>${x[i]['invoice_id']}</h1>     
                    <h1 class="invoice-product" hidden>${x[i]['invoice_product']}</h1>     
                    <h1 class="invoice-price" hidden>${x[i]['invoice_price']}</h1>     
                    <h1 class="invoice-account-email" hidden>${x[i]['invoice_account_email']}</h1>     
                    <h1 class="invoice-account-id" hidden>${x[i]['invoice_account_id']}</h1>     
                    <h1 class="invoice-client-name" hidden>${x[i]['invoice_client_name']}</h1>     
                    <h1 class="invoice-payment-id" hidden>${x[i]['invoice_payment_id']}</h1>     
                    <h1 class="invoice-payment-price" hidden>${x[i]['invoice_payment_price']}</h1>     
                    <h1 class="invoice-payment-created" hidden>${x[i]['invoice_payment_created']}</h1>     
                    <h1 class="invoice-payment-updated" hidden>${x[i]['invoice_payment_updated']}</h1>     
                </i>
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



document.getElementById('search-box').onkeyup = function(event) {
    x = article_list;
    document.getElementById('pl-3').innerHTML = "";
    if (this.value.length === 0) {
        for (i = 0; i < num; i++) { 

            let payment_status = "";
            if(parseInt(x[i]['invoice_status']) < 1){
                payment_status = "error";
            }else if(parseInt(x[i]['invoice_status']) < 2){
                payment_status = "waiting";
            }else if(parseInt(x[i]['invoice_status']) < 3){
                payment_status = "completed";
            }else{
                payment_status = "error";
            }
            document.getElementById('pl-3').innerHTML += `
            <div class="payment-item-back view-data">
                <i class="payment-item-icon fad fa-money-check"></i>
                <h1 class="payment-item-title">${x[i]['user_account']}<span class="${payment_status}">${payment_status.toUpperCase()}</span></h1>
                <h1 class="payment-item-article">${x[i]['invoice_product']} <span class="text-color-good" style="position:relative; font-size:15px; top:-2px;">+ ${x[i]['invoice_price']}$</span></h1>
                <i class="payment-item-btn fad fa-plus">
                    <h1 class="Window-pop-module" hidden>View Payment</h1>                    
                    <h1 class="user-account" hidden>${x[i]['user_account']}</h1>     
                    <h1 class="invoice-status" hidden>${x[i]['invoice_status']}</h1>     
                    <h1 class="invoice-promo" hidden>${x[i]['invoice_promo']}</h1>      
                    <h1 class="invoice-discount" hidden>${x[i]['invoice_discount']}</h1> 
                    <h1 class="invoice-id" hidden>${x[i]['invoice_id']}</h1>     
                    <h1 class="invoice-product" hidden>${x[i]['invoice_product']}</h1>     
                    <h1 class="invoice-price" hidden>${x[i]['invoice_price']}</h1>     
                    <h1 class="invoice-account-email" hidden>${x[i]['invoice_account_email']}</h1>     
                    <h1 class="invoice-account-id" hidden>${x[i]['invoice_account_id']}</h1>     
                    <h1 class="invoice-client-name" hidden>${x[i]['invoice_client_name']}</h1>     
                    <h1 class="invoice-payment-id" hidden>${x[i]['invoice_payment_id']}</h1>     
                    <h1 class="invoice-payment-price" hidden>${x[i]['invoice_payment_price']}</h1>     
                    <h1 class="invoice-payment-created" hidden>${x[i]['invoice_payment_created']}</h1>     
                    <h1 class="invoice-payment-updated" hidden>${x[i]['invoice_payment_updated']}</h1>                       
                    <h1 class="user-account" hidden>${x[i]['user_account']}</h1>     
                    <h1 class="invoice-status" hidden>${x[i]['invoice_status']}</h1>     
                    <h1 class="invoice-promo" hidden>${x[i]['invoice_promo']}</h1>     
                    <h1 class="invoice-id" hidden>${x[i]['invoice_id']}</h1>     
                    <h1 class="invoice-product" hidden>${x[i]['invoice_product']}</h1>     
                    <h1 class="invoice-price" hidden>${x[i]['invoice_price']}</h1>     
                    <h1 class="invoice-account-email" hidden>${x[i]['invoice_account_email']}</h1>     
                    <h1 class="invoice-account-id" hidden>${x[i]['invoice_account_id']}</h1>     
                    <h1 class="invoice-client-name" hidden>${x[i]['invoice_client_name']}</h1>     
                    <h1 class="invoice-payment-id" hidden>${x[i]['invoice_payment_id']}</h1>     
                    <h1 class="invoice-payment-price" hidden>${x[i]['invoice_payment_price']}</h1>     
                    <h1 class="invoice-payment-created" hidden>${x[i]['invoice_payment_created']}</h1>     
                    <h1 class="invoice-payment-updated" hidden>${x[i]['invoice_payment_updated']}</h1>     
                </i>
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
            if (!x[i]["user_account"].toLowerCase().includes(this.value.toLowerCase())) {
            }else{
                
                let payment_status = "";
                if(parseInt(x[i]['invoice_status']) < 1){
                    payment_status = "error";
                }else if(parseInt(x[i]['invoice_status']) < 2){
                    payment_status = "waiting";
                }else if(parseInt(x[i]['invoice_status']) < 3){
                    payment_status = "completed";
                }else{
                    payment_status = "error";
                }
                document.getElementById('pl-3').innerHTML += `
                <div class="payment-item-back view-data">
                    <i class="payment-item-icon fad fa-money-check"></i>
                    <h1 class="payment-item-title">${x[i]['user_account']}<span class="${payment_status}">${payment_status.toUpperCase()}</span></h1>
                    <h1 class="payment-item-article">${x[i]['invoice_product']} <span class="text-color-good" style="position:relative; font-size:15px; top:-2px;">+ ${x[i]['invoice_price']}$</span></h1>
                    <i class="payment-item-btn fad fa-plus">
                        <h1 class="Window-pop-module" hidden>View Payment</h1>                    
                        <h1 class="user-account" hidden>${x[i]['user_account']}</h1>     
                        <h1 class="invoice-status" hidden>${x[i]['invoice_status']}</h1>     
                        <h1 class="invoice-promo" hidden>${x[i]['invoice_promo']}</h1>      
                        <h1 class="invoice-discount" hidden>${x[i]['invoice_discount']}</h1>   
                        <h1 class="invoice-promo" hidden>${x[i]['invoice_discount']}</h1> 
                        <h1 class="invoice-id" hidden>${x[i]['invoice_id']}</h1>     
                        <h1 class="invoice-product" hidden>${x[i]['invoice_product']}</h1>     
                        <h1 class="invoice-price" hidden>${x[i]['invoice_price']}</h1>     
                        <h1 class="invoice-account-email" hidden>${x[i]['invoice_account_email']}</h1>     
                        <h1 class="invoice-account-id" hidden>${x[i]['invoice_account_id']}</h1>     
                        <h1 class="invoice-client-name" hidden>${x[i]['invoice_client_name']}</h1>     
                        <h1 class="invoice-payment-id" hidden>${x[i]['invoice_payment_id']}</h1>     
                        <h1 class="invoice-payment-price" hidden>${x[i]['invoice_payment_price']}</h1>     
                        <h1 class="invoice-payment-created" hidden>${x[i]['invoice_payment_created']}</h1>     
                        <h1 class="invoice-payment-updated" hidden>${x[i]['invoice_payment_updated']}</h1>     
                    </i>
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

try {
    document.querySelectorAll('.view-data').forEach(btn => {
        btn.addEventListener('click', e => {    
            window_events(e.target.querySelector('.Window-pop-module').innerHTML,e) 
        });
    })
}catch (e){

}