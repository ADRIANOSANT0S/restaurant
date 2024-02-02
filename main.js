$(document).ready(function () {
    // Aplica mascara ao campo telefone
    $('#phonumber').mask('(00) 0 0000-0000')

    // Validar formulario
    $('form').validate({
        rules: {
            fullname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            massage: {
                required: true
            }
        },
        //inseres menssagem personalizadas aos campos especificados.
        messages: {
            fullname: `Por favor, isira o seu nome e sobrenome`,
            email: `Por favor, isira o seu E-mail`,
            message: `Por favor, isira uma menssagem`
        },

        //verifica os campos não prenchidos do formulario
        invalidHandler: function(event, validador) {
            let camposInvalid = validador.numberOfInvalids()
            if (camposInvalid) {
                alert(`Existe ${camposInvalid} campos incorretos`)
            }
        }
    })

    // Desabilita o buttão do formulario caso o campo nome esteja incompleto
    $('form').on('submit', function(event) {
        event.preventDefault()
        const fullname = $('#fullname')

        if (fullname.val().split(' ').length < 2) {
            $('button').prop('disabled', true)

            fullname.css({
                border: '2px solid red'
            });
            
        }
    })

});