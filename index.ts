import { Hono } from "hono";
import type { User } from "./src/model/atividades.ts";

//Sei lá o q isso faz!
const app = new Hono()

let data: User[] = []

let id = 1

//função assincrona anonima que solicita uma busca por um elemento específico da API. Neste caso, sendo da página principal
app.get("/home", async c => {
    //Aplicar um valor ao elemento reconhecido como header da API.
    c.header("Mensagem-Customizada", "Bom Dia, Boa Tarde, Boa Noite e Boa Madrugada para vc! <3")
    
    // E Mostra na tela principal do servidor. neste caso sendo local, e mostrando a mensagem de "Boa tarde".
    return c.html("Boa Tarde")
})

//função assincrona anonima que solicita uma busca por um elemento específico da API. Neste caso, sendo do usuario.

//.get tendo sua sintaxe pela extensão do domínio e adicionamdo após uma vírgula o q irá ser executado na página criada pela alteração do domínio da página web. Neste caso, "/usuarios" adicionando ao domínio e a criação duma funçao anonima assincrona para pegar o obj. do user.
app.get("/informacoes", async c => {

    //retorna o objeto do usuario, mas por enquanto não faz nada com isso
    return c.json(data)
})
//função assincrona anonima que adiciona informação e cria uma nova extensão do domínio
//adicionando uma requisição ao servidor e exibindo no terminal.
app.post("/usuario", async c => {

    // variavel q armazena a requisição do json à API.
    let obj = await c.req.json()

    obj.id = id
    id++
    //armazena a requisição numa lista
    data.push(obj)
    // onde isso aparece?
    //resp:. no Postman...
    return c.json({status: "Recebido"}, 201)
})

app.get("/usuario/:id{[0-9]+}", async c => {
    let pid:any = c.req.param("id")
    pid = Number(pid)

    for (let obj of data){
        if(obj.id === pid) {
            return c.json(obj, 200)
            
        }
    }

    return c.json({status:"Não encontrado"}, 404)
})

app.delete("/usuario/:id{[0-9]+}", async c => {
    let pid:any = c.req.param("id")
    pid = Number(pid)

    const index = data.findIndex((v) => {
        return v.id  = pid
    })

    if (index === -1)
        return c.json({status:"Não encontrado"}, 404)

    data.splice(index, 1)

    return c.json({status:"deletado"}, 200)
})

//Manda para o mundo...
export default app

