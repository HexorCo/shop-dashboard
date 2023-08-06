<?php 

    class articles{


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
        public function get_all_promo_code(){
            try{            
                $db = new DB();
                $dbu = $db->getDB();
                $data = $dbu->prepare("SELECT * FROM promo");
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
        public function get_category_by_id($id){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $user = $dbu->prepare("SELECT * FROM category WHERE category_id = :id");
                $user->execute(['id' => $id]);
                return $user->fetch();
              }catch(Exception $e){
                die($e->getMessage());
            }
        }


 
        public function add_new_article($article_name,$article_price,$article_desc,$article_stock,$article_img,$article_category){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "INSERT INTO articles (article_name,article_price,article_desc,article_stock,article_img,article_category) VALUES (:article_name,:article_price,:article_desc,:article_stock,:article_img,:article_category)";
                $status = $dbu->prepare($sql)->execute(
                [
                    'article_name' => $article_name,
                    'article_price' => $article_price,
                    'article_desc' => $article_desc,
                    'article_stock' => $article_stock,
                    'article_img' =>$article_img,
                    'article_category' => $article_category
                ]);
                
                return $status;
            } catch (Exception $e){
                die($e->getMessage());
            }
    
        }
        public function add_new_category($category_name,$category_img){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "INSERT INTO category (category_name,category_img) VALUES (:category_name,:category_img)";
                $status = $dbu->prepare($sql)->execute(
                [
                    'category_name' => $category_name,
                    'category_img' => $category_img
                ]);
                
                return $status;
            } catch (Exception $e){
                die($e->getMessage());
            }
    
        }
        public function add_new_promo_code($promo_name,$promo_discount,$promo_limit){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "INSERT INTO promo (promo_name,promo_limits,promo_discount) VALUES (:promo_name,:promo_limits,:promo_discount)";
                $status = $dbu->prepare($sql)->execute(
                    [
                    'promo_name' => $promo_name,
                    'promo_limits' => $promo_limit,
                    'promo_discount' => $promo_discount
                ]);
                
                return $status;
            } catch (Exception $e){
                die($e->getMessage());
            }
    
        }



        public function delete_article($id){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $stm = $dbu->prepare("DELETE FROM articles WHERE article_id = :id");
                $status = $stm->execute([
                'id' => $id
                ]);
            } catch (Exception $e){
                die($e->getMessage());
            }
        }
        public function delete_category($id){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $stm = $dbu->prepare("DELETE FROM category WHERE category_id = :id");
                $status = $stm->execute([
                'id' => $id
                ]);
            } catch (Exception $e){
                die($e->getMessage());
            }
        }
        public function delete_promo_code($id){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $stm = $dbu->prepare("DELETE FROM promo WHERE promo_id = :id");
                $status = $stm->execute([
                'id' => $id
                ]);
            } catch (Exception $e){
                die($e->getMessage());
            }
        }



        public function edit_article($id,$article_name,$article_price,$article_desc,$article_stock,$article_img,$article_category){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "UPDATE articles SET article_name=:article_name,article_price=:article_price,article_desc=:article_desc,article_stock=:article_stock,article_img=:article_img,article_category=:article_category WHERE article_id = :id";
                $status = $dbu->prepare($sql)->execute([
                  'id' => $id,
                  'article_name' => $article_name,
                  'article_price' => $article_price,
                  'article_desc' => $article_desc,
                  'article_stock' => $article_stock,
                  'article_img' => $article_img,
                  'article_category' => $article_category,
                ]);
            } catch (Exception $e){
                die($e->getMessage());
            }
        }
        public function edit_category($id,$category_name,$category_img){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "UPDATE category SET category_name=:category_name,category_img=:category_img WHERE category_id = :id";
                $status = $dbu->prepare($sql)->execute([
                  'id' => $id,
                  'category_name' => $category_name,
                  'category_img' => $category_img,
                ]);
            } catch (Exception $e){
                die($e->getMessage());
            }
        }
        public function edit_promo_code($id,$promo_name,$promo_discount,$promo_limit){
            try{
                $db = new DB();
                $dbu = $db->getDB();
                $sql = "UPDATE promo SET promo_name=:promo_name,promo_discount=:promo_discount,promo_limits=:promo_limit  WHERE promo_id = :id";
                $status = $dbu->prepare($sql)->execute([
                  'id' => $id,
                  'promo_discount' => $promo_discount,
                  'promo_name' => $promo_name,
                  'promo_limit' => $promo_limit,
                ]);
            } catch (Exception $e){
                die($e->getMessage());
            }
        }











        
    }