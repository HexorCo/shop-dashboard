<?php 

    class Session{


            public function get_all_users(){
                try{            
                    $db = new DB();
                    $dbu = $db->getDB();
                    $data = $dbu->prepare("SELECT * FROM users");
                    $data->execute();
        
                    return $data->fetchAll();
                  }catch(Exception $e){
                    die($e->getMessage());
                }
            }     
            public function register_new_user($email,$password,$name,$country,$state,$address1,$address2,$postalcode,$phone){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $sql = "INSERT INTO users (user_email,user_pass,user_name,user_country,user_state,user_adress1,user_adress2,user_postalcode,user_phone,user_join) VALUES (:user_email,:user_pass,:user_name,:user_country,:user_state,:user_adress1,:user_adress2,:user_postalcode,:user_phone,:user_join)";
                    $status = $dbu->prepare($sql)->execute(
                    [
                        'user_email' => $email,
                        'user_pass' => $password,
                        'user_name' => $name,
                        'user_country' => $country,
                        'user_state' => $state,
                        'user_adress1' => $address1,
                        'user_adress2' => $address2,
                        'user_postalcode' => $postalcode,
                        'user_phone' => $phone,
                        'user_join' => date("m-d-Y")
                    ]);
                    
                    return $status;
                } catch (Exception $e){
                    die($e->getMessage());
                }
            }
            public function get_user_by_email($email){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $user = $dbu->prepare("SELECT * FROM users WHERE user_email = :user_email");
                    $user->execute(['user_email' => $email]);
                    return $user->fetch();
                  }catch(Exception $e){
                    die($e->getMessage());
                }
            }
    
            public function edit_by_id_user($id,$name,$country,$state,$address1,$postalcode,$phone){
              
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $sql = "UPDATE users SET user_name=:user_name,user_country=:user_country,user_state=:user_state,user_adress1=:user_adress1,user_postalcode=:user_postalcode,user_phone=:user_phone WHERE user_id = :user_id";
                    $status = $dbu->prepare($sql)->execute(
                    [
                        'user_id' => $id,
                        'user_name' => $name,
                        'user_country' => $country,
                        'user_state' => $state,
                        'user_adress1' => $address1,
                        'user_postalcode' => $postalcode,
                        'user_phone' => $phone
                    ]);
                    
                    return $status;
                } catch (Exception $e){
                    die($e->getMessage());
                }
            }

               
            public function register_new_codes($code,$email){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $sql = "INSERT INTO codes (code_name,code_email,code_created) VALUES (:code_name,:code_email,:code_created)";
                    $status = $dbu->prepare($sql)->execute(
                    [
                        'code_name' => $code,
                        'code_email' => $email,
                        'code_created' => date("m-d-Y H:i:s")
                    ]);
                    
                    return $status;
                } catch (Exception $e){
                    die($e->getMessage());
                }
            }
            public function get_code($code){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $user = $dbu->prepare("SELECT * FROM codes WHERE code_name = :code_name");
                    $user->execute(['code_name' => $code]);
                    return $user->fetch();
                  }catch(Exception $e){
                    die($e->getMessage());
                }
            }
            public function get_code_by_email($email){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $user = $dbu->prepare("SELECT * FROM codes WHERE code_email = :code_email");
                    $user->execute(['code_email' => $email]);
                    return $user->fetch();
                  }catch(Exception $e){
                    die($e->getMessage());
                }
            }
            public function delete_code_by_email($email){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $stm = $dbu->prepare("DELETE FROM codes WHERE code_email = :code_email");
                    $status = $stm->execute([
                    'code_email' => $email
                    ]);
                } catch (Exception $e){
                    die($e->getMessage());
                }
            }
            
            public function new_password($email,$password){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $sql = "UPDATE users SET user_pass=:user_pass WHERE user_email = :user_email";
                    $status = $dbu->prepare($sql)->execute([
                      'user_email' => $email,
                      'user_pass' => $password
                    ]);
                } catch (Exception $e){
                    die($e->getMessage());
                }
            }
            
            public function verify_email($email){
                try{
                    $db = new DB();
                    $dbu = $db->getDB();
                    $sql = "UPDATE users SET user_status=:user_status WHERE user_email = :user_email";
                    $status = $dbu->prepare($sql)->execute([
                      'user_email' => $email,
                      'user_status' => "1"
                    ]);
                } catch (Exception $e){
                    die($e->getMessage());
                }
            }
    }