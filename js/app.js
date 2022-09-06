var resultado = null;
$(document).ready(function() {
    $('#btn-llamado').click(function() {
        $.ajax({
                url: 'https://reqres.in/api/users?page=2',
                success: function(res) {
                    resultado = res;
                    //console.log('data :>> ', res);
                    let contenido = res.data;
                    console.log('contenido :>> ', contenido);
                    for ()
                        contenido.forEach()
                    $.forEach()
                    for (key in contenido)
                },
                error: function(err) {
                    console.log('err :>> ', err);
                }
            })
            .done(function() {
                console.log('Finaliza ejecucion del ajax');
            });
    });
});