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

                    contenido.forEach(usr => {
                        console.log('%cforeach email :>> ', 'background:purple;color:white', usr.email);
                    });

                    $.each(contenido, function(i, val) {
                        console.log('%cforeach jQuery email ' + i + ' :>> ', 'background:green;color:white', val.email);
                    });

                    for (const usr in contenido) {
                        if (Object.hasOwnProperty.call(contenido, usr)) {
                            const element = contenido[usr];
                            console.log('%cfor in email :>> ', 'background:blue;color:white', element.email);
                        }
                    }
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