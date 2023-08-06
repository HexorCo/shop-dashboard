<?php 

    class payments{


        public function get_all_payments(){
            try{            
                $db = new DB();
                $dbu = $db->getDB();
                $data = $dbu->prepare("SELECT * FROM invoice");
                $data->execute();
    
                return $data->fetchAll();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }



        
    }