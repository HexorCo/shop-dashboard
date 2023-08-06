let alert_  = document.getElementById('alert');
let notification_active = false;
let notification_timer = 0;
function notification(type,data) {
    alert_.classList.add('alert-show')
    notification_timer = 23;
    notification_active = true;
    if(type == "Alert:ERROR"){
        alert_.innerHTML = `<i class="fad fa-times-circle"></i>
        <h1>${data}</1h>`;
        alert_.style.background = "#A5104CFF";
    }else if(type == "Alert:GOOD"){
        alert_.innerHTML = `<i class="fad fa-badge-check"></i>
        <h1>${data}</1h>`;
        alert_.style.background = "#379100FF";
    }else if(type == "Alert:WARNING"){
        alert_.innerHTML = `<i class="fad fa-exclamation-triangle"></i>
        <h1>${data}</1h>`;
        alert_.style.background = "#FF9100FF";
    }
}
setInterval(() => {
    if(notification_active){
        if(notification_timer < 1){
            alert_.classList.remove('alert-show');
            notification_active = false;
        }else{
            notification_timer--;
        }    
    }
}, 100);
function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}
let nav_status = false;
try {  
    document.getElementById('nav-status').addEventListener('click', e =>{
        if(nav_status){
            nav_status = false;
            document.getElementById('navbar-back').classList.remove('visible-nav')
            document.getElementById('back-dark').classList.remove('visible-dark')
        }else{
            nav_status = true;
            document.getElementById('navbar-back').classList.add('visible-nav')
            document.getElementById('back-dark').classList.add('visible-dark')
        }
    })
    document.getElementById('extranav').addEventListener('click', e =>{
        if(nav_status){
            nav_status = false;
            document.getElementById('navbar-back').classList.remove('visible-nav')
            document.querySelector('#extranav i').style.transform = 'rotate(0deg)';
            document.getElementById('back-dark').classList.remove('visible-dark')
        }else{
            nav_status = true;
            document.getElementById('navbar-back').classList.add('visible-nav')
            document.querySelector('#extranav i').style.transform = 'rotate(180deg)';
            document.getElementById('back-dark').classList.add('visible-dark')
        }
    })
} catch (error) {
    
}


function isInputNumber(evt){
                
    var ch = String.fromCharCode(evt.which);
    
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
    
}
function isInputNumberLimit(evt,number){
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }else if(evt.target.value + ch > number){
        evt.preventDefault();
    }
}


let category_list = [];
let numm = 0;
let category_build ="";

var xhree = new XMLHttpRequest();
xhree.open('POST', BASE_URL+'?p=articles/module2/get_list', true);
xhree.onload = function () {
    var parser = new DOMParser();
    var doc = parser.parseFromString(this.responseText, 'text/html');
    category_list = JSON.parse(doc.getElementById('text-msg').textContent);
    numm = doc.getElementById('total').textContent;
    category_build = "";
    for (let i_ = 0; i_ < numm; i_++) {
        category_build += `<option value="${(category_list[i_]['category_name']).toLowerCase()}">${(category_list[i_]['category_name']).toUpperCase()}</option>`;
    } 
};
xhree.send();



function window_events(title,data) {
    document.getElementById('window-pop-dark').classList.add('visible-window-info');
    document.getElementById('window-pop').classList.add('visible-window-info');
    document.querySelectorAll('.window-pop-btn-close').forEach(btn => {
        btn.addEventListener('click', e => {
            document.getElementById('window-pop-dark').classList.remove('visible-window-info');
            document.getElementById('window-pop').classList.remove('visible-window-info');
        });
    })
    document.querySelector('#window-pop .window-pop-title-back .window-pop-title').textContent = title;
    window_pop_body = document.querySelector('#window-pop .window-pop-items-back');

   
    
    switch (title) {
        case "Add New Article":
            window_pop_body.innerHTML = `
                <form id="window-pop-form" action="${BASE_URL}?p=articles/module1/add" method="POST" enctype="multipart/form-data"> 
                    <div class="text-box">
                        <i class="icon fad fa-dice-d20"><div class="line"></div></i>
                        <input type="text" id="article-name" name="article-name" placeholder="Article Name" maxlength="50">
                    </div>
                    <div class="text-box" style="margin-top:55px;">
                        <i class="icon fad fa-comment-alt"><div class="line"></div></i>
                        <input type="text" id="article-desc" name="article-desc" placeholder="Description"  maxlength="50">
                    </div>
                    <div class="text-box" style="margin-top:110px; width:44%;">
                        <i class="icon fad fa-usd-circle"><div class="line"></div></i>
                        <input type="text" id="article-price" name="article-price" onkeypress="isInputNumber(event)" placeholder="Price" maxlength="8">
                    </div>
                    <div class="text-box" style="margin-left:45%; margin-top:110px; width:45%;">
                        <i class="icon fad fa-boxes"><div class="line"></div></i>
                        <input type="text" id="article-stock" name="article-stock" onkeypress="isInputNumber(event)" placeholder="Stock (0 = SOLD)"  maxlength="7">
                    </div>
                    
                    <div class="text-select">
                        <i class="icon fad fa-books"><div class="line"></div></i>
                        <select id="selectedLanguage" name="selectedLanguage">
                            <option value="none">Category</option>
                            ${category_build}
                        </select>
                    </div>

                    <div class="text-file">
                        <h1>Image of Article (PNG / MAX 3MB)</h1>
                        <input type="file" name="image" id="imageInput" accept=".png">
                    </div>
                    <div id="Create-Category" class="window-pop-btn">Create</div>
                </form>
            `;
            setTimeout(() => {
                document.getElementById('Create-Category').addEventListener('click', e=>{
                    if(document.getElementById('article-price').value == "" && document.getElementById('article-name').value == ""){
                        notification('Alert:ERROR',"Insert Article Information")
                    }else if(document.getElementById('article-name').value == ""){
                        notification('Alert:WARNING',"Insert Article Name")
                    }else if(document.getElementById('article-price').value == ""){
                        notification('Alert:WARNING',"Insert Article Price")
                    }else{
                        document.querySelector("#window-pop-form").submit();
                    }
                });
            }, 100);
            break;
            
        case "Add New Category":
            window_pop_body.innerHTML = `
                <form id="window-pop-form" action="${BASE_URL}?p=articles/module2/add" method="POST" enctype="multipart/form-data">
                    <div class="text-box">
                        <i class="icon fad fa-books"><div class="line"></div></i>
                        <input id="category-name" name="category-name" type="text" placeholder="Category Name" maxlength="20">
                    </div>
                    <div style="margin-top:90px;" class="text-file">
                        <h1>Image of Category (PNG / MAX 3MB)</h1>
                        <input type="file" name="image" id="imageInput" accept=".png">
                    </div>
                    <div id="Create-Category" class="window-pop-btn">Create</div>
                </form>
            `;
            setTimeout(() => {
                document.getElementById('Create-Category').addEventListener('click', e=>{
                    if(document.getElementById('category-name').value == ""){
                        notification('Alert:ERROR',"Insert Category Name")
                    }else{
                        document.querySelector("#window-pop-form").submit();
                    }
                });
            }, 100);
            break;  
        case "Add New Promo":
                window_pop_body.innerHTML = `
                    <form id="window-pop-form" action="${BASE_URL}?p=articles/module3/add" method="POST">
                        <div class="text-box">
                            <i class="icon fad fa-qrcode"><div class="line"></div></i>
                            <input id="promo-name" name="promo-name" type="text" placeholder="Promo Code Name" maxlength="50">
                        </div>
                        <div class="text-box" style="margin-top:55px;">
                            <i class="icon fad fa-percentage"><div class="line"></div></i>
                            <input id="promo-discount" name="promo-discount" type="text" onkeypress="isInputNumberLimit(event,99)" placeholder="Discount % (1 to 99)">
                        </div>
                        <div class="text-box" style="margin-top:110px;">
                            <i class="icon fad fa-sort-numeric-down"><div class="line"></div></i>
                            <input id="promo-limit" name="promo-limit" type="text" onkeypress="isInputNumber(event)" placeholder="Limit (0 = UNLIMITED)">
                        </div>
                        <div id="Create-promo" class="window-pop-btn">Create</div>
                    </form>
                `;
                setTimeout(() => {
                    document.getElementById('Create-promo').addEventListener('click', e=>{
                        if(document.getElementById('promo-name').value == "" && document.getElementById('promo-discount').value == ""){
                            notification('Alert:ERROR',"Insert Information")
                        }else if(document.getElementById('promo-name').value == ""){
                            notification('Alert:WARNING',"Insert Promo Code Name")
                        }else if(document.getElementById('promo-discount').value == ""){
                            notification('Alert:WARNING',"Insert Discount")
                        }else{
                            document.querySelector("#window-pop-form").submit();
                        }
                    });
                }, 100);
            break;
        case "View Article":
            window_pop_body.innerHTML = `
                <div class="text-box">
                    <i class="icon fad fa-dice-d20"><div class="line"></div></i>
                    <input type="text" placeholder="Article Name" disabled="true"; value="${data.target.querySelector('.article-name').textContent}">
                </div>
                <div class="text-box" style="margin-top:55px;">
                    <i class="icon fad fa-comment-alt"><div class="line"></div></i>
                    <input type="text" placeholder="Description" disabled="true"; value="${data.target.querySelector('.article-desc').textContent}">
                </div>
                <div class="text-box" style="margin-top:110px; width:44%;">
                    <i class="icon fad fa-usd-circle"><div class="line"></div></i>
                    <input type="text" onkeypress="isInputNumber(event)" placeholder="Price" disabled="true"; value="${data.target.querySelector('.article-price').textContent}">
                </div>
                <div class="text-box" style="margin-left:45%; margin-top:110px; width:45%;">
                    <i class="icon fad fa-boxes"><div class="line"></div></i>
                    <input type="text" onkeypress="isInputNumber(event)" placeholder="Stock (0 = SOLD)" disabled="true"; value="${data.target.querySelector('.article-stock').textContent}">
                </div>

                <div class="text-select" >
                    <i class="icon fad fa-books"><div class="line"></div></i>
                    <select id="languageSelect"disabled="true";>
                        <option value="none">${data.target.querySelector('.article-category').textContent}</option>
                    </select>
                </div>


                <div id="Edit-Article" class="window-pop-btn">Edit</div>
            `;
            setTimeout(() => {
                document.getElementById('Edit-Article').addEventListener('click', e=>{
                    window_events("Edit Article",data);
                });
            }, 100);
            break;
        case "View Category":
            window_pop_body.innerHTML = `
                <div class="text-box">
                    <i class="icon fad fa-books"><div class="line"></div></i>
                    <input id="category-name" name="category-name" type="text" placeholder="Category Name" disabled="true"; value="${data.target.querySelector('.category-name').textContent}">
                </div>
                <div id="Edit-Category" class="window-pop-btn">Edit</div>
            `;
            setTimeout(() => {
                document.getElementById('Edit-Category').addEventListener('click', e=>{
                    window_events("Edit Category",data);
                });
            }, 100);
            break;
        case "View Promo":
            window_pop_body.innerHTML = `
                <div class="text-box">
                    <i class="icon fad fa-qrcode"><div class="line"></div></i>
                    <input id="promo-name" name="promo-name" type="text" placeholder="Promo Code Name" disabled="true"; value="${data.target.querySelector('.promo-name').textContent}">
                </div>
                <div class="text-box" style="margin-top:55px;">
                    <i class="icon fad fa-percentage"><div class="line"></div></i>
                    <input id="promo-discount" name="promo-discount" type="text" onkeypress="isInputNumberLimit(event,99)" placeholder="Discount % (1 to 99)" disabled="true"; value="${data.target.querySelector('.promo-discount').textContent}">
                </div>
                <div class="text-box" style="margin-top:110px;">
                    <i class="icon fad fa-sort-numeric-down"><div class="line"></div></i>
                    <input id="promo-limit" name="promo-limit" type="text" onkeypress="isInputNumber(event)" placeholder="Limit (0 = UNLIMITED)" disabled="true"; value="${data.target.querySelector('.promo-limit').textContent}">
                </div>
                <div id="Edit-Promo" class="window-pop-btn">Edit</div>
            `;
            setTimeout(() => {
                document.getElementById('Edit-Promo').addEventListener('click', e=>{
                    window_events("Edit Promo",data);
                });
            }, 100);
            break;
        case "Edit Article":
            window_pop_body.innerHTML = `
                <form id="window-pop-form" action="${BASE_URL}?p=articles/module1/edit" method="POST" enctype="multipart/form-data">
                <input id="article-id" name="article-id" value = "${data.target.querySelector('.article-id').textContent}" hidden>
                    <input id="article-img" name="article-img" value = "${data.target.querySelector('.article-img').textContent}" hidden>
                    <div class="text-box">
                        <i class="icon fad fa-dice-d20"><div class="line"></div></i>
                        <input type="text" id="article-name" name="article-name" placeholder="Article Name" value="${data.target.querySelector('.article-name').textContent}" maxlength="50">
                    </div>
                    <div class="text-box" style="margin-top:55px;">
                        <i class="icon fad fa-comment-alt"><div class="line"></div></i>
                        <input type="text"" id="article-desc" name="article-desc" placeholder="Description" value="${data.target.querySelector('.article-desc').textContent}" maxlength="50">
                    </div>
                    <div class="text-box" style="margin-top:110px; width:44%;">
                        <i class="icon fad fa-usd-circle"><div class="line"></div></i>
                        <input type="text" id="article-price" name="article-price" onkeypress="isInputNumber(event)" placeholder="Price" value="${data.target.querySelector('.article-price').textContent}" maxlength="8">
                    </div>
                    <div class="text-box" style="margin-left:45%; margin-top:110px; width:45%;">
                        <i class="icon fad fa-boxes"><div class="line"></div></i>
                        <input type="text" id="article-stock" name="article-stock" onkeypress="isInputNumber(event)" placeholder="Stock (0 = SOLD)" value="${data.target.querySelector('.article-stock').textContent}" maxlength="8">
                    </div>


                    <div class="text-select">
                        <i class="icon fad fa-books"><div class="line"></div></i>
                        <select id="selectedLanguage" name="selectedLanguage">
                            <option value="${data.target.querySelector('.article-category').textContent}">${data.target.querySelector('.article-category').textContent}</option>
                            ${category_build}
                        </select>
                    </div>

                    <div class="text-file">
                        <h1>Image of Article (PNG / MAX 3MB)</h1>
                        <input type="file" name="image" id="imageInput" accept=".png">
                    </div>


                    <div id="Edit-Category" class="window-pop-btn">Save</div>
                </form>
                <form id="window-pop-form-delete" action="${BASE_URL}?p=articles/module1/delete" method="POST">
                    <input id="article-id" name="article-id" value = "${data.target.querySelector('.article-id').textContent}" hidden>
                    <div id="Delete-article" style="left:35px !important; width:50px; " class="window-pop-btn">Delete</div>
                </form>
            `;
            setTimeout(() => {
                document.getElementById('Edit-Category').addEventListener('click', e=>{
                    if(document.getElementById('article-price').value == "" && document.getElementById('article-name').value == ""){
                        notification('Alert:ERROR',"Insert Article Information")
                    }else if(document.getElementById('article-name').value == ""){
                        notification('Alert:WARNING',"Insert Article Name")
                    }else if(document.getElementById('article-price').value == ""){
                        notification('Alert:WARNING',"Insert Article Price")
                    }else{
                        document.querySelector("#window-pop-form").submit();
                    }
                });
                document.getElementById('Delete-article').addEventListener('click', e=>{
                    document.querySelector("#window-pop-form-delete").submit();
                });
            }, 100);
            break;
        case "Edit Category":
            window_pop_body.innerHTML = `
                <form id="window-pop-form" action="${BASE_URL}?p=articles/module2/edit" method="POST" enctype="multipart/form-data">
                    <input id="category-id" name="category-id" value = "${data.target.querySelector('.category-id').textContent}" hidden>
                    <div class="text-box">
                        <i class="icon fad fa-books"><div class="line"></div></i>
                        <input id="category-name" name="category-name" type="text" placeholder="Category Name" value="${data.target.querySelector('.category-name').textContent}" maxlength="20">
                    </div>
                    <div style="margin-top:90px;" class="text-file">
                        <h1>Image of Category (PNG / MAX 3MB)</h1>
                        <input type="file" name="image" id="imageInput" accept=".png">
                    </div>
                    <div id="category-save" class="window-pop-btn">Save</div>
                </form>
                <form id="window-pop-form-delete" action="${BASE_URL}?p=articles/module2/delete" method="POST">
                    <input id="category-id" name="category-id" value = "${data.target.querySelector('.category-id').textContent}" hidden>
                    <div id="Delete-category" style="left:35px !important; width:50px; " class="window-pop-btn">Delete</div>
                </form>
            `;
            setTimeout(() => {
                document.getElementById('category-save').addEventListener('click', e=>{

                    if(document.getElementById('category-name').value == ""){
                        notification('Alert:ERROR',"Insert Category Name")
                    }else{
                        document.querySelector("#window-pop-form").submit();
                    }
                });
                document.getElementById('Delete-category').addEventListener('click', e=>{
                    document.querySelector("#window-pop-form-delete").submit();
                });
            }, 100);
            break; 
        case "Edit Promo":
            window_pop_body.innerHTML = `
                <form id="window-pop-form" action="${BASE_URL}?p=articles/module3/edit" method="POST">
                    <input id="promo-id" name="promo-id" value = "${data.target.querySelector('.promo-id').textContent}" hidden>
                    <div class="text-box">
                        <i class="icon fad fa-qrcode"><div class="line"></div></i>
                        <input id="promo-name" name="promo-name" type="text" placeholder="Promo Code Name" value="${data.target.querySelector('.promo-name').textContent}" maxlength="50">
                    </div>
                    <div class="text-box" style="margin-top:55px;">
                        <i class="icon fad fa-percentage"><div class="line"></div></i>
                        <input id="promo-discount" name="promo-discount" type="text" onkeypress="isInputNumberLimit(event,99)" placeholder="Discount % (1 to 99)" value="${data.target.querySelector('.promo-discount').textContent}" maxlength="50">
                    </div>
                    <div class="text-box" style="margin-top:110px;">
                        <i class="icon fad fa-sort-numeric-down"><div class="line"></div></i>
                        <input id="promo-limit" name="promo-limit" type="text" onkeypress="isInputNumber(event)" placeholder="Limit (0 = UNLIMITED)" value="${data.target.querySelector('.promo-limit').textContent}" maxlength="8">
                    </div>
                    <div id="Save-Promo" class="window-pop-btn">Save</div>
                </form>
                <form id="window-pop-form-delete" action="${BASE_URL}?p=articles/module3/delete" method="POST">
                    <input id="promo-id" name="promo-id" value = "${data.target.querySelector('.promo-id').textContent}" hidden>
                    <div id="Delete-Promo" style="left:35px !important; width:50px; " class="window-pop-btn">Delete</div>
                </form>
            `;
        setTimeout(() => {
            document.getElementById('Save-Promo').addEventListener('click', e=>{
                if(document.getElementById('promo-name').value == "" && document.getElementById('promo-discount').value == ""){
                    notification('Alert:ERROR',"Insert Information")
                }else if(document.getElementById('promo-name').value == ""){
                    notification('Alert:WARNING',"Insert Promo Code Name")
                }else if(document.getElementById('promo-discount').value == ""){
                    notification('Alert:WARNING',"Insert Discount")
                }else{
                    document.querySelector("#window-pop-form").submit();
                }
            });
            document.getElementById('Delete-Promo').addEventListener('click', e=>{
                document.querySelector("#window-pop-form-delete").submit();
            });
        }, 100);
        break;
        case "Add New Worker":
            window_pop_body.innerHTML = `
            <form id="window-pop-form" action="${BASE_URL}?p=workers/add" method="POST" autocomplete="off">
                <div class="text-box">
                    <i class="icon fad fa-user-hard-hat"><div class="line"></div></i>
                    <input id="worker-name" name="worker-name" type="email" placeholder="Worker Email" autocomplete="off">
                </div>
                <div class="text-box" style="margin-top:55px;">
                    <i class="icon fad fa-key"><div class="line"></div></i>
                    <input type="password" id="worker-pass" name="worker-pass" placeholder="Worker pass" autocomplete="off">
                    <i id="show-password" class="fad fa-eye-slash"><div class="line"></div></i>
                </div>
                ${rank_user > 1 ? `
                        <div class="select-box" style="margin-top:60px;">
                            <i class="icon fad fa-transporter"><div class="line"></div></i>
                            <i class="icon2 fad fa-angle-up"><div class="line"></div></i>
                            <select name="select-rank">
                                <option value="0">Worker</option>
                                "<option value='1'>Admin</option>" :  ""
                            </select>
                        </div>`: ``}
                <div id="Create-Worker" class="window-pop-btn">Create</div>
            </form>
        `;
        setTimeout(() => {                    
            document.getElementById('show-password').addEventListener('click', e =>{
                if(document.querySelector('#worker-pass').type == "password"){
                    document.querySelector('#worker-pass').type = "text";
                    document.querySelector('#show-password').classList.remove('fa-eye-slash');
                    document.querySelector('#show-password').classList.add('fa-eye');
                }else{
                    document.querySelector('#worker-pass').type = "password";
                    document.querySelector('#show-password').classList.remove('fa-eye');
                    document.querySelector('#show-password').classList.add('fa-eye-slash');
                }
            })
            document.getElementById('Create-Worker').addEventListener('click', e=>{
                if(document.getElementById('worker-name').value == ""){
                    notification('Alert:ERROR',"Insert Worker Email")
                }else if(!validateEmail(document.getElementById('worker-name').value)){
                    notification('Alert:WARNING',"Invalid Email")
                }else if(document.getElementById('worker-pass').value == ""){
                    notification('Alert:WARNING',"Insert Worker Password")
                }else{
                    document.querySelector("#window-pop-form").submit();
                }
            });
        }, 100);
        break;
        case "View Worker":
            window_pop_body.innerHTML = `
                    <div class="text-box">
                        <i class="icon fad fa-user-hard-hat"><div class="line"></div></i>
                        <input id="worker-name" name="worker-name" type="email" placeholder="Worker Email" disabled="true" value="${data.target.querySelector('.worker-email').textContent}">
                    </div>
                    <div class="text-box" style="margin-top:55px;">
                        <i class="icon fad fa-key"><div class="line"></div></i>
                        <input type="password" id="worker-pass" name="worker-pass" placeholder="Worker pass" disabled="true" value="refgfdhydshfesrwefdgdfgerr">
                    </div>
                    <div class="select-box" style="margin-top:60px;">
                        <i class="icon fad fa-transporter"><div class="line"></div></i>
                        <i class="icon2 fad fa-angle-up"><div class="line"></div></i>
                        <select name="select-rank" disabled="true">
                            <option value="0">Worker</option>
                            <option value='1'>Admin</option>
                        </select>
                    </div>
                    <div id="Edit-Worker" class="window-pop-btn">Edit</div>
            `;
            setTimeout(() => {
                document.querySelector('.select-box select').value = data.target.querySelector('.worker-rank').textContent;
                document.getElementById('Edit-Worker').addEventListener('click', e=>{
                    window_events("Edit Worker",data)
                });
            }, 100);
            break;
        case "Edit Worker":
            window_pop_body.innerHTML = `
                <form id="window-pop-form" action="${BASE_URL}?p=workers/edit" method="POST">
                    <input id="worker-id" name="worker-id" value = "${data.target.querySelector('.worker-id').textContent}" hidden>
                    <div class="text-box">
                        <i class="icon fad fa-user-hard-hat"><div class="line"></div></i>
                        <input id="worker-name" name="worker-name" type="email" placeholder="Worker Email" value="${data.target.querySelector('.worker-email').textContent}" maxlength="90">
                    </div>
                    <div class="text-box" style="margin-top:55px;">
                        <i class="icon fad fa-key"><div class="line"></div></i>
                        <input type="password" id="worker-pass" name="worker-pass" placeholder="Worker pass" value="${data.target.querySelector('.worker-pass').textContent}">
                        <i id="show-password" class="fad fa-eye-slash"><div class="line"></div></i>
                    </div>
                    ${rank_user > 1 ? `
                    <div class="select-box" style="margin-top:60px;">
                        <i class="icon fad fa-transporter"><div class="line"></div></i>
                        <i class="icon2 fad fa-angle-up"><div class="line"></div></i>
                        <select name="select-rank">
                            <option value="0">Worker</option>
                            <option value='1'>Admin</option>
                        </select>
                    </div>` : `
                    <div class="select-box" style="margin-top:60px;">
                        <i class="icon fad fa-transporter"><div class="line"></div></i>
                        <i class="icon2 fad fa-angle-up"><div class="line"></div></i>
                        <select name="select-rank" disabled="true">
                            <option value="0">Worker</option>
                            <option value='1'>Admin</option>
                        </select>
                    </div>
                    `}
                    <div id="Save-Worker" class="window-pop-btn">Save</div>
                </form>
                <form id="window-pop-form-delete" action="${BASE_URL}?p=workers/delete" method="POST">
                    <input id="worker-id" name="worker-id" value = "${data.target.querySelector('.worker-id').textContent}" hidden>
                    <div id="Delete-Worker" style="left:35px !important; width:50px; " class="window-pop-btn">Delete</div>
                </form>

            `;
            setTimeout(() => {
                document.querySelector('.select-box select').value = data.target.querySelector('.worker-rank').textContent;
                document.getElementById('show-password').addEventListener('click', e =>{
                    if(document.querySelector('#worker-pass').type == "password"){
                        document.querySelector('#worker-pass').type = "text";
                        document.querySelector('#show-password').classList.remove('fa-eye-slash');
                        document.querySelector('#show-password').classList.add('fa-eye');
                    }else{
                        document.querySelector('#worker-pass').type = "password";
                        document.querySelector('#show-password').classList.remove('fa-eye');
                        document.querySelector('#show-password').classList.add('fa-eye-slash');
                    }
                })
                document.getElementById('Save-Worker').addEventListener('click', e=>{
                    if(document.getElementById('worker-name').value == ""){
                        notification('Alert:ERROR',"Insert Worker Email")
                    }else if(!validateEmail(document.getElementById('worker-name').value)){
                        notification('Alert:WARNING',"Invalid Email")
                    }else if(document.getElementById('worker-pass').value == ""){
                        notification('Alert:WARNING',"Insert Worker Password")
                    }else{
                        document.querySelector("#window-pop-form").submit();
                    }
                });
                document.getElementById('Delete-Worker').addEventListener('click', e=>{
                    document.querySelector("#window-pop-form-delete").submit();
                });
            }, 100);
            break;
        case "View User":
                window_pop_body.innerHTML = `
                <div class="label-text" style="width:81%;">
                    <i class="icon fad fa-envelope"><div class="line"></div></i>
                    <h1>Email</h1>
                    <h2>-> ${data.target.querySelector('.user-email').textContent}</h2>
                </div>
                <div class="label-text" style="margin-left:82%; width:8%;">
                    <i class="icon fad ${parseInt(data.target.querySelector('.user-status').textContent) > 0 ? "fa-check-circle text-color-good" : "fa-times-circle text-color-error"}"></i>
                </div>

                <div class="label-text"  style="margin-top:60px; width:49%;">
                    <i class="icon fad fa-globe-africa"><div class="line"></div></i>
                    <h1>Country</h1>
                    <h2>-> ${data.target.querySelector('.user-country').textContent}</h2>
                </div>
                <div class="label-text"  style="margin-top:60px; margin-left:50%; width:40%;">
                    <i class="icon fad fa-user"><div class="line"></div></i>
                    <h1>Name</h1>
                    <h2>-> ${data.target.querySelector('.user-name').textContent}</h2>
                </div>
                <div class="label-text"  style="margin-top:120px;">
                    <i class="icon fad fa-map-marked"><div class="line"></div></i>
                    <h1>Address 1</h1>
                    <h2>-> ${data.target.querySelector('.user-adress1').textContent}</h2>
                </div>
                <div class="label-text"  style="margin-top:180px;">
                    <i class="icon fad fa-map-marked"><div class="line"></div></i>
                    <h1>Address 2</h1>
                    <h2>-> ${data.target.querySelector('.user-adress2').textContent == "" ? "None" : data.target.querySelector('.user-adress2').textContent}</h2>
                </div>
                <div class="label-text"  style="margin-top:240px; width:49%;">
                    <i class="icon fad fa-city"><div class="line"></div></i>
                    <h1>State / City</h1>
                    <h2>-> ${data.target.querySelector('.user-state').textContent}</h2>
                </div>
                <div class="label-text"  style="margin-top:240px; margin-left:50%; width:40%;">
                    <i class="icon fad fa-mailbox"><div class="line"></div></i>
                    <h1>Postal Code</h1>
                    <h2>-> ${data.target.querySelector('.user-postalcode').textContent}</h2>
                </div>
                <div class="label-text"  style="margin-top:300px;">
                    <i class="icon fad fa-phone-plus"><div class="line"></div></i>
                    <h1>Phone</h1>
                    <h2>-> ${data.target.querySelector('.user-phone').textContent == "" ? "None" : data.target.querySelector('.user-phone').textContent}</h2>
                </div>
            `;
            break;
        case "View Payment":
                let payment_status = "";
                if(parseInt(data.target.querySelector('.invoice-status').textContent) < 1){
                    payment_status = "fa-exclamation-triangle text-color-error ";
                }else if(parseInt(data.target.querySelector('.invoice-status').textContent) < 2){
                    payment_status = "fa-watch text-color-warn";
                }else if(parseInt(data.target.querySelector('.invoice-status').textContent) < 3){
                    payment_status = "fa-badge-check text-color-good";
                }else{
                    payment_status = "fa-exclamation-triangle text-color-error";
                }
                window_pop_body.innerHTML = `
                <div class="label-text" style="width:81%;">
                    <i class="icon fad fa-user"><div class="line"></div></i>
                    <h1>User Account</h1>
                    <h2>-> ${data.target.querySelector('.user-account').textContent}</h2>
                </div>
                <div class="label-text" style="margin-top:60px;">
                    <i class="icon fad fa-boxes"><div class="line"></div></i>
                    <h1>Product List</h1>
                    <h2>-> ${data.target.querySelector('.invoice-product').textContent}</h2>
                </div>
                <div class="label-text" style="margin-top:120px; width:40%;">
                    <i class="icon fad fa-sack-dollar"><div class="line"></div></i>
                    <h1>Total Price</h1>
                    <h2>-> ${data.target.querySelector('.invoice-price').textContent}</h2>
                </div>
                <div class="label-text" style="margin-left:41%;margin-top:120px; width:49%;">
                    <i class="icon fad fa-barcode"><div class="line"></div></i>
                    <h1>Promo Code</h1>
                    <h2>-> [${data.target.querySelector('.invoice-discount').textContent}%] ${data.target.querySelector('.invoice-promo').textContent == "" ? "None" : data.target.querySelector('.invoice-promo').textContent}</h2>
                </div>
                <div class="label-text" style="margin-top:180px;">
                    <i class="icon fad fa-male"><div class="line"></div></i>
                    <h1>Buyer Name</h1>
                    <h2>-> ${data.target.querySelector('.invoice-client-name').textContent}</h2>
                </div>
                <div class="label-text" style="margin-top:240px; width:45%;">
                    <i class="icon fad fa-file-invoice-dollar"><div class="line"></div></i>
                    <h1>Invoice ID</h1>
                    <h2>-> ${data.target.querySelector('.invoice-id').textContent}</h2>
                </div>
                <div class="label-text" style="margin-left:46%; margin-top:240px; width:44%;">
                    <i class="icon fad fad fa-receipt"><div class="line"></div></i>
                    <h1>Payment ID</h1>
                    <h2>-> ${data.target.querySelector('.invoice-payment-id').textContent}</h2>
                </div>

                <div class="label-text" style="margin-top:300px; width:44%;">
                    <i class="icon fad fa-calendar-plus"><div class="line"></div></i>
                    <h1>Payment Created</h1>
                    <h2>-> ${data.target.querySelector('.invoice-payment-created').textContent}</h2>
                </div>
                <div class="label-text" style="margin-left:45%;margin-top:300px; width:45%;">
                    <i class="icon fad fa-calendar-edit"><div class="line"></div></i>
                    <h1>Payment Updated</h1>
                    <h2>-> ${data.target.querySelector('.invoice-payment-updated').textContent}</h2>
                </div>




                <div class="label-text" style="margin-left:82%; width:8%;">
                    <i class="icon fad ${payment_status}"></i>
                </div>
            `;
            break;
                
        default: 
            notification("Alert:ERROR","NO FOUND FORM")
            break;
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














