let nome:string = "Pdiddy"

let idade:number = 67

const CPF:string | number = "123.456.789-10"

const qlqr:any = 10

let lista:string[] = ["Glyzi144", "Shino_keshin", "Gabstwoflow", "Origami_"]

const obj_1: {} = {num_camisa: 10,nome: "Reo Mikage",idade: 18 }

/*
const obj_2: 
{num_camisa:number,nome:string, idade:number} = 
{num_camisa:10, nome:"Reo Mikage",idade:18}
*/

const obj_2: user = {num_camisa:10, nome:"Reo Mikage",idade:18}

type user = {
    num_camisa: number,
    nome:string,
    idade: number
}

const obj_3: user ={
    num_camisa: 7,
    nome: "Seishiro Nagi",
    idade: 16
}

type tema = "claro" | "escuro" | "roxo" | "verde"

const meuTema:tema = "claro"

type HTTPCode = 200 | 201 | 400 | 401 | 404 | 500 | 301

function acesso(url:string):HTTPCode {
    if(url === "https://github.com/"){
        return 200
    }
    else if (url === "htttps://localhost:3000/"){
        return 500
    }
    else{
        return 404
    }

}
console.log(acesso("https://chess.com"))