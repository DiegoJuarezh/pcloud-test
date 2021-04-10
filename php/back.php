<?php
$URL = 'https://people-pro.com/xml-feed/indeed';

$curl = curl_init($URL);
$response = curl_exec($curl);
curl_close($curl);
/*
$error = curl_error($curl);

if ($error) {
    echo "cURL Error #:" . $error;
} else {
    echo $response;
}*/
?>