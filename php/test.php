<?php
// echo "HOLA";
// dd($_POST);

/*
    public function WS_DatosLlamadas( Request $request ){
        $ch = curl_init();

        // definimos la URL a la que hacemos la petición
        $URL        = "https://187.136.31.234/wbs.php?";
        $PARAMETERS = "fecha=".$request->fecha."&hora=".$request->hora."&telefono=".$request->telefono;
        // $URL = "https://192.168.1.76/wbs.php?fecha=2019-08-13&hora18:40&telefono=8341671427";
        
        curl_setopt($ch, CURLOPT_URL, $URL.$PARAMETERS);
        
        // check the existence of a common name in the SSL peer certificate.
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        // check the existence of a common name and also verify that it matches the hostname provided.
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        
        // indicamos el tipo de petición: POST
        curl_setopt($ch, CURLOPT_POST, TRUE);
        // definimos cada uno de los parámetros
        curl_setopt($ch, CURLOPT_POSTFIELDS, "  ");

        // recibimos la respuesta y la guardamos en una variable
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $remote_server_output = curl_exec ($ch);

        // cerramos la sesión cURL
        curl_close ($ch);

        // Retornamos el string obtenido convertido en json
        if( $remote_server_output == '[]' ){
            return [];
        }else{
            return json_decode($remote_server_output, true)[0];
        }
        // return json_decode($remote_server_output, true)[0];
    }
*/





// <?php
$URL = 'https://people-pro.com/xml-feed/indeed';

/*
$curl = curl_init();

curl_setopt_array($curl, [
    CURLOPT_URL => $URL,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    // CURLOPT_CUSTOMREQUEST => "POST",
    // CURLOPT_POSTFIELDS => $xml,
    CURLOPT_HTTPHEADER => [
        "Content-Type: application/xml"
    ]
]);



$response = curl_exec($curl);
$error = curl_error($curl);

curl_close($curl);

if ($error) {
    echo "cURL Error #:" . $error;
} else {
    echo $response;
}
*/


$curl = curl_init($URL);
// $curl_post_data = array(
//     "user_id" => 42,
//     "emailaddress" => 'lorna@example.com',
// );
// curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($curl, CURLOPT_POST, true);
// curl_setopt($curl, CURLOPT_POSTFIELDS, $curl_post_data);
$curl_response = curl_exec($curl);
curl_close($curl);

?>