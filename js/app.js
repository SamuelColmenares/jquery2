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
                    let cards = '';

                    contenido.forEach(usr => {
                        console.log('%cforeach email :>> ', 'background:purple;color:white', usr.email);
                        const card = `
                            <div class="card">
                                <div class="img-card">
                                    <img src="${usr.avatar}" alt="${usr.first_name}" class="img">
                                </div>
                                <div class="info-card">
                                    <h3>${usr.first_name} ${usr.last_name}</h3>
                                    <h4>${usr.email}</h4>
                                    <h4>ID: ${usr.id}</h4>
                                </div>
                            </div>`;

                        cards += card;
                    });

                    // $('.container-ajax').append(cards);
                    $('.container-ajax').html(cards);
                    /*$.each(contenido, function(i, val) {
                        console.log('%cforeach jQuery email ' + i + ' :>> ', 'background:green;color:white', val.email);
                    });

                    for (const usr in contenido) {
                        if (Object.hasOwnProperty.call(contenido, usr)) {
                            const element = contenido[usr];
                            console.log('%cfor in email :>> ', 'background:blue;color:white', element.email);
                        }
                    }*/
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