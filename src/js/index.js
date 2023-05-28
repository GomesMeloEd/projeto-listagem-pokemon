/* COMENTARIO
O que precisamos fazer? - quando clicamos no botão de troca de tema,temos que alterar a cor do tema da pagina para as cores do tema claro ou tema escuro.

- objetivo 1 - quando clicar no botao de troca de tema, adicionar a classe modo-escuro no body pra que os estilos o modo escuro sejam aplicados e mudar a imagem pra lua.   
    - passo 1  - pegar no JS o elemento HTML correspondente ao botão de troca de tema
    -passo 2 - dar um eito de pegar no JS o elemento HTML corresponde ao body
    - passo 3 - dar um jeito de identificar o clique do usuario no botao de troca de tema
    - passo 4 - adicionar a classe modo-escuro no body.
    - passo 5 - trocar a imagem do botao de alterar tema para lua.

 - objetivo 2 - quando clicar no botao de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol.
    - passo 6 - remover a classe do modo-escuro do body.
    - passo 7 - trocar a imagem do botao de alterar tema pra sol
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema")
/*getElementById busca por um Id */
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
/* QuerySelector significa,consultar a uma classe ou tag, ''tu quer buscar o body?'' */

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
   
   body.classList.toggle("modo-escuro");
   
    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

/*o computador vai avisar que apertaram o botao de mudar o tema,evento de click */
/* no classList.add pegamos a lista de class do body e adicionamos o modo escuro */
/* adicionamos um novo atributo da lua,e colocamos a imagem da lua ao aperta o botao */


// finalizei adicionando a imagem de lua e sol, e coloquei o if e else. 

//o toggle funciona nos dois estados,para nao ter o remove e add de modo escuro,coloquei o toggle,ele funciona tanto no if ou else.


// a tag chamada classList,a funçao dela é pesquisar na tag do html se existe "tal" classe desejada.







