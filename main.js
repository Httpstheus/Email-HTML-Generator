$(document).ready(function(){
  $('#enviar').on('click', validarDados);

  function validarDados() {
    let tipo           = $('#tipo').val();

    switch(tipo) {
      // Message for Option == Universidade Play
      case 'Universidade Play':
          document.getElementById('img-header-logo').innerHTML="<img src=\"images/UniPlay.png\" width=\"500px\">";
          document.getElementById('title-message').innerHTML = 'Universidade Play';
          document.getElementById('first-paragraph').innerHTML ='Lorem ipsum dolor Universidade Play!';


          break;
          // Message for Option == Faculdade Play
      case 'Bookplay':
          document.getElementById('img-header-logo').innerHTML="<img src=\"images/Bookplay.png\" width=\"500px\">";
          document.getElementById('title-message').innerHTML = 'Exemplo Bookplay';    
          document.getElementById('first-paragraph').innerHTML ='Lorem ipsum dolor Bookplay!';
          
            
          break;

      // Message for Option == Bookplay
      case 'Edit Brasil':
        document.getElementById('img-header-logo').innerHTML="<img src=\"images/Edit.png\" width=\"500px\">";
        document.getElementById('title-message').innerHTML = 'Exemplo Edit Brasil';    
        document.getElementById('first-paragraph').innerHTML ='Lorem ipsum dolor Edit Brasil!';             
          break;
    }
  } 
    //Here we are to creat a message :xD
  function montarMensagem(mensagem) {
    // CRIA A DIV DE RESPOSTA
    let resposta = document.createElement('div');

    // CRIA A DIV DE MENSAGEM
    let divMensagem = document.createElement('div');
    divMensagem.innerHTML = mensagem;

    // CRIA A DIV DE CONFIRMAÇÃO
    let divConfirmacao = document.createElement('div')


    resposta.appendChild(divMensagem);
    resposta.appendChild(divConfirmacao);

    document.getElementById('resposta').appendChild(resposta);

    // ADICIONA O EVENTO DA OPÇÃO QUE O USUÁRIO PREFERE
    let itens = document.querySelectorAll('.item-confirmacao');
    itens.forEach(item => {
      item.addEventListener('click', () => {
        alert(item.getAttribute('data-selecionado'));
      });
    });
  }
});