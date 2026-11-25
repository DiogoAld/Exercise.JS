function exercicio01(){
    const alunos = ["Ana", "Bruno", "Carla", "Diego"];
    alunos.forEach((aluno)=>console.log(`Presente: ${aluno}`))
}
function exercicio02(){
    const tarefas = ["Estudar para a prova", "Lavar a louça", "Fazer os exercícios de JavaScript"];
    //tarefas.forEach((tarefa, indice) => console.log(`${indice++}. ${tarefa}`));

    /*Saída antes da correção:
      0. Estudar para a prova
      1. Lavar a louça
      2. Fazer os exercícios de JavaScript */

    /*A saída ocorre de maneira errada, visto que a lista de tarefas deveria começar pelo número 1.
      O erro decorre da posição do "++" estar incorreta segundo uma particularidade de leitura do código do javascript,
      portanto para que a ordem ocorra da maneira desejada é preciso que o índice se incremente antes,
      ou seja, essa é a forma corrigida do exercício:
    */
   tarefas.forEach((tarefa,indice)=> console.log(`${++indice}. ${tarefa}`))
}
function exercicio03() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numeros.map((numero)=>numero*5))
    console.log(numeros)
}
function exercicio04() {
    const idades = [15, 17, 30, 52];
    const daqui10Anos = idades.map((idade) => { idade + 10; });
    console.log(daqui10Anos);

    // Retorno antes da correção: [ undefined, undefined, undefined, undefined ]

    /* O retorno denuncia que o erro ocorre na tentativa de definir um valor aos elementos do array;
       isso ocorre pelo uso das chaves dentro do método .map ao colocar "{ idade + 10; }",
       o uso das chaves faz com que haja a interrupção da função padrão do javascript de retorno após "=>",
       potanto para corrigir temos duas opções, a com chaves:
    */
       //const daqui10Anos = idades.map((idade) => { return idade + 10; });

    /* Essa versão implementa de modo explícito o retorno, mas há também a versão implícita,
       versão implícita:
    */
       //const daqui10Anos = idades.map((idade) =>  idade + 10; );
}
function exercicio05() {
    const precos = [12, 30, 5, 18];
    total=0
    precos.forEach((preco,indice)=>{ console.log(`${++indice}. R$${preco}`); total+=preco})
    console.log(`Total da compra: R$ ${total}`)
}
function exercicio06() {
    const nomes = ["Ana", "BRUNO", "Carla"];
    console.log(nomes.map((nome)=>(`${nome.toLowerCase()}@coude.com.br`)))
}
function exercicio07() {
    const celsius = [0, 25, 30, 100];
    const fahrenheit=celsius.map((C)=>C * 9 / 5 + 32)
    celsius.forEach((temperatura,indice)=>console.log(`${celsius[indice]}°C = ${fahrenheit[indice]}°F`))
}
function exercicio08() {
    const chegada = ["Lia", "Rafa", "Téo", "Bia"];
    const podio=chegada.map((competidor,indice)=>`${indice+1}º lugar: ${competidor}`)
    podio.forEach((posicao)=>console.log(posicao))
}
function exercicio09() {
    const valores = [4, 10, 20, 50];
    function transformar(lista,fn) {
        const nova=[]
        for(let i=0;i<lista.length;i++) {
            nova.push(fn(lista[i]))
        }
        console.log(nova) 
    }
    transformar(valores, (valor)=>valor/2)
    transformar(valores, (valor)=>valor**2)
    transformar(valores, (valor)=>(`R$ ${valor}`))

    console.log(valores.map((valor)=>valor/2))
}
function exercicio10() {
    const produtos = ["Arroz", "Leite", "Café"];
    const precos = [25, 4, 25];
    const quantidades = [2, 3, 1];

    let subtotais=precos.map((preco,indice)=>preco*quantidades[indice])
    console.log(subtotais)

    produtos.forEach((produto,indice)=>console.log(`${quantidades[indice]}x ${produto} = R$ ${subtotais[indice]}`))

    
    let total=0
    subtotais.forEach((subtotal)=>total+=subtotal)
    console.log(`Total: R$ ${total}`)
}