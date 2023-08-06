<?php

    
@$id = $_GET['i'];
if(ctype_digit($id)){
    @$shop = new Shop();
    @$article = $shop->get_article_by_id($id);
    if(is_object($article)){
        $link_back = @$_GET['b'] == "" ? BASE_URL.'?p=Shop' : BASE_URL.'?p=Shop&category='.$_GET['b'];
        $btn_add = "";
        if($article->article_stock > 0){
            $btn_add = '<button class="p-animation btn btn-outline-dark mb-0" onclick="addToCart(`'.$article->article_id.'`,`'.$article->article_name.'`,`'.$article->article_price.'`,`'.$article->article_img.'`)">Add to Cart</button>';
        }else{
            $btn_add = '<button class="p-animation btn btn-outline-dark mb-0" class="btn bg-gradient-dark" disabled>SOLD</button>';
        }

        $a  = strlen($article->article_name) > 24 ? mb_substr($article->article_name, 0, 24, 'UTF-8')."..." : $article->article_name;

        $ere = $article->article_stock > 0 
        ? '<span style="color: #20c997;text-shadow: 0px 0px 3px #20c996a4;">'.$article->article_stock.'</span>'
        : '<span style="color: #d63384;text-shadow: 0px 0px 3px #d63384a4;">SOLD</span>' ;
        echo '
            <script src="./js/cart.js"></script>
            <link rel="stylesheet" href="./css/articles.css">


            <div class="row container mx-auto mt-4" >
                <div class="col-12 col-lg-7" id="eee">
                    <img src="'.$article->article_img.'">
                </div>
                <div class="col-12 col-lg-5"  id="eee2">
                    <h1>'.ucwords(strtolower($a)).'<span>'.$article->article_price.'$</span></h1>
                    <h4>Stock: '.$ere.'</h4>
                    <h5> Category: <a href="'.BASE_URL.'?p=Shop&category='.strtoupper($article->article_category).'"><span>#'.strtoupper($article->article_category).'</span></a></h5>
                    <h3>Description: <br><span>'.$article->article_desc.'</ span></h3>
                    <div class="">
                        '.$btn_add.' <a class="btn mt-3" href="'.BASE_URL.'?p=Cart">View Cart</a>
                    </div>
                    
                </div>
            </div>
            <script>addListenerToButtons();</script>
        
        ';

    }else{
        echo '<html><head><meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Shop"></head></html> ';
    }
}else{
    echo '<html><head><meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Shop"></head></html> ';
}





/*
        echo ' 
        <br><br><a href="'.$link_back.'"> Go to Shop</a>
        <h1>'.$article->article_name.'</h1>
        <h1>'.$article->article_price.'</h1>
        <h1>'.$article->article_desc.'</h1>
        <h1>'.$article->article_stock.'</h1>
        <h1>'.$article->article_img.'</h1>
        <h1>'.$article->article_category.'</h1>
        '.$btn_add.'
        <a href="'.BASE_URL.'?p=Cart">View Cart</a>
    ';
*/






















