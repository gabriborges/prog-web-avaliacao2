let NovaTarefa = document.querySelector("#NovaTarefa")
let addTarefa = document.querySelector("#addTarefa")
let listaDeTarefas = document.querySelector("#listaDeTarefas")

NovaTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13){
        let tarefa={
            nome: NovaTarefa.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa)
    }
})

addTarefa.addEventListener('click', (e) =>{
    let tarefa={
        nome: NovaTarefa.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa)
})

function gerarId(){
    return Math.floor(Math.random() *3000)
     
}

function adicionarTarefa(tarefa){

    let li = criarItem(tarefa)
    listaDeTarefas.appendChild(li)
    NovaTarefa.value=''

}

function criarItem(tarefa){
    let li = document.createElement('li')
    li.id = tarefa.id
 
    let span = document.createElement('span')
    span.classList.add('textoTarefa')
    span.innerHTML= tarefa.nome

    let div = document.createElement('div')

    let btnExcluir = document.createElement('button')
    btnExcluir.classList.add('btnAcao')
    btnExcluir.innerHTML='<i class="fa-regular fa-trash-can"></i>'
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')
    
    //remover bootstrap
    div.appendChild(btnExcluir)
    li.appendChild(span)
    li.appendChild(div)
    return li;

}

function excluir(idTarefa){
    let li = document.getElementById(''+idTarefa+'')
    if(li){
        listaDeTarefas.removeChild(li)
    }
}
