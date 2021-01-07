class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

// Factory
const pessoaFactory = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa1 = new Pessoa("Lucas");
pessoa1.falar();

const pessoa2 = pessoaFactory("Jéssica");
pessoa2.falar();