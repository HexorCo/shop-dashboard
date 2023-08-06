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