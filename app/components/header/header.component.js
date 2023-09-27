// Como estamos usando componentes sem estar usando um framework, o template tem que ser definido via js
const template = document.createElement('template')
template.innerHTML = `
    <header>
        <section class="container">
            <img class="logo" src="../../../assets/logo/logo.svg" alt="Logo EasyCarros">
        </section>
    </header>
    <link rel="stylesheet" href="./app/components/header/header.component.css">
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