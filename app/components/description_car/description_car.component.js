// Como estamos usando componentes sem estar usando um framework, o template tem que ser definido via js
const template = document.createElement('template')
template.innerHTML = `
        <section class="container">
            <div class="car">
                <img class="logo" src="../../../assets/car1.png" alt="Logo EasyCarros">
            </div>
            <div class="info-car">
                <h1 class="name_car">Hyundai HB20</h2>
                <h2 class="plate_car">PLACA: CVN1B47</h2>
                <h2 class="status_car">Disponível</h2>
                <div class="local">
                    <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                    <h3>R.Nilza, 850 Vila Esperança, São Paulo – SP - 03651120</h3>
                </div>
                <i class="fa-regular fa-circle-info"></i>
            </div>
        </section>
    <link rel="stylesheet" href="./app/components/description_car/description_car.component.css">
`

class DescriptionCarComponent extends HTMLElement {
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

customElements.define( 'description-car', DescriptionCarComponent );
