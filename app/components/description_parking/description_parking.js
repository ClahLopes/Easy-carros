class ParkingComponent extends HTMLElement {
  constructor() {
      super();
  }

  // Essa função é rodada sempre que o componente é carregado pelo componente pai
  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});

    const section = document.createElement('section')
    section.innerHTML = `
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
          <script src="https://kit.fontawesome.com/1d122fde37.js" crossorigin="anonymous"></script>

          <div class="box_parking">
              <div class="icone">
                <img class="img_predio" src="../../../assets/predio.png" alt="Logo EasyCarros">
              </div>
              <div class="info_parking">
                  <h1 class="title_address"></h2>
                  <h2 class="hours">Horário de Funcionamento</h2>
                  <h2 class="week">
                  Segunda a Sexta - 07:00 às 23h00 </br>
                  Sábados: 07:00 às 23h00</br>
                  Domingos e Feriados: 08h00 às 22h00</h2>
              </div>
          </div>

          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

            .img_predio {
              width: 60px;
              height: 60px;
              margin-right: 20px;
            }

            .list_parking {
              display: flex;
              flex-direction: column;
              gap:15px;
            }

            .box_parking{
              display: flex;
              background-color: #FFFFFF;
              width: 100%;
              height: 130px;
              align-items: center;
              justify-content: center;
              padding: 20px 100px;
            }

            .title_address {
              font-size: 15px;
              color: rgba(0, 0, 0, 0.64);
            }
            
            .hours {
              font-size: 10px;
              color: rgba(0, 0, 0, 0.72);
              -webkit-text-stroke: 1px rgba(0, 0, 0, 0.72);
            }
            
            .week {
              font-size: 10px;
              color: rgba(0, 0, 0, 0.64)
            }

            
            @media (max-width: 768px){

              .list_parking {
                display: flex;
                width: 100%;
              }

              .info_parking{
                width: 200px;
              }

              .conteudo {
                width: 80%;
              }

              .div_search{
                width: 100%;
              }
              .box_parking {
                width: 100%;
                padding: 20px 20px;
              } 

            }

            @media (max-width: 363px) {
              .box_parking {
                transform: scale(0.9); /* Equal to scaleX(2) scaleY(0.5) */
                transform-origin: top center;
            }
            
            .info_parking {
              transform: scale(0.9); /* Equal to scaleX(2) scaleY(0.5) */
              transform-origin: top center;
            }
            }
          </style>
        `
        section.classList = 'list_parking'
        const header = section.children[3].children[1].children[0]
        header.textContent = this.getAttribute('texto')
        shadowRoot.appendChild(section)
  }
}

customElements.define( 'easy-parking', ParkingComponent );