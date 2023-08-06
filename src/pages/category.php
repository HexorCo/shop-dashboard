<?php
$articles = new Shop();
$err = "";

foreach ( $articles->get_all_category() as $items) { 
    $err .='   
        <div class="col-lg-4 mt-4">
            <div class="card h-100 mb-4 min-height-250 card-background align-items-start" style="background-image: url('.$items->category_img.'); background-size: cover;">
                <div class="card-body w-100 z-index-3 text-start d-flex flex-column align-items-center">
                    <span class="me-auto">Trending Now</span>
                    <h3 class="text-white font-weight-bolder me-auto">'.ucwords($items->category_name).'</h3>
                    <a href="'.BASE_URL.'?p=Shop&category='.strtoupper($items->category_name).'" class="btn mb-0 btn-white btn-sm px-4 me-auto mt-auto icon-move-right mb-0">
                        Go to Collection
                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    ';
}   


echo '
<div class="container">
    <div class="row">

       '.$err.'
    </div>
</div>
';