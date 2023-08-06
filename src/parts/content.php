<?php

    @$stadistic  = new stadistic();
    @$listaIPs = $stadistic->get_all_ip();
    $visit_navigator = "";
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== false || strpos($_SERVER['HTTP_USER_AGENT'], 'Trident/') !== false || strpos($_SERVER['HTTP_USER_AGENT'], 'Edg/') !== false) {
        $visit_navigator = "ex";
    }else if (strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== false) {
        $visit_navigator = "ch";
    } elseif (strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== false) {
        $visit_navigator = "fr";
    }
    $encontre = false;
    for ($i = 0; $i < count($listaIPs); $i++) { 
        if ($listaIPs[$i]->visit_ip == $_SERVER['REMOTE_ADDR']) {
            $encontre = true;
            break;
        } 
    }   
    if($encontre != true){
        $stadistic->register_new_ip($_SERVER['REMOTE_ADDR'],$visit_navigator);
        $data =  $stadistic->get_actual_year(date("Y"));
        if(is_object($data)){
            $arrayAsociativo = json_decode(json_encode($data), true);
            $stadistic->count_new_visit(date("Y"),date("F"),(int)$arrayAsociativo['visit_'.strtolower(date("F"))] + 1);
        }else{
            $stadistic->register_new_year(date("Y"),strtolower(date("F")));
        }
    }

    @$page = strtolower($_GET['p']);
    if($page){
        $path = ROOT.'src'.DS."pages".DS.$page.".php";
        $path2 = ROOT.'src'.DS."functions".DS.$page.".php";

        if(file_exists($path)){
            include($path);
        }else if(file_exists($path2)){
            include($path2);
        }else{
            include ROOT.'src'.DS.'pages'.DS.'error404.php';
        }
    }else{
        include ROOT.'src'.DS.'pages'.DS.'home.php';
    }





    