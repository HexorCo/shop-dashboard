<?php 

    class Shop{


        public function get_all_articles(){
            try{            
                $db = new DB();
                $dbu = $db->getDB();
                $data = $dbu->prepare("SELECT * FROM articles");
                $data->execute();
    
                return $data->fetchAll();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }
        public function get_all_category(){
            try{            
                $db = new DB();
                $dbu = $db->getDB();
                $data = $dbu->prepare("SELECT * FROM category");
                $data->execute();
    
                return $data->fetchAll();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }


        
        public function get_article_by_id($id){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $user = $dbu->prepare("SELECT * FROM articles WHERE article_id = :id");
                $user->execute(['id' => $id]);
                return $user->fetch();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }

        public function get_promo_code_by_code($code){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $user = $dbu->prepare("SELECT * FROM promo WHERE promo_name = :code");
                $user->execute(['code' => $code]);
                return $user->fetch();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }

 
    }