<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
    <main class="container mt-5">

        <p class="h2 text-uppercase">Listado de vacantes:</p>

        <br>

        <div class="row" id="cardsList">
            <section class="col-12">
                CARGANDO...
            </section>
        </div>
    </main>

    <!-- Modal -->
    <div class="modal fade" id="DetallesModal" tabindex="-1" aria-labelledby="DetallesModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="DetallesModalLabel">Detalles de Vacante</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul class="list-group">
                        <li class="list-group-item d-flex list-group-item-action justify-content-between align-items-center">
                            <p class="mb-0 text-muted">Empresa:</p>
                            <section class="Detalles_empresa text-uppercase">CARGANDO...</section>
                        </li>
                        <li class="list-group-item d-flex list-group-item-action justify-content-between align-items-center">
                            <p class="mb-0 text-muted">Título:</p>
                            <section class="Detalles_titulo">CARGANDO...</section>
                        </li>
                        <li class="list-group-item d-flex list-group-item-action justify-content-between align-items-center">
                            <p class="mb-0 text-muted">Lugar:</p>
                            <section class="Detalles_lugar">CARGANDO...</section>
                        </li>
                        <li class="list-group-item">
                            <p class="mb-1 text-muted">Descripción:</p>
                            <section class="Detalles_description">CARGANDO...</section>
                        </li>
                        <li class="list-group-item d-flex list-group-item-action justify-content-between align-items-center">
                            <p class="mb-0 text-muted">Fecha de publicación:</p>
                            <section class="Detalles_FechaPublicacion">CARGANDO...</section>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    <!-- MODALS -->

    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/jquery.xml2json.js"></script>
    <script src="js/ApiData.js"></script>
    <script src="js/index.js"></script>
</body>
</html>