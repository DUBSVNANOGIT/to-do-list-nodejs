var tarefas = [];

function addTarefas() {
    const tarefa = document.getElementById("inserirInput").value;
    const novaTarefa = {
        id : tarefas.length + 1,
        tarefa: tarefa
    }
    tarefas.push(novaTarefa);
    atualizarLista();
    console.log(tarefas);
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarLista();
});

function atualizarLista() {
    const listarTarefas = tarefas.map (t => {`<li> ${t.id} ${t.tarefa} </li>`});
    const listHtml = listarTarefas.join('');
    const listaElement = document.getElementById("listaTarefas");
    listaElement.innerHTML = listHtml;
}
