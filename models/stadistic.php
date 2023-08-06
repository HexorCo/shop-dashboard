<?php 

    class stadistic{

        public function get_all_ip(){
            try{            
                $db = new DB();
                $dbu = $db->getDB();
                $data = $dbu->prepare("SELECT * FROM list_ip");
                $data->execute();
    
                return $data->fetchAll();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }
        public function register_new_ip($ip,$navigator){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "INSERT INTO list_ip (visit_ip,visit_navigator) VALUES (:visit_ip,:visit_navigator)";
                $status = $dbu->prepare($sql)->execute(
                [
                    'visit_ip' => $ip,
                    'visit_navigator' => $navigator
                ]);
                
                return $status;
            } catch (Exception $e){
                die($e->getMessage());
            }
        }
        public function count_new_visit($year,$mothn,$count){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "UPDATE visits SET visit_".$mothn."=:visit_mothn WHERE visit_year = :visit_year";
                $status = $dbu->prepare($sql)->execute([
                  'visit_year' => $year,
                  'visit_mothn' => $count
                ]);
            } catch (Exception $e){
                die($e->getMessage());
            }
        }
        public function get_actual_year($year){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $user = $dbu->prepare("SELECT * FROM visits WHERE visit_year = :year");
                $user->execute(['year' => $year]);
                return $user->fetch();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }
        public function register_new_year($year,$mothn){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "INSERT INTO visits (visit_year,visit_".$mothn.") VALUES (:visit_year,:visit_mothn)";
                $status = $dbu->prepare($sql)->execute(
                [
                    'visit_year' => $year,
                    'visit_mothn' => "1"
                ]);
                return $status;
            } catch (Exception $e){
                die($e->getMessage());
            }
        }

    }