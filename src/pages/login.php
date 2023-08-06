<?php
$err = "";
if($_SESSION['user_auth'] == true){
    echo '<html><head><meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Profile"></head></html> ';
}else{

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        @$register = new Session();
        @$user = $register->get_user_by_email($_POST['email']);
    
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $err = "<h1>Por favor, ingresa un email válido.</h1>";
        }else if(is_object($user)){   
            if($user->user_pass == $_POST['password']){
                $_SESSION['user_auth'] = true;
                $_SESSION['user_email'] = $user->user_email;
                echo '<html><head><meta http-equiv="REFRESH" content="0;url='.BASE_URL.'?p=Profile"></head></html> ';
            }else{
                $err = '<h1 style="color:red; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">Password Incorrect !</h1>';
            }
        }else{
            $err = '<h1 style="color:red; letter-spacing:1px; margin-bottom:-10px; font-size:14px;">There is no registered user with that email</h1>';
        }
    }

    
    echo '   
    <script src="./js/session.js"></script>
     
    <section class="">
    <div style="min-height: calc(100vh - 85px);" class="page-header ">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                    <div class="card card-plain">
                        <div class="card-header pb-0 text-left bg-transparent">
                            <h4 class="font-weight-bolder">Sign In</h4>
                            <p class="mb-0">Enter your email and password to sign in</p>
                            '.$err.'
                        </div>
                        <div class="card-body">
                            <form method="POST" >
                                <div class="mb-3">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="email-addon"  id="email" name="email" required>
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" id="password" name="password" required minlength="5">
                                </div>
                                <a href="'.BASE_URL.'?p=Resetpassword" class="text-primary text-gradient">Forgot Password?</a>
                                <div class="text-center">
                                    <input type="submit"  class="btn btn-lg bg-gradient-dark btn-lg w-100 mt-4 mb-0" value="Login">   
                                </div>
                            </form>
                            
                            
                        </div>
                        <div class="card-footer text-center pt-0 px-lg-2 px-1">
                            <p class="mb-4 text-sm mx-auto">
                                Don t have an account?
                                <a href="'.BASE_URL.'?p=Register" class="text-primary text-gradient font-weight-bold">Sign up</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                    <div class="position-relative bg-gradient-dark h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                        <img src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/shapes/pattern-lines.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0">
                        <div class="position-relative">
                            <img class="max-width-500 w-100 position-relative z-index-2" src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/illustrations/rocket-white.png">
                        </div>
                        <h4 class="mt-5 text-white font-weight-bolder">"Focus is the new fashion currency"</h4>
                        <p class="text-white">The greater the elegance in the design, the more dedication in the preparation.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    
    ';
    
}