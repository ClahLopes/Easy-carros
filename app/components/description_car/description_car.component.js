// Como estamos usando componentes sem estar usando um framework, o template tem que ser definido via js
const template = document.createElement('template')
template.innerHTML = `
    <section class="container">
        <div>
            <div class="car">
                <img class="img_carro" src="../../../assets/car1.png" alt="Logo EasyCarros">
            </div>
            <div class="info-car">
                <h1 class="name_car"></h2>
                <h2 class="plate_car">PLACA: CVN1B47</h2>
                <h2 class="status_car">Disponível</h2>
                <div class="div_local">
                    <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                    <h3 class="adress">R.Nilza, 850 Vila Esperança, São Paulo – SP - 03651120</h3>
                </div>
            </div>
            <div class="div_icon">
            <i class="fa-solid fa-info" id="icon"></i>
            </div>
        </div>

        <div>
            <div class="car">
                <img class="img_carro" src="../../../assets/car1.png" alt="Logo EasyCarros">
            </div>
            <div class="info-car">
                <h1 class="name_car"></h2>
                <h2 class="plate_car">PLACA: CVN1B47</h2>
                <h2 class="status_car">Disponível</h2>
                <div class="div_local">
                    <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                    <h3 class="adress">R.Nilza, 850 Vila Esperança, São Paulo – SP - 03651120</h3>
                </div>
            </div>
            <div class="div_icon">
            <i class="fa-solid fa-info" id="icon"></i>
            </div>
        </div>

        <div>
            <div class="car">
                <img class="img_carro" src="../../../assets/car1.png" alt="Logo EasyCarros">
            </div>
            <div class="info-car">
                <h1 class="name_car"></h2>
                <h2 class="plate_car">PLACA: CVN1B47</h2>
                <h2 class="status_car">Disponível</h2>
                <div class="div_local">
                    <i class="fa-sharp fa-solid fa-map-location-dot"></i>
                    <h3 class="adress">R.Nilza, 850 Vila Esperança, São Paulo – SP - 03651120</h3>
                </div>
            </div>
            <div class="div_icon">
            <i class="fa-solid fa-info" id="icon"></i>
            </div>
        </div>
        <style>
            body { 
                font-family: 'Inter', sans-serif;
                justify-content: center;
                align-items: center;
                display: flex;
            }
            
            .container{
                display: flex;
                flex-direction: column;
                background: #FFFFFF;
                width: 50%;
                height: 100px;
                align-items: center;
                justify-content: center;
                border: 1px solid #000;
                padding: 10px;
            }
            
            .car {
                padding: 10px;
            }
            
            .logo{
                padding-left: 22px;
                width: 91.54px;
                height: 52.73px;
            }
            
            .name_car {
                font-size: 15px;
                color: #3861D3;
            }
            
            .plate_car {
                font-size: 10px;
                color: rgba(0, 0, 0, 0.72);
            }
            
            .status_car {
                font-size: 10px;
                color: #1A7E28;
            }
            
            .adress {
                font-size: 10px;
                color: rgba(0, 0, 0, 0.72);
            }
            
            .div_local {
                display: flex;
                gap: 10px;
                align-items: center;
            }
            
            #icon {
                border: 2px solid #000;
                border-radius: 100% ;
                padding: 5.5px 10px;
            }
            
            .div_icon {
                display: flex;
                align-self: flex-start;
            }
        </style>
`

class DescriptionCarComponent extends HTMLElement {
    // O Construtor define propriedades que serão instanciadas junto com o componente, e que podem ser acessada depois caso sejam disponibilizadas para o componente pai
    constructor() {
        super();

        this._name = 'teste'
        this._plate = ''
        this._status = ''
        this._address = ''

        this.attachShadow({mode: 'open'});
        // Clonar o template e adicionar ele ao DOM usando o shadowRoot
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    set name(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set plate(plate) {
        this._plate = plate
    }
    
    get plate() {
        return this._plate
    }

    set status(status) {
        this._status = status
    }
    
    get status() {
        return this._status
    }

    set address(address) {
        this._address = address
    }
    
    get address() {
        return this._address
    }

    // Essa função é rodada sempre que o componente é carregado pelo componente pai
    connectedCallback() {
        this.shadowRoot.querySelector(".name_car").innerHTML = this._name
    }
}

customElements.define( 'description-car', DescriptionCarComponent );
