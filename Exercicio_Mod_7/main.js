
const form = document.getElementById('formulario');

function comparar(num_a, num_b){
    
    let saida;

    if(num_a > num_b){
        saida = `O nº A (${num_a}) é maior que o nº B(${num_b})`;
    }else if(num_a < num_b){
        saida = `O nº A (${num_a}) é menor que o nº B(${num_b})`;
    }else{
        saida = `O nº A (${num_a}) é igual ao nº B(${num_b})`;
        
    }

    return saida;
}

form.addEventListener('submit', function(e){

    e.preventDefault();

    const numero_a = document.getElementById('prim_num');
    const numero_b = document.getElementById('seg_num');

    const menssagemSucesso = comparar(parseInt(numero_a.value), parseInt(numero_b.value));
    const ContainerMensagemSucesso = document.querySelector('.mensagem_retorno');

    ContainerMensagemSucesso.innerHTML = menssagemSucesso;

    ContainerMensagemSucesso.style.display = 'block';

    numero_a.value ='';
    numero_b.value ='';
})

