$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown();
    })

    $('#botao_cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova_tarefa').val();
        const novoItem = $(`<li style="display: none"> ${novaTarefa} </li>`);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nova_tarefa').val('');

        $('li').click(function(){
            $(this).css('text-decoration', "line-through");
        })
    });
})