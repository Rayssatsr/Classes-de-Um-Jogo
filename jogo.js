
class Heroi {
   
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

    
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago = new Heroi("Merlin", 45, "mago");
let guerreiro = new Heroi("Thor", 30, "guerreiro");
let monge = new Heroi("Lian", 50, "monge");
let ninja = new Heroi("Ryu", 35, "ninja");


mago.atacar();       
guerreiro.atacar();   
monge.atacar();       
ninja.atacar();      
