/**
 * Função pesquisar()
 * 
 * **Objetivo:** 
 *   Realiza uma pesquisa em um conjunto de dados (armazenado na variável global `dados`) e exibe os resultados em uma seção HTML.
 *   Para cada dado encontrado, cria um elemento HTML `<div>` com informações detalhadas sobre o dado, incluindo título, descrição e link para o Instagram.
 *   Insere todo o HTML gerado dentro do elemento HTML com o ID "resultados-pesquisa".
 *
 * **Funcionamento:**
 *   1. **Seleciona o elemento:** Obtém uma referência ao elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
 *   2. **Inicializa a string de resultados:** Cria uma string vazia para armazenar o HTML que será gerado.
 *   3. **Iteração:** Percorre cada elemento do array `dados` utilizando um loop `for...of`.
 *   4. **Construção do HTML:** Para cada elemento do array, cria uma nova string de HTML representando uma div com as informações do dado.
 *   5. **Concatenação:** Acrescenta a nova string de HTML à string `resultados`.
 *   6. **Inserção no DOM:** Substitui o conteúdo HTML do elemento "resultados-pesquisa" pela string `resultados` completa.
 */
function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada dado e constrói o HTML
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href=${dado.link} target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href=${dado.instagram} target="_blank">Instagram</a>
        </div>
      `;
    }

    // Insere o HTML gerado no elemento HTML selecionado
    section.innerHTML = resultados;
}