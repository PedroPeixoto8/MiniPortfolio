//alert("oi");
/*
------------OBJETIVOS-------------
-Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior.
-1-pegar os elementos que representam as abas no HTML.
-2-identificar o clique no elemento da aba.
-3-quando o usuário clicar, desmarcar a aba selecionada.
-4-marcar a aba clicada como selecionada.
-5-esconder o conteúdo anterior.
-6-mostrar o conteúdo da aba selecionada.
*/

//objetivo-1
const abas = document.querySelectorAll(".aba");
//objetivo-2
abas.forEach(aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        //objetivo-3
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado");

        //objetivo-4
        aba.classList.add("selecionado");

        //objetivo-5
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        //objetivo-6
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")

    });
});