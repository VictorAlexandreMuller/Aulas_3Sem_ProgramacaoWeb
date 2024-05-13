class Cliente {
    #nome;
    #idade;

    constructor(_nome, _idade) {
        this.#nome = _nome;
        this.#idade = _idade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(_nome) {
        this.#nome = _nome;
    }

    imprimir() {
        console.log(`Nome:${this.#nome} Idade: ${this.#idade}`);
    }
}
