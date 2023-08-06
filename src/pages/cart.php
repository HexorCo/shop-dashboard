<?php
$session = new Session();
@$get_user =  $session->get_user_by_email($_SESSION['user_email']);
$err = "";

if(is_object($get_user)){
    if($get_user->user_status > 0){
        $err = '<button class="btn bg-gradient-dark">Buy</button>';
    }else{
        $err = '<a href="'.BASE_URL.'?p=VerifyEmail" class="btn bg-gradient-dark">Verify Email</a>';
    }
}else{
    $err = '<a href="'.BASE_URL.'?p=Register" class="btn bg-gradient-dark">Register</a>';
}

echo '
    <link rel="stylesheet" href="./css/cart.css">

    <div class="row container mx-auto mt-5">
        <div class="col-12 col-lg-8">
            <div id="cart" class="row">
                <p>No hay productos en el carrito.</p>
            </div>
            
        </div>
        <div class="col-12 col-lg-4 mt-2" id="payments">
            <div class="card">
                <div id="total-items">
                
                </div>
                <h1>Total: <span id="total-price">0$</span></h1>
                <div id="btn-puchase">
                    '.$err.'
                </div>

            </div>
            <button onclick="clearCart()" class="mt-3 bg-gradient-dark text-white btn"><i class="text-primary fas fa-trash-alt"></i> Clear Cart</button>
        </div>

    </div>

    <script>updateCart()</script>
';
