export class User {
    id:number
    email:string
    senha:string
    nome:string
    cpf:string

    constructor (id:number, email:string, senha:string, nome:string, cpf:string){
        this.id = id,
        this.email = email,
        this.senha = senha,
        this.nome = nome,
        this.cpf = cpf
    }
}