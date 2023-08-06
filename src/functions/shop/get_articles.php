<?php

ob_clean();
header('Content-Type: application/json');

@$articles  = new Shop();
$jsonResponse = json_encode($articles->get_all_articles());
echo $jsonResponse;
