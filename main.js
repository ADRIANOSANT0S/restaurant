$(document).ready(function () {
    let camposInvalidos = 0; // Variável para armazenar a quantidade de campos inválidos
    let mensagemExibida = false; //Variável que garante que vai ser exibido apenas um alert de campos inválidos.

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
            message: {
                required: true
            }
        },
        //inseres menssagem personalizadas aos campos especificados.
        messages: {
            fullname: `Por favor, isira o seu nome e sobrenome`,
            email: `Por favor, isira o seu E-mail`,
            message: `Por favor, isira uma menssagem`
        },

        invalidHandler: function(event, validator) {
            camposInvalidos = validator.numberOfInvalids(); // Atualiza o número de campos inválidos
            if (camposInvalidos && !mensagemExibida) { // Verifica se há campos inválidos e se a mensagem ainda não foi exibida
                alert(`Existe ${camposInvalidos} campo(s) incorreto(s)`);
                mensagemExibida = true; // Define a flag como true para indicar que a mensagem foi exibida
            }
        }

    })

    // Desabilita o buttão do formulario caso o campo nome esteja incompleto
    $('form').on('submit', function(event) {
        event.preventDefault()

        let form = $('form');
        let modal = new bootstrap.Modal(document.getElementById('myModal'));

        const fullname = $('#fullname');
        const email = $('#email');
        const message = $('#message');

        if (form.valid()) {
            modal.show();
            fullname.val('');
            email.val('');
            $('#phonumber').val('');
            message.val('');
            mensagemExibida = false;
        }
    })

});