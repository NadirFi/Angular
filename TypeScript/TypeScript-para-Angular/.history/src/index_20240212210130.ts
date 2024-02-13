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

let soma: number = addNumber(4, 7);
console.log(soma);
console.log(addToHello("Nadir Filho"));

