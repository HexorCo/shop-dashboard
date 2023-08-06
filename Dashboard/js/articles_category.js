

let article_list = [];
let num = 0;

var data = new FormData();
var xhr = new XMLHttpRequest();
xhr.open('POST', BASE_URL+'?p=articles/module2/get_list', true);
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
            document.getElementById('pl-2').innerHTML += `
                <div class="category-item-back view-data">     
                <h1 class="category-id" hidden>${x[i]["category_id"]}</h1>   
                <h1 class="category-name" hidden>${x[i]["category_name"]}</h1>  
                    <h1 class="Window-pop-module" hidden>View Category</h1>       
                    <i class="icon fad fa-books"></i>
                    <h1>${x[i]["category_name"]}</h1>
                    <h2>View Information</h2>
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
    document.getElementById('pl-2').innerHTML = "";
    if (this.value.length === 0) {
        for (i = 0; i < num; i++) { 
            document.getElementById('pl-2').innerHTML += `
                <div class="category-item-back view-data">     
                <h1 class="category-id" hidden>${x[i]["category_id"]}</h1>   
                <h1 class="category-name" hidden>${x[i]["category_name"]}</h1>  
                    <h1 class="Window-pop-module" hidden>View Category</h1>       
                    <i class="icon fad fa-books"></i>
                    <h1>${x[i]["category_name"]}</h1>
                    <h2>View Information</h2>
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
            if (!x[i]["category_name"].toLowerCase().includes(this.value)) {
            }else{
                
                document.getElementById('pl-2').innerHTML += `
                    <div class="category-item-back view-data">     
                    <h1 class="category-id" hidden>${x[i]["category_id"]}</h1>   
                    <h1 class="category-name" hidden>${x[i]["category_name"]}</h1>  
                        <h1 class="Window-pop-module" hidden>View Category</h1>       
                        <i class="icon fad fa-books"></i>
                        <h1>${x[i]["category_name"]}</h1>
                        <h2>View Information</h2>
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