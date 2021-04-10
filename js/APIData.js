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
            // console.log(response);
            json = $.xml2json(response);
            // console.log(json);
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

// Empresa: company
// Título: title
// Fecha de publicación: date
// Lugar: city, state, country
// Acciones: Ver detalle