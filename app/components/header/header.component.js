// Como estamos usando componentes sem estar usando um framework, o template tem que ser definido via js
const template = document.createElement('template')
template.innerHTML = `
    <header>
        <section class="header_container">
            <img class="header_logo" src="../../../assets/logo/logo.svg" alt="Logo EasyCarros">
        </section>
    </header>
    <style>
        .header_container{
            position: absolute;
            display: block;
            z-index: 10000;
            width: 100%;
            height: 58px;
            top: 0px;
            background: #FFFFFF;
            border: 1px solid #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 0px 0px 10px 10px;
        }
        
        .header_logo{
            padding-left: 22px;
            width: 91.54px;
            height: 52.73px;
            object-fit: contain;
        }
    </style>
`

class HeaderComponent extends HTMLElement {
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

customElements.define( 'easy-header', HeaderComponent );