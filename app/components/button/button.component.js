class ButtonComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const section = document.createElement('section')
        section.classList = 'button_container'
        section.innerHTML = `
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
                <button type="button" class="btn btn-success"></button>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

                    .button_container{
                        position: fixed;
                        bottom: 16px;
                        display: flex;
                        justify-content: center;
                        margin: 0 !important;
                        padding: 0 !important;
                        max-width: none !important;
                        width: 100%;
                        height: 46px;
                    }
                    
                    button{
                        width: 80%;
                        font-family: 'Inter' !important;
                        font-weight: 700 !important;
                        font-size: 16px !important;
                        border-radius: 3px !important;
                        background-color: #0CDAC3 !important;
                        color: white !important;
                        border-color: #0CDAC3 !important;
                        transition: all ease-in-out .2s;
                    }
                    
                    button:hover{
                        background-color: #0ab39f !important;
                    }
                </style>            
        `

        const button = section.querySelector('button')
        button.textContent = this.getAttribute('button-text')

        shadow.appendChild(section)
    }
}

customElements.define( 'easy-button', ButtonComponent );