<?php
$err = "";
@$session  = new Session();

if(@$_SESSION['user_auth'] == true){
    $err = '    
        <li class="nav-item ms-2">
            <a href="'.BASE_URL.'?p=Profile" class="btn bg-gradient-dark mb-0">
            <i class="fas fa-user-alt"></i>     My Account
            </a>
        </li>
        <li class="nav-item ms-2">
            <a href="'.BASE_URL.'?p=/session/Logout" class="btn bg-gradient-dark mb-0">
                <i class="far fa-sign-out"></i>
            </a>
        </li>
    ';


}else{
    $err = '    
        <li class="nav-item ms-2">
            <a href="'.BASE_URL.'?p=Login" class="btn bg-gradient-dark mb-0">
                Sign In
            </a>
        </li>
        <li class="nav-item ms-2">
            <a href="'.BASE_URL.'?p=Register" class="btn bg-gradient-dark mb-0">
                Sign Up
            </a>
        </li>
    ';
}




echo '

<nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
<div class="container">
    <a href="'.BASE_URL.'" class="navbar-brand w-8" href="#" data-config-id="brand">
        <h1 style="font-size:24px; margin-top:-15px; position:absolute;">HexorCo</h1>
    </a>

    <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
        </span>
    </button>
    <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
            <li class="nav-item mx-4">
                <a style="font-size:16px;" href="'.BASE_URL.'" class="nav-link ps-2 cursor-pointer">
                    Home
                </a>
            </li>
            <li class="nav-item mx-4">
                <a style="font-size:16px;" href="'.BASE_URL.'?p=Shop" class="nav-link ps-2 cursor-pointer">
                    Shop
                </a>
            </li>
            <li class="nav-item mx-4">
                <a style="font-size:16px;" href="'.BASE_URL.'?p=Category" class="nav-link ps-2 cursor-pointer">
                    Category
                </a>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto">

            <li class="nav-item mx-2">
                <a href="'.BASE_URL.'?p=Cart" class="nav-link ps-2 cursor-pointer">
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                </a>
            </li>

            '.$err.'
        </ul>
    </div>
</div>
</nav>
<script src="https://loopple.s3.eu-west-3.amazonaws.com/soft-ui-design-system/js/core/bootstrap.min.js" type="text/javascript"></script>

';
echo '<script src="./js/cart.js"></script>';