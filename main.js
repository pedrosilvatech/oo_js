// Classe base: Veículo
class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }

    // Método comum a todos os veículos
    exibirDetalhes() {
        console.log(`Marca: ${this.marca}, Ano: ${this.ano}`);
    }
}

// Classe derivada: Carro (herda de Veiculo)
class Carro extends Veiculo {
    constructor(marca, ano, modelo) {
        super(marca, ano); // Chama o construtor da classe base (Veiculo)
        this.modelo = modelo;
    }

    // Método específico para Carro
    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Modelo do Carro: ${this.modelo}`);
    }
}

// Classe derivada: Moto (herda de Veiculo)
class Moto extends Veiculo {
    constructor(marca, ano, cilindrada) {
        super(marca, ano); // Chama o construtor da classe base (Veiculo)
        this.cilindrada = cilindrada;
    }

    // Método específico para Moto
    exibirDetalhes() {
        super.exibirDetalhes();
        console.log(`Cilindrada da Moto: ${this.cilindrada}cc`);
    }
}

// Criação de instâncias
const carro1 = new Carro("Toyota", 2022, "Corolla");
const carro2 = new Carro("Honda", 2021, "Civic");
const moto1 = new Moto("Yamaha", 2020, 250);

// Exibindo detalhes das instâncias
carro1.exibirDetalhes();
carro2.exibirDetalhes();
moto1.exibirDetalhes();
