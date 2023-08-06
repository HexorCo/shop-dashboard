<?php

@$shop = new Shop();

$articles = array_reverse($shop->get_all_articles());
$category = array_reverse($shop->get_all_category());
$article_section1 = "";
$article_section2 = "";



for ($i=0; $i < 4; $i++) { 
    $a  = strlen($articles[$i]->article_name) > 20 ? mb_substr($articles[$i]->article_name, 0, 20, 'UTF-8')."..." : $articles[$i]->article_name;
    $img = $articles[$i]->article_img == "img/shop/" ? '<img style="height:200px; width:100%;" src="img/none.png"  class="img-fluid border-radius-lg">': '<img style="height:200px; width:100%;  object-fit: cover; "  src="'.$articles[$i]->article_img.'" class="img-fluid border-radius-lg shadow">'; 
    $article_section1 .= 
    '        
        <div class="col-lg-3 mb-lg-0 mb-4">
            <div class="card">
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                    <a href="'.BASE_URL.'?p=Articles&i='.$articles[$i]->article_id.'" class="d-block">
                    '.$img.'
                        
                    </a>
                </div>

                <div class="card-body pt-3">
                    <div class="d-flex align-items-center">
                        <div>
                            <span class="text-sm">'.ucwords(strtolower($articles[$i]->article_category)).'</span>
                            <h4 class="card-description font-weight-bolder text-dark mb-4">
                            '.ucwords(strtolower($a)).'</h4>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <h5 class="mb-0 font-weight-bolder">$'.$articles[$i]->article_price.'</h5>
                    </div>

                    <button class="btn btn-outline-dark mb-0 p-animation" onclick="addToCart(`'.$articles[$i]->article_id.'`,`'.$articles[$i]->article_name.'`, `'.$articles[$i]->article_price.'`,`'.$articles[$i]->article_img.'`)">Add to cart</button>
                    <a class="btn-custom" href="'.BASE_URL.'?p=Cart">View Cart</a>

                </div>
            </div>
        </div>
    ';
}

for ($i=0; $i < 4; $i++) { 
    $articles = $shop->get_all_articles();
    $a  = strlen($articles[$i]->article_name) > 20 ? mb_substr($articles[$i]->article_name, 0, 20, 'UTF-8')."..." : $articles[$i]->article_name;
    $img = $articles[$i]->article_img == "img/shop/" ? '<img src="img/none.png" class="img-fluid border-radius-lg">': '<img style="height:200px; width:100%;  object-fit: cover; "  src="'.$articles[$i]->article_img.'" class="img-fluid border-radius-lg shadow">'; 
    $article_section2 .= 
    '        
        <div class="col-lg-3 mb-lg-0 mb-4">
            <div class="card">
                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                    <a href="'.BASE_URL.'?p=Articles&i='.$articles[$i]->article_id.'" class="d-block">
                    '.$img.'
                        
                    </a>
                </div>

                <div class="card-body pt-3">
                    <div class="d-flex align-items-center">
                        <div>
                            <span class="text-sm">'.ucwords(strtolower($articles[$i]->article_category)).'</span>
                            <h4 class="card-description font-weight-bolder text-dark mb-4">
                            '.ucwords(strtolower($a)).'</h4>
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <h5 class="mb-0 font-weight-bolder">$'.$articles[$i]->article_price.'</h5>
                    </div>

                    <button class="btn btn-outline-dark mb-0 p-animation" onclick="addToCart(`'.$articles[$i]->article_id.'`,`'.$articles[$i]->article_name.'`, `'.$articles[$i]->article_price.'`,`'.$articles[$i]->article_img.'`)">Add to cart</button>
                    <a class="btn-custom" href="'.BASE_URL.'?p=Cart">View Cart</a>

                </div>
            </div>
        </div>
    ';
}





echo '






<header class="position-relative">
<span class="mask bg-gradient-warning opacity-1"></span>
<div class="page-header min-vh-75 position-relative">
    <div class="position-absolute top-0 start-0 w-40 h-100 d-md-block d-none">
        <div class="bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n8" style="background-image:url(img/header_bg.png)"></div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-7 d-flex justify-content-center text-md-start ms-auto text-center flex-column">
                <span class="ms-md-4 ps-1 text-dark font-weight-bold text-sm mb-0" spellcheck="false">Buy 2 products and get free shipping</span>
                <h1 class="display-1 font-weight-bolder ps-0 ms-md-4 w-md-70 text-dark text-gradient text-capitalize">Best Shop Online</h1>
                <div class="buttons ms-md-4 ps-2 mt-4 d-flex mx-auto">
                    <a href="'.BASE_URL.'?p=Shop" class="btn bg-gradient-dark d-inline-block mb-0">Shop now</a>
                </div>
            </div>
        </div>
    </div>

</div>
</header>




<div class="container">
<div class="row bg-white shadow mt-n5 border-radius-lg pb-4 p-3 mx-sm-0 mx-1 position-relative z-index-2">
    <div class="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
        <div class="d-flex align-items-center">
            <i class="fa fa-bus fa-2x text-dark" aria-hidden="true"></i>
            <div class="ms-3">
                <h6 class="mb-0">Free Shipping</h6>
                <p class="text-sm mb-0">On order bigger than $50</p>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
        <div class="d-flex align-items-center">
            <i class="fa fa-suitcase fa-2x text-dark" aria-hidden="true"></i>
            <div class="ms-3">
                <h6 class="mb-0">15 Days Return</h6>
                <p class="text-sm mb-0">Moneyback guarantee</p>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
        <div class="d-flex align-items-center">
            <i class="fa fa-coins fa-2x text-dark" aria-hidden="true"></i>
            <div class="ms-3">
                <h6 class="mb-0">Secure Checkout</h6>
                <p class="text-sm mb-0">Secured by Paypal</p>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
        <div class="d-flex align-items-center">
            <i class="fa fa-gift fa-2x text-dark" aria-hidden="true"></i>
            <div class="ms-3">
                <h6 class="mb-0">Make Money</h6>
                <p class="text-sm mb-0">Use our affiliate program</p>
            </div>
        </div>
    </div>
</div>
</div>



<section class="pb-5 pt-7">
<div class="container">
    <div class="row">
        <div class="col-lg-5 mb-4">
            <div class="card h-100 mb-4 min-height-250 card-background align-items-start" style="background-image: url('.$category[count($category)-1]->category_img.'); background-size: cover;">
                <div class="card-body w-100 z-index-3 text-start d-flex flex-column align-items-center">
                    <span class="me-auto">Trending Now</span>
                    <h3 class="text-white font-weight-bolder me-auto">'.ucwords($category[count($category)-1]->category_name).'</h3>
                    <a href="'.BASE_URL.'?p=Category" class="btn mb-0 btn-white btn-sm px-4 me-auto mt-auto icon-move-right mb-0">
                        Shop Collection
                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-7 mb-4">
            <div class="card mb-4 min-height-250 card-background align-items-start" style="background-image: url('.$category[count($category)-2]->category_img.'); background-size: cover;">
                <div class="card-body w-100 z-index-3 text-start d-flex flex-column align-items-center">
                    <span class="me-auto">Trending Now</span>
                    <h3 class="text-white font-weight-bolder me-auto">'.ucwords($category[count($category)-2]->category_name).'</h3>
                    <a href="'.BASE_URL.'?p=Category" class="btn mb-0 btn-white btn-sm px-4 me-auto mt-auto icon-move-right mb-0">
                        Shop Collection
                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                </div>
            </div>  
            <div class="card mb-0 min-height-250 card-background align-items-start" style="background-image: url('.$category[count($category)-3]->category_img.'); background-size: cover;">
                <div class="card-body w-100 z-index-3 text-start d-flex flex-column align-items-center">
                    <span class="me-auto">Weekly News</span>
                    <h3 class="text-white font-weight-bolder me-auto">'.ucwords($category[count($category)-3]->category_name).'</h3>
                    <a href="'.BASE_URL.'?p=Category" class="btn mb-0 btn-white btn-sm px-4 me-auto mt-auto icon-move-right mb-0">
                        Shop Collection
                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</section>


<section class="pb-3">
<div class="container">
    <div class="row mb-4">
        <div class="col-12 text-center">
            <h3 class="mb-5" spellcheck="false">View Tranding Products</h3>
        </div>
        '.$article_section1.'
        <div class="col-12 mt-5 text-center">
            <a href="'.BASE_URL.'?p=Shop" class="btn bg-gradient-dark">View All</a>
        </div>
    </div>
</div>
</section>


<div class="">
<div class="container">
    <div class="row mt-4">
        <div class="col-lg-2 col-md-4 col-6 mb-4">
            <img class="w-100 opacity-9" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg" alt="logo">
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
            <img class="w-100 opacity-9" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg" alt="logo">
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
            <img class="w-100 opacity-9" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg" alt="logo">
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
            <img class="w-100 opacity-9" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg" alt="logo">
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
            <img class="w-100 opacity-9" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-spotify.svg" alt="logo">
        </div>
        <div class="col-lg-2 col-md-4 col-6 mb-4">
            <img class="w-100 opacity-9" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-vodafone.svg" alt="logo">
        </div>
    </div>
</div>
</div>


<section class="mt-5 mb-5 py-5 bg-gradient-dark">
<div class="container">
    <div class="row text-center">
        <div class="col-lg-4 col-md-6">
            <div class="info">
                <h3 class="mt-2 text-white">'.count($articles).' + </h3>
                <p class="text-white">Products available</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="info">
                <h3 class="mt-2 text-white">8 + </h3>
                <p class="text-white">Years of experience</p>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="info">
                <h3 class="mt-2 text-white">99% </h3>
                <p class="text-white">Happy Clients</p>
            </div>
        </div>
    </div>
</div>
</section>


<section class="pb-6">
<div class="container">
    <div class="row mb-4">
        <div class="col-12 text-center">
            <h3 class="mb-5" spellcheck="false">Featured Products</h3>
        </div>

        '.$article_section2.'


        <div class="col-12 mt-5 text-center">
            <a href="'.BASE_URL.'?p=Shop" class="btn bg-gradient-dark">View All</a>
        </div>
    </div>
</div>
</section>

<section class="pb-5 pt-0">
<div class="container">
    <div class="row">
        <div class="col-lg-6 mx-auto text-center">
            <h2 class="mb-3">Testimonials of the CEO</h2>
            <p>That’s the main thing people are controlled by! Thoughts- their perception of themselves! </p>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-lg-4 col-md-8 mb-4">
            <div class="card text-center bg-white">
                <div class="card-body">
                    <div class="rating">
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                    </div>
                    <p class="mt-3">"If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                    <div class="align-items-center mt-4">
                        <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8MnwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="..." class="avatar mx-auto mb-2 shadow d-block">
                        <div class="name d-block">
                            <span class="text-sm font-weight-bold text-dark mb-0">Alice Jonathan</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-8 ms-md-auto mb-4">
            <div class="card text-center bg-white">
                <div class="card-body">
                    <div class="rating">
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                    </div>
                    <p class="mt-3">"If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                    <div class="align-items-center mt-4">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="..." class="avatar mx-auto mb-2 shadow d-block">
                        <div class="name d-block">
                            <span class="text-sm font-weight-bold text-dark mb-0">Mathew Glock</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-8">
            <div class="card text-center bg-white">
                <div class="card-body">
                    <div class="rating">
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                        <i class="fas fa-star text-warning text-gradient" aria-hidden="true"></i>
                    </div>
                    <p class="mt-3">"If you have the opportunity to play this game of life you need to appreciate every moment."</p>
                    <div class="align-items-center mt-4">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHwyfDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="..." class="avatar mx-auto mb-2 shadow d-block">
                        <div class="name d-block">
                            <span class="text-sm font-weight-bold text-dark mb-0">Andrew Fierce</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>


<script>addListenerToButtons()</script>


<footer class="footer py-5 bg-gradient-dark position-relative overflow-hidden">
<img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute start-0 top-0 w-100 opacity-6">
<div class="mt-5 container position-relative z-index-1">
    <div class="row">
        <div class="col-lg-4 me-auto mb-lg-0 mb-4 text-lg-start text-center">
            <h6 class="text-white font-weight-bolder text-uppercase mb-lg-4 mb-3">Fashion</h6>
            <ul class="nav flex-row ms-n3 align-items-center mb-4 mt-sm-0">
                <li class="nav-item">
                    <a class="nav-link text-white opacity-8" href="'.BASE_URL.'">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white opacity-8" href="'.BASE_URL.'?p=Shop">
                        Shop
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link text-white opacity-8" href="'.BASE_URL.'?p=Category">
                        Category
                    </a>
                </li>
            </ul>
            <p class="text-sm text-white opacity-8 mb-0">
                Copyright © 2022 Soft by '.APP_NAME.'
            </p>
        </div>
        <div class="col-lg-6 ms-auto text-lg-end text-center">
            <p class="mb-5 text-lg text-white font-weight-bold">
                The reward for getting on the stage is fame. The price of fame is you can’t get off the stage.
            </p>
            <a href="" class="text-white me-xl-4 me-4 opacity-5">
                <span class="fab fa-instagram" aria-hidden="true"></span>
            </a>
            <a href="" class="text-white me-xl-4 me-4 opacity-5">
                <span class="fab fa-pinterest" aria-hidden="true"></span>
            </a>
        </div>
    </div>
</div>
</footer>




';














