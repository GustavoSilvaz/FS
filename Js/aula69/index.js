class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.CamposSaoValidos();
    }

    CamposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll("error-text")) {errorText.remove();}

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.creiaErro(campo, `Campo '${label}' não pode estar em branco.`)
                valid = false;
            }
            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
    }

    validaUsuario(campo) {
        const usuario= campo.value;
        let valid = true;

        if(usuario.length > 12 || usuario < 3){
            this.creiaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.");
            valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.creiaErro(campo,"Nome de usuário precisa conter apenas letras ou números");
            valid = false;
        }
        return valid;
    }

    validaCpf(campo) {
        const cpf = new this.validaCpf(campo.value);

        if(!cpf.valid()) {
            this.creiaErro(campo, "CPF inválido")
        }
        return true;
    }

    creiaErro(campo, msg) {
        const div = document.createElement("div");
        div.innerHTML = msg;
        div.classList.add("error-text");
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();