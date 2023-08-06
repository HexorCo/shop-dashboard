<?php

$err = "";
@$code = $_GET['c'];
@$session = new Session();
@$code = $session->get_code($code);
if($code != "" && is_object($code)){
    $limit24H = 24 * 60 * 60;
    $start = $code->code_created;
    $end = date("m-d-Y H:i:s");
    $ee = strtotime($start) - strtotime($end);
    if($ee <= $limit24H){
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if($_POST['password'] == $_POST['confirm_password']){
                $session->new_password($code->code_email,$_POST['password']);
                $session->delete_code_by_email($code->code_email);  
                echo '<html><head><meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Profile"></head></html> ';
            }else{
                $err = '<h1 style="color:red; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">The two passwords are not the same</h1>';
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
                                        <h4 class="font-weight-bolder" >Reset Password</h4>
                                        <p class="mb-0" id="info-form">Enter your new Password</p>
                                        '.$err.'
                                    </div>
                                    <div class="card-body pb-3">
                                        <form class="row" method="POST"  onsubmit="return resetpassword();"  id="">

                                                <label >Password</label>
                                                <div class="mb-3">
                                                    <input     id="password" name="password"     type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" maxlength="20" minlength="5" required>
                                                </div>
                                                <label >Confirm Password</label>
                                                <div class="mb-3">
                                                    <input  id="confirm_password" name="confirm_password"       type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" maxlength="20" minlength="5" required>
                                                </div>


                                                <div class="text-center">
                                                    <input  type="submit" value="Reset Password" class="btn bg-gradient-dark w-100 mt-2 mb-0">
                                                </div>
                                        </form>
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
    }else{
        echo "<h1>The expired code is invalid</h1>";
        echo '<a href="'.BASE_URL.'?p=ResetPassword">Resend Code</a>';
    }
    
}else{
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $user = $session->get_user_by_email($_POST['email']);
        if(is_object($user)){
            $code_e = $session->get_code_by_email($_POST['email']);
            if(is_object($code_e)){
                $session->delete_code_by_email($_POST['email']);    
            }

            $main = new main();
            $session->register_new_codes($main->randomNumber(7),$_POST['email']);
            $err = '<h1 style="color:green; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">The code has been sent successfully</h1>';
        }else{
            $err = '<h1 style="color:red; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">The email does not exist</h1>';
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
                                    <h4 class="font-weight-bolder" >Reset Password</h4>
                                    <p class="mb-0" id="info-form">Enter your email to send code</p>
                                    '.$err.'
                                </div>
                                <div class="card-body pb-3">
                                    <form class="row" method="POST"  onsubmit="return sendcode();"  id="">
                                            <label>Email</label>
                                            <div class="mb-3">
                                                <input   id="email" name="email" type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" maxlength="60" >
                                            </div>
                                            <div class="text-center">
                                                <input  type="submit" value="Send Code" class="btn bg-gradient-dark w-100 mt-2 mb-0">
                                            </div>
                                    </form>
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
}







