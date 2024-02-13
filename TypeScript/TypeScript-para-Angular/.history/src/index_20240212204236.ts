let ligado:boolean = "false";
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