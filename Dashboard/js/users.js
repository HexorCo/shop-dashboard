

let article_list = [];
let num = 0;

var data = new FormData();
var xhr = new XMLHttpRequest();
xhr.open('POST', BASE_URL+'?p=Users/get_list', true);
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
            let user_status = "";
            if(parseInt(x[i]['user_status']) > 0){
                user_status = "verified";
            }else{
                user_status = "unverified";
            }
            document.getElementById('pl-3').innerHTML += `
                <div class="users-item-back view-data">
                    <h1 class="Window-pop-module" hidden>View User</h1>
                    <i class="users-item-icon fad fa-user-alt"></i>        
                    <h1 class="user-email" hidden>${x[i]['user_email']}</h1>      
                    <h1 class="user-name" hidden>${x[i]['user_name']}</h1>      
                    <h1 class="user-country" hidden>${x[i]['user_country']}</h1>   
                    <h1 class="user-state" hidden>${x[i]['user_state']}</h1>      
                    <h1 class="user-adress1" hidden>${x[i]['user_adress1']}</h1>      
                    <h1 class="user-adress2" hidden>${x[i]['user_adress2']}</h1>      
                    <h1 class="user-postalcode" hidden>${x[i]['user_postalcode']}</h1>      
                    <h1 class="user-phone" hidden>${x[i]['user_phone']}</h1>     
                    <h1 class="user-status" hidden>${x[i]['user_status']}</h1>      
                    <h1 class="user-join" hidden>${x[i]['user_join']}</h1> 
                    <h1 class="users-item-title">${x[i]['user_email']}<span class="${user_status}">${user_status.toUpperCase()}</span></h1>
                    <h1 class="users-item-join">Joined: ${x[i]['user_join']}</h1>
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
            let user_status = "";
            if(parseInt(x[i]['user_status']) > 0){
                user_status = "verified";
            }else{
                user_status = "unverified";
            }
            document.getElementById('pl-3').innerHTML += `
                <div class="users-item-back view-data">
                    <h1 class="Window-pop-module" hidden>View User</h1>
                    <i class="users-item-icon fad fa-user-alt"></i>
                    <h1 class="user-email" hidden>${x[i]['user_email']}</h1>      
                    <h1 class="user-name" hidden>${x[i]['user_name']}</h1>      
                    <h1 class="user-country" hidden>${x[i]['user_country']}</h1>   
                    <h1 class="user-state" hidden>${x[i]['user_state']}</h1>      
                    <h1 class="user-adress1" hidden>${x[i]['user_adress1']}</h1>      
                    <h1 class="user-adress2" hidden>${x[i]['user_adress2']}</h1>      
                    <h1 class="user-postalcode" hidden>${x[i]['user_postalcode']}</h1>      
                    <h1 class="user-phone" hidden>${x[i]['user_phone']}</h1>     
                    <h1 class="user-status" hidden>${x[i]['user_status']}</h1>      
                    <h1 class="user-join" hidden>${x[i]['user_join']}</h1> 
                    <h1 class="users-item-title">${x[i]['user_email']}<span class="${user_status}">${user_status.toUpperCase()}</span></h1>
                    <h1 class="users-item-join">Joined: ${x[i]['user_join']}</h1>
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
            if (!x[i]["user_email"].toLowerCase().includes(this.value)) {
            }else{
                
                let user_status = "";
                if(parseInt(x[i]['user_status']) > 0){
                    user_status = "verified";
                }else{
                    user_status = "unverified";
                }
                document.getElementById('pl-3').innerHTML += `
                    <div class="users-item-back view-data">
                        <h1 class="Window-pop-module" hidden>View User</h1>
                        <i class="users-item-icon fad fa-user-alt"></i>
                        <h1 class="user-email" hidden>${x[i]['user_email']}</h1>      
                        <h1 class="user-name" hidden>${x[i]['user_name']}</h1>      
                        <h1 class="user-country" hidden>${x[i]['user_country']}</h1>   
                        <h1 class="user-state" hidden>${x[i]['user_state']}</h1>      
                        <h1 class="user-adress1" hidden>${x[i]['user_adress1']}</h1>      
                        <h1 class="user-adress2" hidden>${x[i]['user_adress2']}</h1>      
                        <h1 class="user-postalcode" hidden>${x[i]['user_postalcode']}</h1>      
                        <h1 class="user-phone" hidden>${x[i]['user_phone']}</h1>     
                        <h1 class="user-status" hidden>${x[i]['user_status']}</h1>      
                        <h1 class="user-join" hidden>${x[i]['user_join']}</h1> 
                        <h1 class="users-item-title">${x[i]['user_email']}<span class="${user_status}">${user_status.toUpperCase()}</span></h1>
                        <h1 class="users-item-join">Joined: ${x[i]['user_join']}</h1>
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