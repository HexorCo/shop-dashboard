

let article_list = [];
let num = 0;

var data = new FormData();
var xhr = new XMLHttpRequest();
xhr.open('POST', BASE_URL+'?p=articles/module1/get_list', true);
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
            f_stock = "";
            if(parseInt(x[i]["article_stock"]) < 1){
                f_stock = "SOLD";
            }else{
                f_stock = x[i]["article_stock"];
            }
            let imgee ="";

            if(x[i]["article_img"] != "img/shop/"){
                imgee = '<img class="imagen-article" src="./'+x[i]["article_img"]+'">';
            }else{
                imgee = '<i class="icon fad fa-boot"></i>';
            }
            
            document.getElementById('pl-2').innerHTML += `
                <div class="article-item-back view-data"> 
                    <h1 class="article-id" hidden>${x[i]["article_id"]}</h1>  
                    <h1 class="article-name" hidden>${x[i]["article_name"]}</h1>  
                    <h1 class="article-price" hidden>${x[i]["article_price"]}</h1>  
                    <h1 class="article-desc" hidden>${x[i]["article_desc"]}</h1>  
                    <h1 class="article-stock" hidden>${x[i]["article_stock"]}</h1>  
                    <h1 class="article-img" hidden>${x[i]["article_img"]}</h1>  
                    <h1 class="article-category" hidden>${x[i]["article_category"]}</h1> 
                    <h1 class="Window-pop-module" hidden>View Article</h1>          
                    ${imgee}
                    <h2>${x[i]["article_price"]} <i class="fad fa-usd-circle"></i></h2> 
                    <h3>${f_stock} <i class="fad fa-boxes"></i></h3>
                    <h1>${x[i]["article_name"].length > 17 ?  x[i]["article_name"].substring(0, 17)+"..." : x[i]["article_name"]}</h1>
                    <p>${x[i]["article_desc"].length > 17 ?  x[i]["article_desc"].substring(0, 17)+"..." : x[i]["article_desc"]}</p>
                
                    <h4>#${(x[i]["article_category"]).toUpperCase()}</h4></div>   
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
    document.getElementById('pl-2').innerHTML = "";
    if (this.value.length === 0) {
        for (i = 0; i < num; i++) { 
            f_stock = "";
            if(x[i]["article_stock"] < 1){
                f_stock = "SOLD";
            }else{
                f_stock = x[i]["article_stock"];
            }
            let imgee ="";

            if(x[i]["article_img"] != "img/shop/"){
                imgee = '<img class="imagen-article" src="./'+x[i]["article_img"]+'">';
            }else{
                imgee = '<i class="icon fad fa-boot"></i>';
            }
            
            $a = x[i]["article_name"].length > 17 ?  x[i]["article_name"].substring(0, 17)+"..." : x[i]["article_name"];
            document.getElementById('pl-2').innerHTML += `
                <div class="article-item-back view-data"> 
                    <h1 class="article-id" hidden>${x[i]["article_id"]}</h1>  
                    <h1 class="article-name" hidden>${x[i]["article_name"]}</h1>  
                    <h1 class="article-price" hidden>${x[i]["article_price"]}</h1>  
                    <h1 class="article-desc" hidden>${x[i]["article_desc"]}</h1>  
                    <h1 class="article-stock" hidden>${x[i]["article_stock"]}</h1>  
                    <h1 class="article-img" hidden>${x[i]["article_img"]}</h1>  
                    <h1 class="article-category" hidden>${x[i]["article_category"]}</h1> 
                    <h1 class="Window-pop-module" hidden>View Article</h1>          
                    ${imgee}
                    <h2>${x[i]["article_price"]} <i class="fad fa-usd-circle"></i></h2> 
                    <h3>${f_stock} <i class="fad fa-boxes"></i></h3>
                    <h1>${x[i]["article_name"].length > 17 ?  x[i]["article_name"].substring(0, 17)+"..." : x[i]["article_name"]}</h1>
                    <p>${x[i]["article_desc"].length > 17 ?  x[i]["article_desc"].substring(0, 17)+"..." : x[i]["article_desc"]}</p>
                    <h4>#${(x[i]["article_category"]).toUpperCase()}</h4></div>   
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
            if (!x[i]["article_name"].toLowerCase().includes(this.value)) {
            }else{
                f_stock = "";
                if(x[i]["article_stock"] < 1){
                    f_stock = "SOLD";
                }else{
                    f_stock = x[i]["article_stock"];
                }
                // console.log(x[i].name)
                let imgee ="";

                if(x[i]["article_img"] != "img/shop/"){
                    imgee = '<img class="imagen-article" src="./'+x[i]["article_img"]+'">';
                }else{
                    imgee = '<i class="icon fad fa-boot"></i>';
                }
                
                document.getElementById('pl-2').innerHTML += `
                    <div class="article-item-back view-data"> 
                    <h1 class="article-id" hidden>${x[i]["article_id"]}</h1>  
                    <h1 class="article-name" hidden>${x[i]["article_name"]}</h1>  
                    <h1 class="article-price" hidden>${x[i]["article_price"]}</h1>  
                    <h1 class="article-desc" hidden>${x[i]["article_desc"]}</h1>  
                    <h1 class="article-stock" hidden>${x[i]["article_stock"]}</h1>  
                    <h1 class="article-img" hidden>${x[i]["article_img"]}</h1>  
                    <h1 class="article-category" hidden>${x[i]["article_category"]}</h1> 
                        <h1 class="Window-pop-module" hidden>View Article</h1>          
                        ${imgee}
                        <h2>${x[i]["article_price"]} <i class="fad fa-usd-circle"></i></h2> 
                        <h3>${f_stock} <i class="fad fa-boxes"></i></h3>
                        <h1>${x[i]["article_name"].length > 17 ?  x[i]["article_name"].substring(0, 17)+"..." : x[i]["article_name"]}</h1>
                        <p>${x[i]["article_desc"].length > 17 ?  x[i]["article_desc"].substring(0, 17)+"..." : x[i]["article_desc"]}</p>
                    
                        <h4>#${(x[i]["article_category"]).toUpperCase()}</h4></div>    
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