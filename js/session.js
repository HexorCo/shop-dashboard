
function register() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    let name = document.getElementById('name').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let address1 = document.getElementById('address1').value;
    let postalcode = document.getElementById('postalcode').value;
    let phone = document.getElementById('phone').value;

    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    


    if (!email) {
        notification("Alert:ERROR", "Please enter an email.");
        return false;
    }
    if (!password) {
        notification("Alert:ERROR", "Please enter a password.");
        return false;
    }
    if (!confirm_password) {
        notification("Alert:ERROR", "Please confirm your password.");
        return false;
    }
    if (password !== confirm_password) {
        notification("Alert:ERROR", "Passwords do not match.");
        return false;
    }
    if (!name) {
        notification("Alert:ERROR", "Please enter your name.");
        return false;
    }
    if (country == "none") {
        notification("Alert:ERROR", "Please Select your country.");
        return false;
    }
    if (!state) {
        notification("Alert:ERROR", "Please enter your state/province/region.");
        return false;
    }
    if (!address1) {
        notification("Alert:ERROR", "Please enter your address.");
        return false;
    }
    if (!postalcode) {
        notification("Alert:ERROR", "Please enter your postal code.");
        return false;
    }
    if (!phone) {
        notification("Alert:ERROR", "Please enter your phone number.");
        return false;
    }
    if (!validEmail) {
        notification("Alert:ERROR", "Please enter a valid email.");
    }
    if (password !== confirm_password) {
        notification("Alert:ERROR", "Passwords do not match.");
        return false;
    }

    if (!document.getElementById('flexCheckDefault').checked) {
        notification("Alert:ERROR", "It seems the terms of service were not accepted.");
        return false;
    }


    return true;
}

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (!email) {
        notification("Alert:ERROR", "Please enter an email.");
        return false;
    }
    if (!password) {
        notification("Alert:ERROR", "Please enter a password.");
        return false;
    }
    if (!validEmail) {
        notification("Alert:ERROR", "Please enter a valid email.");
    }
    

    return true;
}
function resetpassword() {
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    if (!password) {
        notification("Alert:ERROR", "Please enter a password.");
        return false;
    }
    if (!confirm_password) {
        notification("Alert:ERROR", "Please confirm your password.");
        return false;
    }
    

    return true;
}
function sendcode() {
    let email = document.getElementById('email').value;
    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (!email) {
        notification("Alert:ERROR", "Please enter an email.");
        return false;
    }
    if (!validEmail) {
        notification("Alert:ERROR", "Please enter a valid email.");
    }
    

    return true;
}

function savedata() {
    let name = document.getElementById('name').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById('state').value;
    let address1 = document.getElementById('address1').value;
    let postalcode = document.getElementById('postalcode').value;
    let phone = document.getElementById('phone').value;



    if (!name) {
        notification("Alert:ERROR", "Please enter your name.");
        return false;
    }
    if (country == "none") {
        notification("Alert:ERROR", "Please Select your country.");
        return false;
    }
    if (!state) {
        notification("Alert:ERROR", "Please enter your state/province/region.");
        return false;
    }
    if (!address1) {
        notification("Alert:ERROR", "Please enter your address.");
        return false;
    }
    if (!postalcode) {
        notification("Alert:ERROR", "Please enter your postal code.");
        return false;
    }
    if (!phone) {
        notification("Alert:ERROR", "Please enter your phone number.");
        return false;
    }


    return true;
}


function next_step() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    let step1 = document.getElementById('step1');
    let step2 = document.getElementById('step2');

    let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!email) {
        notification("Alert:ERROR", "Please enter an email.");
        return false;
    }
    if (!validEmail) {
        notification("Alert:ERROR", "Please enter a valid email.");
        return false;
    }
    if (!password) {
        notification("Alert:ERROR", "Please enter a password.");
        return false;
    }
    if (!confirm_password) {
        notification("Alert:ERROR", "Please confirm your password.");
        return false;
    }
    if (password !== confirm_password) {
        notification("Alert:ERROR", "Passwords do not match.");
        return false;
    }
   

    step1.setAttribute('hidden',true)
    document.getElementById('title-form').innerHTML = "2";
    document.getElementById('info-form').innerHTML = "Enter your information to register";
    step2.removeAttribute('hidden',false)

}