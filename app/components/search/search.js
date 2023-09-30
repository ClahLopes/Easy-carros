const template = document.createElement('template')
template.innerHTML = `
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
              <script src="https://kit.fontawesome.com/1d122fde37.js" crossorigin="anonymous"></script>

                <div class="div_search">
                    <input type="text"></input>
                    <img class="pesquisa" src="../../../assets/pesquisa.png" alt="Logo EasyCarros">
                </div>

              <style>
                  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

                  .pesquisa {
                    width: 10px;
                    height: 10px;
                    margin-left: 20px;
                  }

                  .div_search {
                    display: flex;
                    width: 100%;
                    height: 30px;
                    border-radius: 10px;
                    background: #D9D9D9;
                    align-items: center;
                  }
                  
                  .div_search > input {
                    background-color: transparent;
                    border-color: transparent;
                    outline: none;
                    padding-left: 10px ;
                    width: 80%;
                  }    
              </style>            
      `

class SearchComponent extends HTMLElement {
  // O Construtor define propriedades que serão instanciadas junto com o componente, e que podem ser acessada depois caso sejam disponibilizadas para o componente pai
  constructor() {
      super();

      const shadowRoot = this.attachShadow({mode: 'closed'});
      // Clonar o template e adicionar ele ao DOM usando o shadowRoot
      shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Essa função é rodada sempre que o componente é carregado pelo componente pai
  connectedCallback() {
  }
}

customElements.define( 'easy-search', SearchComponent );