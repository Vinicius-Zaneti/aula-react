import "./style.css"
import { useState } from "react"
import CardServicos from "../../components/CardServicos"
// import Logo from "../../assets/img/logo.svg"
// import imgfacebook from "../../assets/img/facebook.svg"
// import imginstagram from "../../assets/img/instagram.svg"
// import imglinkedin from "../../assets/img/linkedin.svg"
export default function ListaServicos() {

  // function mostrarMenu(){
  //     let menu = document.getElementById("menu_links") as HTMLCanvasElement; // Obtém o elemento do menu pelo ID
  //     let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
  //     let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

  //     let body: any = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)

  //     if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
  //       menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
  //       sombra.style.right = "-10vw"; // Move a sombra para a direita
  //       menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
  //       menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
  //       body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
  //   } else {
  //       menu.style.left = "-300px"; // Esconde o menu deslocando-o para esquerda
  //       sombra.style.right = "110vw"; // Move a sombra para a esquerda para ocultá-la
  //       menu_barras.setAttribute("aria-expanded", "false"); // Atualiza o atributo 'aria-expanded' para 'false'
  //       menu_barras.setAttribute("aria-label", "abrir menu"); // Atualiza o atributo 'aria-label' para 'abrir menu'
  //       body.style.overflow = "auto"; // Restaura o overflow do body para o valor padrão (auto)
  //   }
  //   menu_barras.classList.toggle("ativo"); // Alterna a classe 'ativo' no botão do menu
  // }

  const [produtos, setProdutos] = useState<any[]>([{
    titulo: "Desenvolvimento de site institucional - Gateway de Pagamento/ Fintech",
    preco: "R$ 1300,00",
    texto: " Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
    skills: ["HTML", "CSS", "REACT"]
  },
  {
    titulo: "Bot telegram Pagamento",
    preco: "R$ 2400,00",
    texto: "  Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
    skills: ["PYTHON"]
  },
  {
    titulo: "Caixa Rápido",
    preco: "R$ 1200,00",
    texto: " Preciso fazer um software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
    skills: ["PYTHON"]
  },
  ])

  const [skillDigitada, setSkillDigitada] = useState<string>("")

  const [listaProdutosFiltrados, setListaProdutosFiltrados] = useState<any[]>(produtos)

  function buscarPorSkill(event: any) {
    event.preventDefault()

    const produtosFiltrados = produtos.filter((produto: any) => produto.skills.includes(skillDigitada.toLocaleUpperCase()))

    if (produtosFiltrados.length === 0) {
      alert("Nenhum produto foi encontrado com essa skill")
    } else {
      setListaProdutosFiltrados(produtosFiltrados)
    }
  }

  function retornoProdutosGeral(event: any) {
    if (event.target.value === "") {
      setListaProdutosFiltrados(produtos)
    }

    setSkillDigitada(event.target.value)
  }
  return (
    <>

      <main id="lista-servicos">
        <div className="container container_lista_servicos">
          <div className="lista_servicos_conteudo">
            <h1>Lista de Serviços</h1>
            <hr />
            <form method="post" onSubmit={buscarPorSkill}>
              <div className="wrapper_form">
                <label htmlFor="busca">Procurar serviços</label>
                <div className="campo-label">
                  <input
                    type="search"
                    name="campo-busca"
                    id="busca"
                    placeholder="Buscar serviços por tecnologias..." onChange={retornoProdutosGeral}
                  />
                  <button type="submit">Buscar</button>
                </div>
              </div>
            </form>
            <div className="wrapper_lista">
              <ul>
             
                {listaProdutosFiltrados.map((produto: any, index: number) => {
                  return <li>
                    <CardServicos
                      titulo={produto.titulo}
                      preco={produto.preco}
                      texto={produto.texto}
                      techs={produto.skills}

                    />
                  </li>
                }
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}
