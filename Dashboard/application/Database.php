<?php 

class DB{
    private $mbd;
    public function __construct(){
        try {
            $this->mbd = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER,DB_PASS);
            $this->mbd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->mbd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        } catch (PDOException $e) {
            echo $e->getMessage();
            die();
        }
    }
    public function getDB(){
        return $this->mbd;
    }
}
