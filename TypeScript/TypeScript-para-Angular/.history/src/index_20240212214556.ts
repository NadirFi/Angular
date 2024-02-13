let ligado:boolean = false;
let nome:string = "Nadir Filho";
let idade:number = 27;
let altura:number = 1.75;

let nulo:null = null;
let indefinido:undefined = undefined;

let retorno:void;
let retornoView:any = false;

//objeto - sem previsibilidade.
let produto:object = {
    name:"Nadir",
    cidade: "MG",
    idade: "27"
};

//Objeto tipado - com previsibilidade.
type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: produtoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
}

/**
 * arrays
 */

let dados: string[] = ["Nadir", "Sueli", "julia", "Jordana"];   //maneira 1
let dados2: Array<String> = ["Nadir", "Sueli", "julia", "Jordana"];  // maneira 2

let infos: (string | number)[] = ["Nadir", "Jodana", 27, 2];   //vetor que armazena dois tipos de valor

/**
 * Tuplas
 */

let boleto:[string, number, number] = ["Agua conta", 199.90, 117291011111];


/**
 * Array metodos
 * mesmos metodos usados no JS
 */


// Tipo especifico para armazenar datas.
let aniversario:Date = new Date("2024-02-13 14:37");
console.log(aniversario.toString());


//funções

function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name:string): string {
    return `Hello ${name}`;
}

//function com mais de um tipo;
function callToPhone(phone: number | string): number | string {
    return phone;
}

let soma: number = addNumber(4, 7);

console.log(soma);
console.log(addToHello("Nadir Filho"));

//funções async retorna sempre uma promise, sempre declarando seu tipo.
async function getDataBase(id: number): Promise<string> {
    return "Nadir";
}


//interfaces (type x interface)
type robot = {
    id: number;
    name: string;
};

interface robot2 {
    id: number | string;
    name: string;
    readonly cod: string | number;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: "MegaMan",
};

const bot2: robot2 = {
    id: 1,
    name: "MegaMan",
    cod: 123456789,
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot);
console.log(bot2);

//////////////////////////////////////////////////////////////////////////////////////////////

class Pessoa implements robot2 {
    id: number | string;
    name: string;
    cod: string | number;
    
    constructor(id: string | number, name: string, cod: string | number) {
        this.id = id;
        this.name = name;
        this.cod = cod;
    }
    
    sayHello(): string {
        return `Hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Nadir Filho", 123456789);
console.log(p.sayHello());

//classes

class Character {
    name?: string;
    stregth: number;
    skill: number;
    
    constructor(name: string, streght: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.streght} points`);
        
    }
}

const p1 = new Character(10, 98);
console.log(p1);
