<?php

$err = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    @$register = new Session();
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $name = $_POST['name'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $address1 = $_POST['address1'];
    $postalcode = $_POST['postalcode'];
    $phone = $_POST['phone'];

    
    if(is_object($register->get_user_by_email($email))){
        $err = '<h1 style="color:red; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">The email already exists.</h1>';
    }else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $err = '<h1 style="color:red; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">Please enter a valid email.</h1>';
    }else if($password != "" && strlen($password) < 5){
        $err = '<h1 style="color:red; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">Please enter a valid password.</h1>';
    }else{
        $_SESSION['user_auth'] = true;
        $_SESSION['user_email'] = $email;
        $register->register_new_user($email,$password,$name,$country,$state,$address1,"",$postalcode,$phone);
        echo '
            <html>
                <head>
                    <meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Profile">
                </head>
            </html>
        ';

    }
}



echo '
<script src="./js/session.js"></script>
<section class="">
<div style="min-height: calc(100vh - 85px);"  class="page-header">
    <div class="container">
        <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div class="card card-plain">
                    <div class="card-header bg-transparent pb-0 text-left">
                        <h4 class="font-weight-bolder" >Sign Up - Step <span id="title-form">1</span> / 2</h4>
                        <p class="mb-0" id="info-form">Enter your email and password to register</p>
                        '.$err.'
                    </div>
                    <div class="card-body pb-3">
                        <form class="row" method="POST"  onsubmit="return register();"  id="">
                                  
                        <div id="step1">
                            <label>Email</label>
                            <div class="mb-3">
                                <input   id="email" name="email"       type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" maxlength="60" >
                            </div>
                            
                            <label >Password</label>
                            <div class="mb-3">
                                <input     id="password" name="password"     type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" maxlength="20" >
                            </div>
                            <label >Confirm Password</label>
                            <div class="mb-3">
                                <input  id="confirm_password" name="confirm_password"       type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" maxlength="20" >
                            </div>
                        
                            
                            <div class="text-center">
                                <button onclick="next_step();" type="button" class="btn bg-gradient-dark w-100 mt-4 mb-0">Next Step</button>
                            </div>
                        </div>

                        <div id="step2" hidden="true">

                            <label>Full Name</label>
                            <div class="mb-2">
                                <input type="text" class="form-control form-control-lg" placeholder="John Roe" id="name" name="name"  maxlength="60">
                            </div>

                            <label>Select Country</label>
                            <div class="mb-2">
                                <select class="form-control form-control-lg"  id="country" name="country">
                                    <option value="none">Select Country</option>
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
                                <input type="text" class="form-control form-control-lg" placeholder="State / Province / Region"  id="state" name="state"   maxlength="60"  minlength="2">
                            </div>

                            <label>Address</label>
                            <div class="mb-2">
                                <input type="text" class="form-control form-control-lg" placeholder="Address"  id="address1" name="address1"   maxlength="60"  minlength="2">
                            </div>  


                            <label>Postal Code [ZIP]</label>
                            <div class="mb-2">
                                <input type="text" class="form-control form-control-lg" placeholder="12345"  id="postalcode" name="postalcode"  maxlength="5" minlength="5">
                            </div>  

                            <label>Phone</label>
                            <div class="mb-1">
                                <input class="form-control form-control-lg" placeholder="+49 12345678957"  type="tel" id="phone" name="phone"  maxlength="60"  minlength="5" >
                            </div>

                        
                            <div class="form-check form-check-info text-left">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked="false">
                                <label class="form-check-label" for="flexCheckDefault">
                                    I agree the <a  class="text-dark font-weight-bolder">Terms and Conditions</a>
                                </label>
                            </div>

                            <div class="text-center">
                                <input  type="submit" value="Register" class="btn bg-gradient-dark w-100 mt-2 mb-0">
                            </div>
                        
                        </div>













                        </form>
                    </div>
                    <div class="card-footer text-center pt-0 px-sm-4 px-1">
                        <p class="mb-4 mx-auto">
                            Already have an account?
                            <a href="'.BASE_URL.'?p=Login" class="text-primary text-gradient font-weight-bold">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                <div class="position-relative bg-gradient-dark h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                <img src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/shapes/pattern-lines.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0">
                    <div class="position-relative">
                        <img class="max-width-500 w-100 position-relative z-index-2" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/rocket-white.png" alt="image">
                    </div>
                    <h4 class="mt-5 text-white font-weight-bolder">"Your shopping journey begins here."</h4>
                    <p class="text-white">Just as it takes a company to sustain a clothing product, it takes a community.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

';
