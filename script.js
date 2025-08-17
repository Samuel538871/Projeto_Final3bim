document.addEventListener('DOMContentLoaded', function(){
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

  if (botaoDeAcessibilidade) {
    botaoDeAcessibilidade.addEventListener('click', function (){
      botaoDeAcessibilidade.classList.toggle('rotacao-botao');
      opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

      const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
      botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })
  }

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  if (aumentaFonteBotao) {
    aumentaFonteBotao.addEventListener('click', function(){
      tamanhoAtualFonte += 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
  }

  if (diminuiFonteBotao) {
    diminuiFonteBotao.addEventListener('click', function(){
      tamanhoAtualFonte -= 0.1;
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
  }

  if (alternaContraste) {
    alternaContraste.addEventListener('click', function(){
      document.body.classList.toggle('alto-contraste')
    })
  }
})

// ScrollReveal animações
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#produtos', { delay: 500 });
ScrollReveal().reveal('#sobre', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
