//Exercicio 1
/*function executarTarefa(tarefa) {
    console.log(`Iniciando a tarefa...`)
    tarefa()
    console.log(`Tarefa concluida`)
}
function lavarLouca() {
    console.log(`Lavando a louca...`)
}
executarTarefa(lavarLouca)*/

//Exercicio 2
/*function mostrarMensagem() {
  console.log("2 - Callback executado!");
}

function executar(fn) {
  console.log("1 - Antes do callback");
  fn();
  console.log("3 - Depois do callback");
}

executar(mostrarMensagem()); // A função está sendo usada com paratenses por isso o erro, o que ocorre é uma leitura do js em que a função está sendo clonada!O correto é sem os parênteses
executar(mostrarMensagem);*/

//Exercicio 3
/*function cadastrarAluno(nome,avisar) {
    console.log(`Cadastrando ${nome}...`)
    avisar(nome)
}
function enviarBoasVindas(aluno) {
    console.log(`${aluno}, seja bem-vindo(a) à Coude!`)
}
cadastrarAluno("Luma",enviarBoasVindas)
cadastrarAluno("Davi",enviarBoasVindas)*/

//Exercicio 4
/*function entregarEncomenda(pacote, avisar) {
    console.log(`Saiu para entrega: ${pacote}`)
    avisar(pacote)
}
function receber(pacote) {
    console.log(`${pacote} entregue na portaria`)
}
entregarEncomenda("livro", receber)
entregarEncomenda("celular", function (pacote) {console.log(`${pacote} entregue em mãos`)})
entregarEncomenda("tênis", (pacote)=>console.log(`${pacote} deixado com vizinho`))*/

//Exercicio 5
/*function processarPagamento(valor, pagar) {
    console.log(`Processando pagamento de R$ ${valor}...`)
    pagar(valor)
}
function pagarNoPix(valor) {
    console.log(`Pix de R$ ${valor} recebido na hora!`)
}
function pagarNoCartao(valor) {
    console.log(`Cartão aprovado: R$ ${valor} em 1x`)
}
function pagarNoBoleto(valor) {
    console.log(`Boleto de R$ ${valor} gerado. Vence em 3 dias.`)
}
processarPagamento("50", pagarNoPix)
processarPagamento("120", pagarNoCartao)
processarPagamento("89.9", pagarNoBoleto)*/

//Exercicio 6
/*function aplicar(numero, operacao) {
    operacao(numero)
}
aplicar(7, (valor)=>console.log(valor*2))
aplicar(7, (valor)=>console.log(valor*3))
aplicar(7, (valor)=>console.log(valor**2))
aplicar(7, (valor)=>console.log(valor/2))*/

//Exercicio 7
/*function calcular(a, b, operacao) {
    operacao(a,b)
}
function somar(x,y) {
    console.log(`x+y=${x+y}`)
}
function subtrair(x,y) {
    console.log(`x-y=${x-y}`)
}
function dividir(x,y) {
    console.log(`x/y=${x/y}`)
}
function multiplicar(x,y) {
    console.log(`x*y=${x*y}`)
}
function resto(x,y) {
    console.log(`x%y=${x%y}`)
}
calcular(17,5,somar)
calcular(17,5,subtrair)
calcular(17,5,dividir)
calcular(17,5,multiplicar)
calcular(17,5,resto)*/

//Exercicio 8
/*function formatarTexto(texto, formatador) {
    formatador(texto)
}
formatarTexto("  JavaScript é Legal  ", (texto)=> console.log(texto.toUpperCase()))
formatarTexto("  JavaScript é Legal  ", (texto)=> console.log(texto.toLowerCase()))
formatarTexto("  JavaScript é Legal  ", (texto)=> console.log(texto.trim()))
formatarTexto("  JavaScript é Legal  ", (texto)=> console.log(">>>"+texto.trim()+"<<<"))
formatarTexto("  JavaScript é Legal  ", (texto)=> console.log(texto.trim().length))*/

//Exercicio 9
/*function contagemRegressiva(inicio,aoTerminar) {
    for(inicio; inicio>=1;inicio--) {
        console.log(inicio)
    }
    aoTerminar()
}
contagemRegressiva(5, ()=>console.log("Feliz Ano Novo!"))
contagemRegressiva(3,()=>console.log("Foguete lançado!"))*/

//Exercicio 10
/*const frutas = ["Maçã", "Banana", "Uva", "Abacaxi"]
function paraCada(lista, fn) {
    let o=lista.length
    for(let i=0;i<o;i++) {
        fn(lista[i], i)
    }
}
paraCada(frutas, (item, indice)=> console.log(`${indice}. ${item}`))
paraCada(frutas, (item)=> console.log(`${item.toUpperCase()} (${item.length} letras)`))*/