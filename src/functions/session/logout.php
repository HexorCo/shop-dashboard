<?php

    $_SESSION['user_auth'] = false;
    $_SESSION['user_email'] = "";
    echo '
        <html>
            <head>
                <meta http-equiv="REFRESH" content="0;url='.BASE_URL.'">
            </head>
        </html>
    ';