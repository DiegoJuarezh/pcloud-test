// const api = 'https://people-pro.com/xml-feed/indeed/';
const URL = 'https://people-pro.com/xml-feed/indeed/';

function APIData( success_fn = null, fail_fn = null, additional_data = null ){
    $.ajax({
        method: 'POST',
        url: 'php/back.php',
        dataType: 'XML',
        data : {
            msg : 'prueba'
        },
        success: function(response) {
            json = $.xml2json(response);

            if( additional_data != null ){
                success_fn( json, additional_data );
            }else{
                success_fn( json );
            }
        },
        fail: function(response) {
            console.log('error');
            console.log(response);
        }
    });
}