<?php
   session_start();
   date_default_timezone_set('America/Merida');
   define('DS', DIRECTORY_SEPARATOR);
   define('ROOT', realpath(dirname(__FILE__)).DS);

   define('APP_PATH', ROOT. 'application' .DS);

   require_once APP_PATH . 'Config.php';
   require_once APP_PATH . 'Database.php';
   require_once APP_PATH . 'Model.php';
   require_once APP_PATH . 'Includes.php';



   require_once ROOT.'src'.DS.'parts'.DS.'header.php';
   require_once ROOT.'src'.DS.'parts'.DS.'navbar.php';
   require_once ROOT.'src'.DS.'parts'.DS.'content.php';
   require_once ROOT.'src'.DS.'parts'.DS.'footer.php';


?>