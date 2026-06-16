import { criar, obter, listar, modificar, remover } from "./client.js";

async function main() {
    let resposta = await criar({ nome: "banana", preco: 12.50, unidade: "kg"});
    console.log("Produto criado...", resposta);

    resposta = await listar();
    console.log("Produtos listados...", resposta);

    resposta = await obter(resposta[0]);
    console.log("Produto consultado...", resposta);

    resposta = await modificar({
        id: resposta.id,
        nome: "banana nanica",
        preco: 19.90,
        unidade: "kg"
    });
    console.log("Produto atualizado...", resposta);

    resposta = await remover (resposta);
    console.log("Produto removido...", resposta);
}

main();