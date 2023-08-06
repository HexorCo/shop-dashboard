<?php


@$session = new Session();
if($_SESSION['user_auth'] == true){
    @$user_data = $session->get_user_by_email($_SESSION['user_email']);
    if(is_object($user_data)){
                
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $name = $_POST['name'];
            $country = $_POST['country'];
            $state = $_POST['state'];
            $address1 = $_POST['address1'];
            $postalcode = $_POST['postalcode'];
            $phone = $_POST['phone'];

         
            $session->edit_by_id_user($user_data->user_id,$name,$country,$state,$address1,$postalcode,$phone);
            echo '
                <html>
                    <head>
                        <meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Profile">
                    </head>
                </html>
            ';

            

        }

        $err = $user_data->user_status > 0 
        ?  ''
        :  '<a href="'.BASE_URL.'?p=VerifyEmail" class="btn bg-primary">VERIFY EMAIL</a>';    
        
        $err2 =  $user_data->user_status > 0
        ? '<span style="background-color:#20c997;">VERIFIED</span>'
        : '<span class="bg-primary">UNVERIFIED</span>';


        echo '
        <link rel="stylesheet" href="./css/profile.css">
        <script src="./js/session.js"></script>
            <div class="row profile container mx-auto mt-5">
                <div class="col-12 col-lg-6">
                   <div class="card bg-gradient-dark">
                    <i class="fad fa-user-circle"></i>
                    <h1>'.ucwords(strtolower($user_data->user_email)).' '.$err2.'</h1>
                    '.$err.'
                   </div>   
                </div>
                <div class="col-12 col-lg-6">
                
                    <form class="profile-back"  method="POST"  onsubmit="return savedata();" > 
                        <label>Full Name</label>
                        <div class="mb-2">
                            <input type="text" class="form-control form-control-lg" placeholder="John Roe" id="name" name="name"  maxlength="60" value="'.$user_data->user_name.'">
                        </div>

                        <label>Select Country</label>
                        <div class="mb-2">
                            <select class="form-control form-control-lg"  id="country" name="country">
                                <option value="'.$user_data->user_country.'">'.$user_data->user_country.'</option>
                                <option value="United States">United States</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Honduras">Honduras</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Panama">Panama</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Republica Dominicana">República Dominicana</option>
                                <option value="Rusia">Rusia</option>
                                <option value="Uruguay">Uruguay</option>
                            </select>
                        </div>  

                        <label>State / Province / Region</label>
                        <div class="mb-2">
                            <input type="text" class="form-control form-control-lg" placeholder="State / Province / Region"  id="state" name="state"   maxlength="60"  minlength="2"  value="'.$user_data->user_state.'">
                        </div>

                        <label>Address</label>
                        <div class="mb-2">
                            <input type="text" class="form-control form-control-lg" placeholder="Address"  id="address1" name="address1"   maxlength="60"  minlength="2"  value="'.$user_data->user_adress1.'">
                        </div>  


                        <label>Postal Code [ZIP]</label>
                        <div class="mb-2">
                            <input type="text" class="form-control form-control-lg" placeholder="12345"  id="postalcode" name="postalcode"  maxlength="5" minlength="5"  value="'.$user_data->user_postalcode.'">
                        </div>  

                        <label>Phone</label>
                        <div class="mb-1">
                            <input class="form-control form-control-lg" placeholder="+49 12345678957"  type="tel" id="phone" name="phone"  maxlength="60"  minlength="5"  value="'.$user_data->user_phone.'">
                        </div>

                
                        <div class="text-center">
                            <input  type="submit" value="Save" class="btn bg-gradient-dark w-100 mt-2 mb-0">
                        </div>
                
                    </form>
                </div> 
            </div>
         
        ';
    }else{
        $_SESSION['user_auth'] = false;
        $_SESSION['user_email'] = "";
    }
}else{
    echo '<html><head><meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Login"></head></html>';
}


















