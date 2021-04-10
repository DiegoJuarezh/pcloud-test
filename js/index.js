APIData( printCards );

function printCards( json ){
    // console.log( json );
    // console.log( json.job );
    console.log( json.job[0] );


    let cardsList = '';
    json.job.map(function(item){
        // console.log(item.referencenumber);

        date_split = item.date.split(" ");
        fecha = date_split[0].split("-");
        fecha = fecha[2]+'/'+fecha[1]+'/'+fecha[0]
        hora  = date_split[1];

        cardsList += `
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"  data-referencenumber="${item.referencenumber}">
                <div class="card mb-4">
                    <div class="card-header">
                        <p class="h5 mb-0 card-title text-uppercase"><small class="text-muted">Empresa:</small> ${item.company}</p>
                    </div>
                    
                    <div class="card-body">
                        <p class="mb-1 h6 card-title"><b>Título:</b> ${item.title}</p>
                        <p class="mb-2 card-text"><b>Lugar:</b> ${item.city} ${item.state}, ${item.country}</p>
                        <p class="mb-0 card-text"><small class="text-muted"><b>Fecha de publicación:</b> ${fecha} ${hora}</small></p>
                    </div>
                    <div class="card-footer bg-transparent  border-0  list-group-item d-flex list-group-item-action justify-content-between align-items-center">
                        <p class="mb-0">Acciones:</p>
                        <a href="detalles.php/${item.referencenumber}" class="card-link Card_VerDetalles">Ver Detalle</a>
                    </div>
                </div>
            </div>
        `;
    });

    $('#cardsList').append( cardsList );

    $('.Card_VerDetalles').on('click', Card_VerDetalles);
}




function Card_VerDetalles(e){
    e.preventDefault();
    clearModal()
    $('#DetallesModal').modal('show');

    const data = {
        referencenumber : $(this).parent().parent().parent().attr('data-referencenumber')
    }
    // console.log( data );
    APIData( printDetalles, null, data );
}

function printDetalles( json, data ){
    const item = json.job.filter(function(item){
        return item.referencenumber == data.referencenumber;
    })[0];

    $('.Detalles_empresa').html( item.company );
    $('.Detalles_titulo').html( item.title );
    $('.Detalles_lugar').html(`${item.city} ${item.state}, ${item.country}`);
    $('.Detalles_description').html( item.description );

    date_split = item.date.split(" ");
    fecha = date_split[0].split("-");
    fecha = fecha[2]+'/'+fecha[1]+'/'+fecha[0]
    hora  = date_split[1];

    $('.Detalles_FechaPublicacion').html(`${fecha} ${hora}`);
}

function clearModal(){
    $('.Detalles_empresa').html(`CARGANDO...`);
    $('.Detalles_titulo').html(`CARGANDO...`);
    $('.Detalles_lugar').html(`CARGANDO...`);
    $('.Detalles_description').html(`CARGANDO...`);
    $('.Detalles_FechaPublicacion').html(`CARGANDO...`);
}

// Empresa: company
// Título: title
// Fecha de publicación: date
// Lugar: city, state, country
// Acciones: Ver detalle