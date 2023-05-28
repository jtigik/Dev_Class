$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(12)34567-8901'
    });

    $('#cep').mask('00000-000', {
        placeholder: '11012-345'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '987.654.321-09'
    });

    $('#sendTo').click(function(e){
        // e.preventDefault();
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        }, 
        messages: {
            nome: 'Por favor, informe o nome da forma correta',
            telefone: 'Por favor, informe o telefone da forma correta',
            email: 'Por favor, informe o e-mail da forma correta',
            cep: 'Por favor, informe o CEP da forma correta',
            cpf: 'Por favor, informe o CPF da forma correta'
        }, 
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    })

    $('.lista_veiculos button').click(function(){

        const destino = $('#formulario');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo_interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})